// Authentic Brand & Platform Logos
interface IconProps {
  size?: number;
  className?: string;
}

// GitHub Logo
export function GithubIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

// LinkedIn Logo
export function LinkedinIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// LeetCode
export function LeetCodeIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.684 5.92 5.92 0 0 0 2.454-.258 5.987 5.987 0 0 0 2.215-1.189l3.525-3.509a1.38 1.38 0 0 0 .028-1.944 1.378 1.378 0 0 0-1.954-.029l-3.525 3.51a3.197 3.197 0 0 1-1.185.637 3.167 3.167 0 0 1-1.31.139 3.176 3.176 0 0 1-2.576-1.97 3.13 3.13 0 0 1-.186-.543 3.2 3.2 0 0 1-.034-1.261 3.23 3.23 0 0 1 .657-1.127l3.854-4.126L14.444 2.38a1.379 1.379 0 0 0-.961-2.38z" fill="#FFA116" />
      <path d="M9.835 13.924H21.56a1.382 1.382 0 0 0 1.38-1.382 1.382 1.382 0 0 0-1.38-1.382H9.835a1.382 1.382 0 0 0-1.38 1.382 1.382 1.382 0 0 0 1.38 1.382z" fill="#FFFFFF" />
    </svg>
  );
}

// CodeChef
export function CodeChefIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2c-3.14 0-5.74 2.1-6.44 4.95A4.5 4.5 0 0 0 2 11c0 2.27 1.68 4.14 3.88 4.45C6.18 16.63 7.42 17.5 9 17.85V19h6v-1.15c1.58-.35 2.82-1.22 3.12-2.4 2.2-.31 3.88-2.18 3.88-4.45a4.5 4.5 0 0 0-3.56-4.05C17.74 4.1 15.14 2 12 2zm-4 18h8v2H8v-2z" fill="#D29985" />
      <path d="M7 11a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm7 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z" fill="#5B4636" />
      <path d="M10 14.5c.6.5 1.3.8 2 .8s1.4-.3 2-.8" stroke="#5B4636" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

// HackerRank
export function HackerRankIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="4" fill="#2EC866" />
      <path d="M7 6v12h2.5v-4.5h5V18H17V6h-2.5v4.5h-5V6H7z" fill="#FFFFFF" />
    </svg>
  );
}

// AWS
export function AwsIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6.76 11.03L4.56 18h1.6l.46-1.7h2.5l.5 1.7h1.58L9.04 11.03H6.76zm.34 4l.82-3.1.83 3.1H7.1zm5.82-4h1.5v5.3h3.1v1.7h-4.6V11.03zm6.32 4.06c0 .55.15.97.46 1.27.31.3.74.45 1.29.45.38 0 .7-.07.97-.2.27-.14.48-.33.62-.58v.7c-.16.22-.38.39-.65.52-.27.13-.59.19-.94.19-.85 0-1.51-.27-1.98-.8-.47-.53-.7-1.26-.7-2.2 0-.91.24-1.63.72-2.17.48-.54 1.12-.81 1.92-.81.36 0 .68.07.96.2.28.13.5.31.66.55v-.62h1.17v4.7c0 .78-.24 1.39-.73 1.83-.49.44-1.16.66-2.01.66-.6 0-1.11-.11-1.53-.34-.42-.23-.73-.55-.93-.97l1.05-.56c.12.24.3.43.53.56.23.13.5.2.82.2.46 0 .83-.13 1.1-.38.27-.25.41-.6.41-1.05v-.57c-.14.25-.35.44-.63.58-.28.14-.6.21-.96.21-.56 0-1.01-.18-1.35-.54-.34-.36-.51-.84-.51-1.44v-2.63h1.17v2.44z" fill="#FF9900" />
    </svg>
  );
}

// Cisco
export function CiscoIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <rect x="2" y="11" width="1.5" height="5" rx="0.75" fill="#049FD9" />
      <rect x="5.5" y="7" width="1.5" height="9" rx="0.75" fill="#049FD9" />
      <rect x="9" y="11" width="1.5" height="5" rx="0.75" fill="#049FD9" />
      <rect x="11.25" y="4" width="1.5" height="12" rx="0.75" fill="#049FD9" />
      <rect x="13.5" y="11" width="1.5" height="5" rx="0.75" fill="#049FD9" />
      <rect x="17" y="7" width="1.5" height="9" rx="0.75" fill="#049FD9" />
      <rect x="20.5" y="11" width="1.5" height="5" rx="0.75" fill="#049FD9" />
      <path d="M2 18h20v2H2z" fill="#049FD9" />
    </svg>
  );
}

