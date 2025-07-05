
import React from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PlayerControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const PlayerControls = ({ isPlaying, onPlayPause, onNext, onPrevious }: PlayerControlsProps) => {
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="ghost"
        size="lg"
        onClick={onPrevious}
        className="text-white hover:text-purple-300 hover:bg-white/10 rounded-full w-12 h-12"
      >
        <SkipBack className="w-6 h-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="lg"
        onClick={onPlayPause}
        className="text-white hover:text-purple-300 hover:bg-white/10 rounded-full w-16 h-16 bg-white/20"
      >
        {isPlaying ? (
          <Pause className="w-8 h-8" />
        ) : (
          <Play className="w-8 h-8 ml-1" />
        )}
      </Button>
      
      <Button
        variant="ghost"
        size="lg"
        onClick={onNext}
        className="text-white hover:text-purple-300 hover:bg-white/10 rounded-full w-12 h-12"
      >
        <SkipForward className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default PlayerControls;
