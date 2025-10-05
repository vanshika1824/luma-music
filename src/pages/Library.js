import React, { useState, useEffect } from "react";
import MusicCard from "../components/MusicCard";

function Library({ setCurrentTrack }) {
  const [activeTab, setActiveTab] = useState("liked");
  const [likedSongs, setLikedSongs] = useState([]);
  const [playlists, setPlaylists] = useState({});

  useEffect(() => {
    const liked = JSON.parse(localStorage.getItem("likedSongs")) || [];
    const pls = JSON.parse(localStorage.getItem("playlists")) || {};
    setLikedSongs(liked);
    setPlaylists(pls);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-white">📚 Your Library</h2>

      {/* Tabs */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setActiveTab("liked")}
          className={`px-5 py-2 rounded-full transition-all ${
            activeTab === "liked"
              ? "bg-green-500 text-black font-semibold shadow-lg"
              : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
          }`}
        >
          ❤️ Liked Songs
        </button>
        <button
          onClick={() => setActiveTab("playlists")}
          className={`px-5 py-2 rounded-full transition-all ${
            activeTab === "playlists"
              ? "bg-green-500 text-black font-semibold shadow-lg"
              : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
          }`}
        >
          🎵 Playlists
        </button>
      </div>

      {/* Content */}
      {activeTab === "liked" ? (
        likedSongs.length === 0 ? (
          <p className="text-gray-400 italic">No liked songs yet. Start adding some ❤️</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {likedSongs.map((track) => (
              <MusicCard
                key={track.id}
                track={track}
                setCurrentTrack={setCurrentTrack}
              />
            ))}
          </div>
        )
      ) : (
        <div>
          {Object.keys(playlists).length === 0 ? (
            <p className="text-gray-400 italic">No playlists created yet. 🎶</p>
          ) : (
            Object.keys(playlists).map((playlist) => (
              <div key={playlist} className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-green-400">{playlist}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {playlists[playlist].map((track) => (
                    <MusicCard
                      key={track.id}
                      track={track}
                      setCurrentTrack={setCurrentTrack}
                    />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Library;
