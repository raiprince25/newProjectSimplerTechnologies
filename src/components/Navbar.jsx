import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/auth", label: "Sign Up" },
  ];

  return (
    <nav className="bg-white/30 backdrop-blur-lg shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center py-3">
        <Link to="/" className="text-2xl font-bold text-pink-600">
          🚀SimplerTechnologies
        </Link>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              className={`hover:text-pink-500 ${
                location.pathname === item.path ? "text-pink-600 font-bold" : ""
              }`}
              to={item.path}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white/30 backdrop-blur-md px-4 py-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              className="block py-2 hover:text-pink-500"
              to={item.path}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