// NPTEL
export function NptelIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="6" fill="#881337" />
      <path d="M6 16V8l5 8V8M14 8v8h4M14 8h4M14 12h3" stroke="#FDE047" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Udemy
export function UdemyIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="4" fill="#A435F0" />
      <path d="M7 6v6.5c0 2.8 2.2 5 5 5s5-2.2 5-5V6h-2.5v6.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5V6H7z" fill="#FFFFFF" />
    </svg>
  );
}

// Simplilearn
export function SimplilearnIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="4" fill="#0077B5" />
      <path d="M15.5 8.5C14.8 7.6 13.7 7 12 7c-2.8 0-4.5 1.7-4.5 3.8 0 4.2 8.5 2.2 8.5 6.2 0 2.2-1.9 3.5-4.5 3.5-2.1 0-3.6-.8-4.5-2l1.8-1.5c.6.8 1.5 1.3 2.7 1.3 1.4 0 2.2-.7 2.2-1.5 0-4.1-8.5-2.3-8.5-6.2 0-3.3 2.5-5.6 6.8-5.6 2.5 0 4.1.9 5.1 2l-1.9 1.5z" fill="#FFFFFF" />
    </svg>
  );
}

// ── Technology Logos ───────────────────────────────────────────

// Python
export function PythonIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M11.9 2c-4.3 0-4 1.9-4 1.9v2h4.1v.6H6.3s-2.8-.3-2.8 4 2.4 4.2 2.4 4.2h1.4v-2s-.1-2.4 2.4-2.4h4.1s2.3.1 2.3-2.2V4.2S16.6 2 11.9 2zm-1.2 1.3a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6z" fill="#3776AB" />
      <path d="M12.1 22c4.3 0 4-1.9 4-1.9v-2h-4.1v-.6h5.7s2.8.3 2.8-4-2.4-4.2-2.4-4.2h-1.4v2s.1 2.4-2.4 2.4h-4.1s-2.3-.1-2.3 2.2v3.9s-.5 2.2 4.2 2.2zm1.2-1.3a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6z" fill="#FFD43B" />
    </svg>
  );
}

// React
export function ReactIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5" className={className}>
      <ellipse cx="12" cy="12" rx="4" ry="11" />
      <ellipse cx="12" cy="12" rx="4" ry="11" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="4" ry="11" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    </svg>
  );
}

// Docker
export function DockerIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path d="M13.98 11.08h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.19.19v1.88c0 .1.09.19.19.19m-2.95-5.43h2.12a.19.19 0 0 0 .19-.19V3.58a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.19.19v1.88c0 .11.09.19.19.19m0 2.71h2.12a.19.19 0 0 0 .19-.19V6.29a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.19.19v1.88c0 .11.09.19.19.19m-2.93 0h2.12a.19.19 0 0 0 .19-.19V6.29a.19.19 0 0 0-.19-.19H8.1a.19.19 0 0 0-.19.19v1.88c0 .11.08.19.19.19m-2.96 0h2.12a.19.19 0 0 0 .19-.19V6.29a.19.19 0 0 0-.19-.19H5.14a.19.19 0 0 0-.19.19v1.88c0 .11.09.19.19.19m5.89 2.72h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.19.19v1.88c0 .1.09.19.19.19m-2.93 0h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19H8.1a.19.19 0 0 0-.19.19v1.88c0 .1.08.19.19.19m-2.96 0h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19H5.14a.19.19 0 0 0-.19.19v1.88c0 .1.09.19.19.19m12.24 1.49c-.4-.18-.84-.27-1.29-.27-.36 0-.66.05-.97.13.14-.3.2-.63.2-.97 0-.46-.14-.89-.37-1.28a3.4 3.4 0 0 0-.96-1.05l-.21-.15-.17.2a3.7 3.7 0 0 0-.62 1.34c-.08.36-.1.75-.05 1.12a4.94 4.94 0 0 1-1.82-.38 5.81 5.81 0 0 1-.59-.27H2.43l-.06.29a6.26 6.26 0 0 0 .58 3.39l.19.35A5.86 5.86 0 0 0 5.52 19a8.3 8.3 0 0 0 1.54.31c.65.08 1.3.09 1.95.04a11.3 11.3 0 0 0 3.43-.88 8.2 8.2 0 0 0 2.42-1.65A7.5 7.5 0 0 0 16.76 14l.06-.11h.51c.61 0 1.12-.17 1.58-.5.24-.17.45-.37.62-.61l.08-.12-.15-.1a3.3 3.3 0 0 0-1.04-.44z" fill="#2496ED" />
    </svg>
  );
}

