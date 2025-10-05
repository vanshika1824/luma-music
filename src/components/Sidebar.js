import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Search, Library } from "lucide-react";

function Sidebar() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home", icon: <Home size={20} /> },
    { to: "/search", label: "Search", icon: <Search size={20} /> },
    { to: "/library", label: "Library", icon: <Library size={20} /> },
  ];

  return (
    <div className="w-60 bg-zinc-950 p-6 flex flex-col gap-6 text-gray-400">
      <h1 className="text-green-500 text-2xl font-bold mb-6">Luma Music</h1>
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`flex items-center gap-3 px-3 py-2 rounded-md transition ${
              location.pathname === link.to
                ? "bg-zinc-800 text-white"
                : "hover:bg-zinc-800 hover:text-white"
            }`}
          >
            {link.icon}
            <span className="font-medium">{link.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
