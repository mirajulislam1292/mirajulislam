
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  pulse: number;
  pulseRate: number;
  glow: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles: Particle[] = [];
  const particleCount = 150; // Increased particle count for more stars
  const colors = ['#ffffff', '#f0f0f0', '#e0e0e0', '#aaaaff', '#aaddff']; // Star colors
  const maxDistance = 150;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    
    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.2, // Smaller sizes for stars
          speedX: (Math.random() - 0.5) * 0.3, // Slower movement
          speedY: (Math.random() - 0.5) * 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.7 + 0.3,
          pulse: Math.random() * Math.PI * 2, // Random starting phase
          pulseRate: 0.005 + Math.random() * 0.01, // Slower pulsing
          glow: Math.random() * 5 + 3 // Glow radius
        });
      }
    };
    
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create a deep space void gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(7, 7, 20, 0.98)');
      gradient.addColorStop(0.5, 'rgba(15, 15, 35, 0.95)');
      gradient.addColorStop(1, 'rgba(10, 10, 30, 0.98)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add some nebula-like effects
      for (let i = 0; i < 3; i++) {
        const radius = Math.random() * 300 + 200;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const grd = ctx.createRadialGradient(x, y, 0, x, y, radius);
        const hue = Math.random() * 60 + 220; // Blue to purple hues
        grd.addColorStop(0, `hsla(${hue}, 80%, 30%, 0.1)`);
        grd.addColorStop(1, 'rgba(10, 10, 30, 0)');
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      
      particles.forEach((particle, i) => {
        // Update pulse effect
        particle.pulse += particle.pulseRate;
        if (particle.pulse > Math.PI * 2) {
          particle.pulse = 0;
        }
        
        // Use sine function for smooth pulsing
        const pulseFactor = 0.5 + 0.5 * Math.sin(particle.pulse);
        const size = particle.size * (0.7 + 0.3 * pulseFactor);
        const opacity = particle.opacity * (0.8 + 0.2 * pulseFactor);
        
        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0;
        else if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        else if (particle.y < 0) particle.y = canvas.height;
        
        // Mouse interaction - attract particles slightly
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          const angle = Math.atan2(dy, dx);
          const force = 0.4; // Attraction force
          particle.x += Math.cos(angle) * force;
          particle.y += Math.sin(angle) * force;
        }
        
        // Draw glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.glow * pulseFactor
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.8})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.glow * pulseFactor, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw star
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
        
        // Connect nearby particles with faint lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = particle.x - p2.x;
          const dy = particle.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / maxDistance) * pulseFactor})`;
            ctx.lineWidth = 0.2;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      
      animationFrameId = requestAnimationFrame(drawParticles);
    };
    
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    
    handleResize();
    drawParticles();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-0"
      style={{ pointerEvents: 'auto' }}
    />
  );
};

export default ParticleBackground;