// PostgreSQL
export function PostgresIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path d="M17.13 4.15c-1.1-.83-2.6-1.24-4.12-1.24-1 0-2 .18-2.87.54-.6-.08-1.22-.12-1.84-.12C5.58 3.33 3.5 4.58 3.5 6.6c0 .5.1.98.27 1.43A5.8 5.8 0 0 0 2.5 11.5c0 2.27 1.37 4.3 3.43 5.22.25 1.8 1.46 3.28 3.4 3.28.72 0 1.37-.22 1.88-.6a5.6 5.6 0 0 0 1.79.3c2.38 0 4.18-1.55 4.64-3.67 1.9-.82 3.15-2.62 3.15-4.73a5.8 5.8 0 0 0-3.66-5.15z" fill="#336791" />
      <path d="M12 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" fill="white" />
    </svg>
  );
}

// Redis
export function RedisIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="#DC382D" />
      <path d="M12 4.5l7 3.5v7l-7 3.5L5 15V8l7-3.5z" fill="none" stroke="white" strokeWidth="0.8" />
      <path d="M8.5 10h7M10 13h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ── NEW Technology Icons ──────────────────────────────────────

// JavaScript
export function JavaScriptIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
      <rect width="24" height="24" rx="3" fill="#F7DF1E" />
      <path d="M6.5 17.2l1.6-1c.3.55.6 1 1.3 1 .65 0 1.1-.25 1.1-1.25V9.5h2v6.5c0 2.1-1.2 3-3 3-1.6 0-2.5-.85-3-1.8m7-0.3l1.6-0.95c.45.7 1 1.2 2.05 1.2.85 0 1.4-.43 1.4-1.02 0-.7-.56-0.96-1.5-1.37l-.52-.22c-1.5-.64-2.5-1.44-2.5-3.13 0-1.56 1.19-2.74 3.04-2.74 1.32 0 2.27.46 2.95 1.66l-1.62 1.04c-.35-.64-.74-.89-1.33-.89-.6 0-.99.39-.99.89 0 .63.39.88 1.29 1.26l.52.22c1.76.76 2.76 1.53 2.76 3.27 0 1.87-1.47 2.9-3.45 2.9-1.93 0-3.18-.92-3.79-2.12" fill="#323330" />
    </svg>
  );
}

// C++ Icon
export function CppIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
      <rect width="24" height="24" rx="3" fill="#00599C" />
      <path d="M10.5 7C7.46 7 5 9.46 5 12.5S7.46 18 10.5 18c1.97 0 3.7-1.04 4.67-2.6l-2.34-1.35c-.49.78-1.36 1.3-2.33 1.3-1.52 0-2.75-1.23-2.75-2.75S8.98 9.85 10.5 9.85c.97 0 1.84.52 2.33 1.3l2.34-1.35C14.2 8.04 12.47 7 10.5 7z" fill="white" />
      <path d="M16.5 11.5h-1v-1h-1v1h-1v1h1v1h1v-1h1v-1zm3 0h-1v-1h-1v1h-1v1h1v1h1v-1h1v-1z" fill="white" />
    </svg>
  );
}

// C Icon
export function CIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
      <rect width="24" height="24" rx="3" fill="#A8B9CC" />
      <path d="M12 7C8.69 7 6 9.69 6 13s2.69 6 6 6c2.14 0 4.03-1.13 5.08-2.83l-2.54-1.47c-.53.86-1.48 1.44-2.54 1.44-1.66 0-3-1.34-3-3s1.34-3 3-3c1.06 0 2.01.58 2.54 1.44l2.54-1.47C16.03 8.13 14.14 7 12 7z" fill="#283544" />
    </svg>
  );
}

// Node.js
export function NodeIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.46 1.7.46 1.37 0 2.16-.83 2.16-2.27V8.44c0-.12-.1-.22-.22-.22H8.15c-.12 0-.22.1-.22.22v8.12c0 .64-.66 1.28-1.74.74l-2.03-1.17a.26.26 0 0 1-.13-.23V7.71c0-.1.05-.18.13-.23l7.44-4.3a.26.26 0 0 1 .26 0l7.44 4.3c.08.05.13.14.13.23v8.58c0 .1-.05.18-.13.23l-7.44 4.3a.26.26 0 0 1-.26 0l-1.9-1.12c-.06-.04-.14-.05-.21-.02-.59.26-.7.3-1.25.45-.14.04-.34.11.08.31l2.48 1.47c.24.14.5.2.78.2s.55-.07.78-.2l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3a1.56 1.56 0 0 0-.78-.2" fill="#689F63" />
    </svg>
  );
}

