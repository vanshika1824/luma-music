import React from "react";

function MusicCard({ track, setCurrentTrack, onLike, onAddToPlaylist }) {
  return (
    <div
      className="bg-zinc-900 p-4 rounded-xl hover:bg-zinc-800 cursor-pointer transition duration-300 transform hover:scale-105"
      onClick={() => setCurrentTrack(track)}
    >
      {/* Album Cover */}
      <img
        src={track.album.cover_medium}
        alt={track.title}
        className="rounded-lg mb-3 shadow-lg"
      />

      {/* Track Info */}
      <h3 className="font-semibold text-white truncate">{track.title}</h3>
      <p className="text-sm text-gray-400 truncate">{track.artist.name}</p>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-3">
        {/* Like Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onLike(track);
          }}
          className="text-red-500 hover:text-red-400 text-lg transition-colors"
          title="Like"
        >
          ❤️
        </button>

        {/* Add to Playlist */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToPlaylist(track);
          }}
          className="text-[#6b5dfc] hover:text-[#553bcc] text-lg transition-colors"
          title="Add to Playlist"
        >
          ➕
        </button>
      </div>
    </div>
  );
}

export default MusicCard;
