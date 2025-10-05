import React, { useState } from "react";
import MusicCard from "../components/MusicCard";
import { Search as SearchIcon } from "lucide-react";

function Search({ setCurrentTrack }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const res = await fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "f7640aa1d2mshb219ba678e3dc07p19c53djsn85c05e6ec517", // replace with your RapidAPI Deezer key
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );
      const data = await res.json();
      setResults(data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLike = (song) => {
    let liked = JSON.parse(localStorage.getItem("likedSongs")) || [];
    if (!liked.find((s) => s.id === song.id)) liked.push(song);
    localStorage.setItem("likedSongs", JSON.stringify(liked));
    alert("Added to Liked Songs ❤️");
  };

  const handleAddToPlaylist = (song) => {
    let name = prompt("Enter playlist name:");
    if (!name) return;
    let playlists = JSON.parse(localStorage.getItem("playlists")) || {};
    if (!playlists[name]) playlists[name] = [];
    if (!playlists[name].find((s) => s.id === song.id))
      playlists[name].push(song);
    localStorage.setItem("playlists", JSON.stringify(playlists));
    alert(`Added to ${name} 🎵`);
  };

  return (
    <div>
      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="mb-6 flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-full"
      >
        <SearchIcon className="text-gray-400" />
        <input
          type="text"
          placeholder="What do you want to listen to?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 px-2"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-400 text-black px-5 py-2 rounded-full font-semibold transition"
        >
          Search
        </button>
      </form>

      {/* Results */}
      {results.length > 0 ? (
        <div>
          <h2 className="text-xl font-bold mb-4">Search Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {results.map((track) => (
              <MusicCard
                key={track.id}
                track={track}
                setCurrentTrack={setCurrentTrack}
                onLike={handleLike}
                onAddToPlaylist={handleAddToPlaylist}
              />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-gray-400 mt-10 text-center">
          Try searching for an artist, song, or album 🎵
        </p>
      )}
    </div>
  );
}

export default Search;
