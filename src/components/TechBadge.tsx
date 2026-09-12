interface Props {
  name: string;
  small?: boolean;
}

export default function TechBadge({ name, small }: Props) {
  return (
    <span
      className={`inline-flex items-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-gray-200 font-medium cursor-default transition-all hover:bg-white/[0.08] hover:border-purple-400/30 hover:text-white ${
        small ? "px-2.5 py-1 text-[11px]" : "px-3 py-1.5 text-xs"
      }`}
    >
      {name}
    </span>
  );
}
