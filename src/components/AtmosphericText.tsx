import { useEffect, useState } from 'react';

const atmosphericMessages = [
  "This website is still under development...",
  "The light guides you through the darkness...", 
  "Your journey continues beyond this realm...",
  "Patience... the path will reveal itself...",
  "The developers work tirelessly in the shadows...",
  "Soon, this digital sanctuary will be complete..."
];

export const AtmosphericText = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start with first message
    setIsVisible(true);
    
    const interval = setInterval(() => {
      // Fade out current message
      setIsVisible(false);
      
      setTimeout(() => {
        // Change to next message
        setCurrentMessageIndex((prev) => (prev + 1) % atmosphericMessages.length);
        setIsVisible(true);
      }, 800);
      
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
      <div 
        className={`
          text-2xl md:text-3xl lg:text-4xl font-light text-guiding-light-glow
          transition-all duration-1000 max-w-4xl mx-auto px-8
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          float-swim
        `}
        style={{
          textShadow: 'var(--shadow-intense-glow)',
          fontFamily: 'Inter, system-ui, sans-serif',
          letterSpacing: '0.05em',
          lineHeight: '1.4'
        }}
      >
        {atmosphericMessages[currentMessageIndex]}
      </div>
    </div>
  );
};