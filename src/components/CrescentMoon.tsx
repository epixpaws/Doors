import { useEffect, useState } from 'react';

interface CrescentMoonProps {
  className?: string;
}

export const CrescentMoon = ({ className = "" }: CrescentMoonProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div 
        className={`
          w-24 h-24 md:w-32 md:h-32 relative
          transition-opacity duration-2000 ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}
      >
        {/* Moon base circle */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(135deg, hsl(195 100% 85%), hsl(195 80% 75%))',
            boxShadow: `
              0 0 40px hsl(195 100% 70% / 0.8),
              0 0 80px hsl(195 100% 60% / 0.6),
              inset -8px -8px 0px hsl(220 30% 8% / 0.9)
            `
          }}
        />
        
        {/* Moon glow */}
        <div 
          className="absolute inset-0 rounded-full animate-guiding-light-pulse"
          style={{
            background: 'radial-gradient(circle, hsl(195 100% 70% / 0.4) 0%, transparent 70%)',
            transform: 'scale(1.5)'
          }}
        />
        
        {/* Additional outer glow */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(195 100% 80% / 0.2) 0%, transparent 80%)',
            transform: 'scale(2)'
          }}
        />
      </div>
    </div>
  );
};