// Express.js
export function ExpressIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
      <rect width="24" height="24" rx="3" fill="#333" />
      <path d="M5 15.5c0-1.65.73-3.1 1.88-4.12L5.26 9.5H3.5v5.5c0 .28.22.5.5.5h1zm13.5 0V9.5h-1.76l-1.62 1.88c1.15 1.02 1.88 2.47 1.88 4.12h1c.28 0 .5-.22.5-.5zM12 8.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5S10.62 10.5 12 10.5s2.5 1.12 2.5 2.5S13.38 15.5 12 15.5z" fill="white" />
    </svg>
  );
}

// MySQL
export function MySQLIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
      <rect width="24" height="24" rx="3" fill="#00758F" />
      <path d="M7 8v8l2.5-4L12 16V8h-1.5v5l-1-2-1 2V8H7zm6.5 0v8h4v-1.5h-2.5V8H13.5z" fill="white" />
    </svg>
  );
}

// Firebase
export function FirebaseIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path d="M4.53 19.42L6.96 3.72a.43.43 0 0 1 .8-.17l2.55 4.78-1.1 2.07L4.53 19.42z" fill="#FFA000" />
      <path d="M12.66 10.75l1.44-2.7a.43.43 0 0 1 .76 0l4.62 8.36L12.66 10.75z" fill="#F57C00" />
      <path d="M19.48 16.41L17.71 4.67a.43.43 0 0 0-.75-.21L4.53 19.42l6.64 3.73a1.28 1.28 0 0 0 1.25 0l7.06-3.96V16.41z" fill="#FFCA28" />
    </svg>
  );
}

// Nginx
export function NginxIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#009639" />
      <path d="M8.5 15.5V8.5l3 3.5V8.5h1v7l-3-3.5v3.5h-1z" fill="white" />
    </svg>
  );
}

// RabbitMQ
export function RabbitMQIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
      <rect width="24" height="24" rx="3" fill="#FF6600" />
      <path d="M18.5 10h-3.67a.83.83 0 0 1-.83-.83V5.5h-2v3.67a.83.83 0 0 1-.83.83H7.5A1.5 1.5 0 0 0 6 11.5v5A1.5 1.5 0 0 0 7.5 18h11a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5zm-3 5.5h-2v-2h2v2zm3.5 0h-2v-2h2v2z" fill="white" />
    </svg>
  );
}

// Git
export function GitIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path d="M23.55 10.41L13.59.45a1.53 1.53 0 0 0-2.17 0L9.26 2.61l2.74 2.74a1.82 1.82 0 0 1 2.3 2.32l2.64 2.64a1.82 1.82 0 1 1-1.09 1.02l-2.46-2.46v6.47a1.82 1.82 0 1 1-1.5-.08V8.63a1.82 1.82 0 0 1-.99-2.39L8.2 3.55.45 11.3a1.53 1.53 0 0 0 0 2.17l9.96 9.96a1.53 1.53 0 0 0 2.17 0l9.96-9.96a1.53 1.53 0 0 0 0-2.17z" fill="#F05032" />
    </svg>
  );
}

// LangChain
export function LangChainIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="6" fill="#1C3C3C" />
      <path d="M8 6v12M8 6l4 3-4 3M16 6v12M12 18l4-3-4-3" stroke="#65D9A5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// LangGraph
export function LangGraphIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="6" fill="#1a1a2e" />
      <circle cx="7" cy="7" r="2.5" fill="#8b5cf6" />
      <circle cx="17" cy="7" r="2.5" fill="#60a5fa" />
      <circle cx="12" cy="17" r="2.5" fill="#34d399" />
      <line x1="9" y1="8" x2="11" y2="15" stroke="#a78bfa" strokeWidth="1.2" />
      <line x1="15" y1="8" x2="13" y2="15" stroke="#60a5fa" strokeWidth="1.2" />
      <line x1="9.5" y1="7" x2="14.5" y2="7" stroke="#818cf8" strokeWidth="1.2" />
    </svg>
  );
}

// Jest
export function JestIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
      <rect width="24" height="24" rx="3" fill="#C21325" />
      <path d="M14.5 5h-5L12 11.5 14.5 5zM12 13c-1.66 0-3 1.12-3 2.5S10.34 18 12 18s3-1.12 3-2.5S13.66 13 12 13z" fill="white" />
    </svg>
  );
}

// Postman
export function PostmanIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="11" fill="#FF6C37" />
      <path d="M15.5 8.5l-7 7M8.5 15.5l2-5.5M10.5 10l5.5-2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
