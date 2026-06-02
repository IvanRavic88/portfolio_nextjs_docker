interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

// CSS-only staggered y/opacity reveal — no framer-motion, so this stays off
// the client JS hydration path (it renders as a server component). `motion-safe`
// gates the animation; reduced-motion users get the content immediately at full
// opacity, and the `both` fill-mode holds the start state during the delay.
export default function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  return (
    <div
      className={`motion-safe:animate-fadeRise ${className ?? ''}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
