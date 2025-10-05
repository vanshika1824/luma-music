import React, { useEffect, useState } from "react";
import MusicCard from "../components/MusicCard";

function Home({ setCurrentTrack }) {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f7640aa1d2mshb219ba678e3dc07p19c53djsn85c05e6ec517", // 🔑 your key
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTracks(data.data || []); // fallback to empty array
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p className="text-white text-center mt-20 text-lg">Loading tracks...</p>
    );
  }

  return (
    <div className="p-6">
      {/* Trending Section */}
      <h2 className="text-3xl font-bold mb-6 text-white">🔥 Trending</h2>

      {/* Grid for Music Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {(tracks || []).map((track) => (
          <MusicCard
            key={track.id}
            track={track}
            setCurrentTrack={setCurrentTrack}
            onLike={(song) => {
              let liked = JSON.parse(localStorage.getItem("likedSongs")) || [];
              if (!liked.find((s) => s.id === song.id)) liked.push(song);
              localStorage.setItem("likedSongs", JSON.stringify(liked));
              alert("Added to Liked Songs ❤️");
            }}
            onAddToPlaylist={(song) => {
              let name = prompt("Enter playlist name:");
              if (!name) return;
              let playlists =
                JSON.parse(localStorage.getItem("playlists")) || {};
              if (!playlists[name]) playlists[name] = [];
              if (!playlists[name].find((s) => s.id === song.id))
                playlists[name].push(song);
              localStorage.setItem("playlists", JSON.stringify(playlists));
              alert(`Added to ${name} 🎵`);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
