import { useEffect, useRef } from 'react';

export const BackgroundAudio = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Auto-play ambient DOORS-style audio
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {
        // Handle autoplay restrictions - user will need to interact first
        console.log('Audio autoplay blocked - user interaction needed');
      });
    }
  }, []);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
      className="hidden"
    >
      {/* Using a atmospheric ambient sound that mimics DOORS ambience */}
      <source 
        src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fd..." 
        type="audio/wav" 
      />
      Your browser does not support the audio element.
    </audio>
  );
};