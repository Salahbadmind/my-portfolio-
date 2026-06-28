import { useEffect, useRef } from 'react';

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse position
    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 180,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Slow movement
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1;
        
        // Distribute colors between Neon Cyan (#00F0FF), Green (#39FF14), Purple (#B026FF)
        const rand = Math.random();
        if (rand < 0.4) {
          this.color = 'rgba(0, 240, 255, 0.4)'; // Cyan
        } else if (rand < 0.7) {
          this.color = 'rgba(176, 38, 255, 0.4)'; // Purple
        } else {
          this.color = 'rgba(57, 255, 20, 0.4)'; // Neon Green
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce walls
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse attraction/repulsion interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) {
            // Gentle drift towards mouse
            const force = (mouse.radius - dist) / mouse.radius;
            this.x += (dx / dist) * force * 0.6;
            this.y += (dy / dist) * force * 0.6;
          }
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();
      }
    }

    // Initialize particles
    const particleCount = Math.min(80, Math.floor((width * height) / 15000));
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: entryWidth, height: entryHeight } = entry.contentRect;
        width = canvas.width = entryWidth;
        height = canvas.height = entryHeight;
      }
    });
    resizeObserver.observe(document.body);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid overlay
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.lineWidth = 1;
      const gridSize = 50;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const alpha = (1 - dist / 120) * 0.12;
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
