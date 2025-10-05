import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import PlayerBar from "./components/PlayerBar";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";

function App() {
  const [user, setUser] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);

  // Show login if not logged in
  if (!user) return <Login setUser={setUser} />;

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gradient-to-b from-zinc-900 to-black">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          <Routes>
            <Route
              path="/"
              element={<Home setCurrentTrack={setCurrentTrack} />}
            />
            <Route
              path="/search"
              element={<Search setCurrentTrack={setCurrentTrack} />}
            />
            <Route
              path="/library"
              element={<Library setCurrentTrack={setCurrentTrack} />}
            />
          </Routes>
        </div>

        {/* Music Player */}
        <PlayerBar currentTrack={currentTrack} />
      </div>
    </div>
  );
}

export default App;
