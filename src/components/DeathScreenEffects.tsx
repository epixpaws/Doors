import { useEffect, useState } from 'react';

export const DeathScreenEffects = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Atmospheric fog overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, hsl(195 100% 70% / 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, hsl(195 100% 60% / 0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, hsl(220 30% 8% / 0.9) 30%, hsl(220 30% 4%) 100%)
          `
        }}
      />

      {/* Floating light particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-guiding-light-glow rounded-full opacity-60"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: `particles ${8 + Math.random() * 4}s linear infinite`,
            animationDelay: `${particle.delay}s`,
            boxShadow: '0 0 6px hsl(195 100% 80% / 0.8)'
          }}
        />
      ))}

      {/* Central light rays */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-t from-transparent via-guiding-light-glow to-transparent opacity-30"
            style={{
              height: '200px',
              transform: `rotate(${i * 45}deg)`,
              transformOrigin: 'bottom center',
              animation: `guiding-light-pulse ${3 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      {/* Vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 20%, hsl(220 30% 4% / 0.7) 80%)'
        }}
      />
    </div>
  );
};