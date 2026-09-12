import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    const checkTouch = () => setIsTouch("ontouchstart" in window);
    checkTouch();

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (isTouch) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 transition-opacity duration-300"
      aria-hidden="true"
    >
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,1) 0%, transparent 70%)",
          left: pos.x - 250,
          top: pos.y - 250,
        }}
      />
    </div>
  );
}
