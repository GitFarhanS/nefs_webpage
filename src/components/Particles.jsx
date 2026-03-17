import { useMemo } from "react";

export default function Particles({ count = 40 }) {
  const dots = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 3,
      delay: Math.random() * 8,
      dur: 6 + Math.random() * 10,
      opacity: 0.08 + Math.random() * 0.15,
    }));
  }, [count]);

  return (
    <div className="particles" aria-hidden="true">
      {dots.map((d) => (
        <span
          key={d.id}
          className="particle"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.dur}s`,
          }}
        />
      ))}
    </div>
  );
}
