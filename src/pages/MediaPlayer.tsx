
import React, { useState, useRef, useEffect } from 'react';
import PlayerControls from '../components/PlayerControls';
import TrackDisplay from '../components/TrackDisplay';
import Playlist from '../components/Playlist';
import VolumeControl from '../components/VolumeControl';
import ProgressBar from '../components/ProgressBar';
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

const MediaPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  // Sample playlist data
  const [playlist] = useState<Track[]>([
    {
      id: 1,
      title: "Ambient Waves",
      artist: "Ocean Sounds",
      album: "Nature Collection",
      duration: 180,
      src: "https://www.soundjay.com/misc/sounds-627.wav"
    },
    {
      id: 2,
      title: "Forest Melody",
      artist: "Nature Sounds",
      album: "Peaceful Moments",
      duration: 240,
      src: "https://www.soundjay.com/misc/sounds-627.wav"
    },
    {
      id: 3,
      title: "City Lights",
      artist: "Urban Beats",
      album: "Night Vibes",
      duration: 200,
      src: "https://www.soundjay.com/misc/sounds-627.wav"
    },
    {
      id: 4,
      title: "Mountain Echo",
      artist: "Acoustic Dreams",
      album: "Highland Sessions",
      duration: 220,
      src: "https://www.soundjay.com/misc/sounds-627.wav"
    }
  ]);

  useEffect(() => {
    if (playlist.length > 0 && !currentTrack) {
      setCurrentTrack(playlist[0]);
    }
  }, [playlist, currentTrack]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleNext);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleNext);
    };
  }, [currentTrack]);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (!currentTrack) return;
    const currentIndex = playlist.findIndex(track => track.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % playlist.length;
    setCurrentTrack(playlist[nextIndex]);
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    if (!currentTrack) return;
    const currentIndex = playlist.findIndex(track => track.id === currentTrack.id);
    const prevIndex = currentIndex === 0 ? playlist.length - 1 : currentIndex - 1;
    setCurrentTrack(playlist[prevIndex]);
    setIsPlaying(true);
  };

  const handleSeek = (time: number) => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  const handleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isMuted) {
        audio.volume = volume;
        setIsMuted(false);
      } else {
        audio.volume = 0;
        setIsMuted(true);
      }
    }
  };

  const handleTrackSelect = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Music className="w-8 h-8 text-white" />
              <h1 className="text-4xl font-bold text-white">Media Player</h1>
            </div>
            <p className="text-gray-300">Your personal music experience</p>
          </div>

          {/* Main Player */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-6 border border-white/20">
            <TrackDisplay track={currentTrack} />
            
            <div className="mt-6">
              <ProgressBar
                currentTime={currentTime}
                duration={duration}
                onSeek={handleSeek}
              />
            </div>

            <div className="flex items-center justify-between mt-6">
              <VolumeControl
                volume={isMuted ? 0 : volume}
                isMuted={isMuted}
                onVolumeChange={handleVolumeChange}
                onMute={handleMute}
              />
              
              <PlayerControls
                isPlaying={isPlaying}
                onPlayPause={handlePlayPause}
                onNext={handleNext}
                onPrevious={handlePrevious}
              />
              
              <div className="w-32"></div> {/* Spacer for symmetry */}
            </div>
          </div>

          {/* Playlist */}
          <Playlist
            tracks={playlist}
            currentTrack={currentTrack}
            onTrackSelect={handleTrackSelect}
          />

          {/* Hidden audio element */}
          {currentTrack && (
            <audio
              ref={audioRef}
              src={currentTrack.src}
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaPlayer;
