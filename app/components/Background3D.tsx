"use client";

import { useEffect, useRef, useState } from "react";

const IDLE_DELAY_MS = 2000;

export default function Background3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isIdle, setIsIdle] = useState(true);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
      setIsIdle(false);

      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => setIsIdle(true), IDLE_DELAY_MS);
    };

    const handleMouseLeave = () => {
      setMousePos({ x: 0, y: 0 });
      setIsIdle(true);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, []);

  const moveX = mousePos.x * 25;
  const moveY = mousePos.y * 25;

  return (
    <div ref={containerRef} className="bg-3d pointer-events-none" aria-hidden>
      <div
        className={`bg-3d-ai-world ${isIdle ? "bg-3d-ai-world-idle" : ""}`}
        style={
          isIdle
            ? undefined
            : { transform: `translate(${moveX}px, ${moveY}px) scale(1.05)` }
        }
      />
      <div
        className={`bg-3d-inner ${isIdle ? "bg-3d-inner-idle" : ""}`}
        style={
          isIdle
            ? undefined
            : { transform: `translate(${moveX * 0.5}px, ${moveY * 0.5}px)` }
        }
      >
        <div className="bg-3d-grid" />
        <div className="bg-3d-orb bg-3d-orb-1" />
        <div className="bg-3d-orb bg-3d-orb-2" />
        <div className="bg-3d-orb bg-3d-orb-3" />
      </div>
    </div>
  );
}
