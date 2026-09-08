import { cn } from "@/lib/cn";

type CubeMarkProps = {
  className?: string;
  animated?: boolean;
  title?: string;
};

export function CubeMark({ className, animated = false, title: _title = "RMD26 cube" }: CubeMarkProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={cn("text-accent", className)}
      role="img"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="sphereFill" cx="38%" cy="32%" r="70%">
          <stop offset="0%" stopColor="#3a4658" />
          <stop offset="55%" stopColor="#141820" />
          <stop offset="100%" stopColor="#05070b" />
        </radialGradient>
        <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.45" />
        </linearGradient>
      </defs>
      <g className={animated ? "origin-center" : undefined}>
        <ellipse cx="60" cy="64" rx="22" ry="22" fill="url(#sphereFill)" />
        <ellipse
          cx="60"
          cy="64"
          rx="22"
          ry="22"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.25"
          strokeWidth="0.8"
        />
        <path
          d="M60 18 L102 42 L102 86 L60 110 L18 86 L18 42 Z"
          fill="none"
          stroke="url(#edge)"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M60 18 L60 62 L18 86" fill="none" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.1" />
        <path d="M60 62 L102 86" fill="none" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.1" />
        <path d="M18 42 L60 62 L102 42" fill="none" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.2" />
        <circle cx="60" cy="18" r="1.8" fill="currentColor" />
        <circle cx="102" cy="42" r="1.6" fill="currentColor" />
        <circle cx="18" cy="42" r="1.6" fill="currentColor" />
        <circle cx="60" cy="110" r="1.6" fill="currentColor" />
      </g>
    </svg>
  );
}

export function CubeScene({ className }: { className?: string }) {
  return (
    <div className={cn("relative aspect-square w-full max-w-md", className)} aria-hidden="true">
      <div className="absolute inset-[8%] rounded-full border border-line" />
      <div className="absolute inset-[18%] rounded-full border border-line" />
      <div className="cube-spin absolute inset-0 flex items-center justify-center">
        <CubeMark className="h-[78%] w-[78%]" animated />
      </div>
    </div>
  );
}
