
import React from 'react';

interface ProgressBarProps {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
}

const ProgressBar = ({ currentTime, duration, onSeek }: ProgressBarProps) => {
  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const time = percent * duration;
    onSeek(time);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full">
      <div
        className="relative h-2 bg-white/20 rounded-full cursor-pointer group"
        onClick={handleClick}
      >
        <div
          className="absolute h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
        <div
          className="absolute w-4 h-4 bg-white rounded-full shadow-lg transform -translate-y-1 opacity-0 group-hover:opacity-100 transition-all duration-150"
          style={{ left: `calc(${progress}% - 8px)` }}
        />
      </div>
      
      <div className="flex justify-between text-sm text-gray-300 mt-2">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
