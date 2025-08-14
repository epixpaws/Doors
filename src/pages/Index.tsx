import { CrescentMoon } from '@/components/CrescentMoon';
import { AtmosphericText } from '@/components/AtmosphericText';
import { BackgroundAudio } from '@/components/BackgroundAudio';
import { DeathScreenEffects } from '@/components/DeathScreenEffects';
import { useEffect, useState } from 'react';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate the death screen loading effect
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-atmospheric">
      {/* Background Audio */}
      <BackgroundAudio />
      
      {/* Atmospheric Effects */}
      <DeathScreenEffects />
      
      {/* Main Content */}
      <div className={`
        relative z-10 min-h-screen flex flex-col items-center justify-center
        transition-opacity duration-2000 ${isLoaded ? 'opacity-100' : 'opacity-0'}
      `}>
        {/* Crescent Moon at top */}
        <div className="absolute top-16 md:top-20 left-1/2 transform -translate-x-1/2">
          <CrescentMoon />
        </div>
        
        {/* Atmospheric Text Messages - Centered */}
        <AtmosphericText />
      </div>
      
      {/* Click to enable audio hint */}
      <div className="absolute top-4 right-4 text-xs text-guiding-light-glow opacity-50 z-20">
        Click anywhere to enable audio
      </div>
    </div>
  );
};

export default Index;