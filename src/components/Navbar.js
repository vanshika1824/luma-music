import React from "react";

function Navbar() {
  return (
    <div className="bg-zinc-900 px-6 py-3 flex items-center justify-between shadow-md">
      {/* Left arrows (optional) */}
      <div className="flex gap-2 text-gray-400">
        <button className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-700">
          ⬅
        </button>
        <button className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-700">
          ➡
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="What do you want to listen to?"
          className="w-full px-4 py-2 rounded-full bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Right side: Upgrade + Profile */}
      <div className="flex items-center gap-4">
        <button className="bg-white text-black font-semibold px-4 py-2 rounded-full hover:scale-105 transition">
          Upgrade
        </button>
        <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center font-bold cursor-pointer hover:opacity-80">
          U
        </div>
      </div>
    </div>
  );
}

export default Navbar;
