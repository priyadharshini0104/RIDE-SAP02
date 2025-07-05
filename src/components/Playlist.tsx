
import React from 'react';
import { Music, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: number;
  src: string;
  cover?: string;
}

interface PlaylistProps {
  tracks: Track[];
  currentTrack: Track | null;
  onTrackSelect: (track: Track) => void;
}

const Playlist = ({ tracks, currentTrack, onTrackSelect }: PlaylistProps) => {
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <Music className="w-5 h-5" />
        Playlist
      </h3>
      
      <div className="space-y-2">
        {tracks.map((track) => (
          <div
            key={track.id}
            className={`flex items-center p-3 rounded-xl transition-all cursor-pointer group ${
              currentTrack?.id === track.id
                ? 'bg-white/20 border border-purple-400'
                : 'hover:bg-white/10'
            }`}
            onClick={() => onTrackSelect(track)}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center mr-3">
              {currentTrack?.id === track.id ? (
                <Play className="w-5 h-5 text-white" />
              ) : (
                <Music className="w-5 h-5 text-white" />
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-white truncate">{track.title}</h4>
              <p className="text-sm text-gray-300 truncate">{track.artist}</p>
            </div>
            
            <div className="text-right">
              <p className="text-sm text-gray-400">{formatDuration(track.duration)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
