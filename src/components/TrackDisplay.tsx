
import React from 'react';
import { Music } from 'lucide-react';

interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: number;
  src: string;
  cover?: string;
}

interface TrackDisplayProps {
  track: Track | null;
}

const TrackDisplay = ({ track }: TrackDisplayProps) => {
  if (!track) {
    return (
      <div className="text-center py-8">
        <Music className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-400">No track selected</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-2xl">
        {track.cover ? (
          <img
            src={track.cover}
            alt={`${track.title} cover`}
            className="w-full h-full object-cover rounded-2xl"
          />
        ) : (
          <Music className="w-24 h-24 text-white" />
        )}
      </div>
      
      <h2 className="text-2xl font-bold text-white mb-2">{track.title}</h2>
      <p className="text-lg text-gray-300 mb-1">{track.artist}</p>
      <p className="text-sm text-gray-400">{track.album}</p>
    </div>
  );
};

export default TrackDisplay;
