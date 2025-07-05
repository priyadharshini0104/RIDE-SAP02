
import React from 'react';
import { Volume2, VolumeX, Volume1 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VolumeControlProps {
  volume: number;
  isMuted: boolean;
  onVolumeChange: (volume: number) => void;
  onMute: () => void;
}

const VolumeControl = ({ volume, isMuted, onVolumeChange, onMute }: VolumeControlProps) => {
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    onVolumeChange(newVolume);
  };

  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return VolumeX;
    if (volume < 0.5) return Volume1;
    return Volume2;
  };

  const VolumeIcon = getVolumeIcon();

  return (
    <div className="flex items-center gap-2 w-32">
      <Button
        variant="ghost"
        size="sm"
        onClick={onMute}
        className="text-white hover:text-purple-300 hover:bg-white/10 rounded-full w-8 h-8 p-0"
      >
        <VolumeIcon className="w-4 h-4" />
      </Button>
      
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={isMuted ? 0 : volume}
        onChange={handleVolumeChange}
        className="flex-1 h-1 bg-white/20 rounded-full appearance-none cursor-pointer volume-slider"
        style={{
          background: `linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(168, 85, 247) ${(isMuted ? 0 : volume) * 100}%, rgba(255, 255, 255, 0.2) ${(isMuted ? 0 : volume) * 100}%, rgba(255, 255, 255, 0.2) 100%)`
        }}
      />
    </div>
  );
};

export default VolumeControl;
