"use client";

import React, { useEffect, useRef } from "react";

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let resizeTimeout: NodeJS.Timeout;
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(setCanvasSize, 100);
    });

    const numStars = 200;
    const stars: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width * 2 - canvas.width,
            y: Math.random() * canvas.height * 2 - canvas.height,
            z: Math.random() * canvas.width
        });
    }

    let animationFrameId: number;

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      for (let i = 0; i < numStars; i++) {
        const star = stars[i];

        star.z -= 2;
        if (star.z <= 0) {
            star.z = canvas.width;
            star.x = Math.random() * canvas.width * 2 - canvas.width;
            star.y = Math.random() * canvas.height * 2 - canvas.height;
        }

        const x = cx + star.x / (star.z / 100);
        const y = cy + star.y / (star.z / 100);
        const radius = Math.max(0.1, 2 - star.z / (canvas.width / 2));

        if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
            ctx.beginPath();
            ctx.fillStyle = `rgba(255, 255, 255, ${1 - star.z / canvas.width})`;
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 h-full w-full bg-black pointer-events-none"
    />
  );
}
