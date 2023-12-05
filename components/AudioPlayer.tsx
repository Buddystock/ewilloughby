'use client'
import React, { useState, useRef, useEffect } from 'react';
import { mplus1 } from '@/app/fonts';
interface Song {
  title: string;
  url: string;
}

interface AudioPlayerProps {
  songs: Song[];
}

export default function AudioPlayer({ songs }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);

  useEffect(() => {
    if (audioRef.current) {
      // Set the audio source when the current song changes
      audioRef.current.src = songs[currentSongIndex].url;
      audioRef.current.play();
    }
  }, [currentSongIndex, songs]);

  function playPauseHandler() {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }

  function nextSongHandler() {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  }

  function prevSongHandler() {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
    );
  }

  return (
    <div>
      <h2 className={`${mplus1.className}`}>{songs[currentSongIndex].title}</h2>
      <audio className="w-full" ref={audioRef} controls />
      <div className="flex justify-around mt-4">
        <button className="px-4" onClick={prevSongHandler}>Previous</button>
        <button className="px-4" onClick={playPauseHandler}>
          {audioRef.current?.paused ? 'Play' : 'Pause'}
        </button>
        <button className="px-4" onClick={nextSongHandler}>Next</button>
      </div>
    </div>
  );
};
