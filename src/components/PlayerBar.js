import React, { useRef, useState } from "react";

function PlayerBar({ currentTrack }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  if (!currentTrack) return null;

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-zinc-900 p-4 flex items-center justify-between border-t border-zinc-800">
      {/* Left: Song Info */}
      <div className="flex items-center gap-4 w-1/3">
        <img
          src={currentTrack.album.cover_small}
          alt={currentTrack.title}
          className="w-14 h-14 rounded shadow-lg"
        />
        <div>
          <h4 className="font-semibold text-white truncate">
            {currentTrack.title}
          </h4>
          <p className="text-sm text-gray-400 truncate">
            {currentTrack.artist.name}
          </p>
        </div>
      </div>

      {/* Center: Controls */}
      <div className="flex flex-col items-center gap-2 w-1/3">
        <div className="flex gap-6 text-xl text-gray-300">
          <button className="hover:text-white">⏮</button>
          <button
            onClick={togglePlay}
            className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:scale-105 transition"
          >
            {isPlaying ? "⏸" : "▶"}
          </button>
          <button className="hover:text-white">⏭</button>
        </div>
        {/* Progress bar */}
        <input
          type="range"
          className="w-64 accent-green-500"
          min="0"
          max="100"
        />
      </div>

      {/* Right: Volume */}
      <div className="flex items-center gap-2 w-1/3 justify-end text-gray-300">
        🔊
        <input type="range" className="w-24 accent-green-500" />
      </div>

      {/* Hidden audio element */}
      <audio ref={audioRef} autoPlay src={currentTrack.preview} />
    </div>
  );
}

export default PlayerBar;
