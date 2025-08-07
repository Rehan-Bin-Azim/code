import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import sunIcon from '../assets/icons/sun.svg';
import moonIcon from '../assets/icons/moon.svg';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 py-3 px-6 border-b border-neutral-700/80 backdrop-blur-lg bg-[#ffffff] text-[#1C110A] dark:bg-neutral-900 dark:text-[#E4D6A7]">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-10" />
          <span className="text-xl font-bold">CodeCraft</span>
        </div>

        {/* Hamburger Icon */}
        <button
          className="flex flex-col items-center justify-center w-10 h-10 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-current mb-1 transition-transform ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-current mb-1 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-current transition-transform ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Nav Links */}
        <div className="items-center hidden gap-6 text-sm font-medium md:flex">
          <Link
            to="/"
            className="hover:text-[#E9B44C] hover:scale-105 transition"
          >
            Home
          </Link>
          <Link
            to="/tutorials"
            className="hover:text-[#E9B44C] hover:scale-105 transition"
          >
            Tutorials
          </Link>
          <Link
            to="/challenges"
            className="hover:text-[#E9B44C] hover:scale-105 transition"
          >
            Challenges
          </Link>
          <Link
            to="/signin"
            className="text-[#50A2A7] hover:text-[#E9B44C] transition"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-[#9B2915] text-white px-4 py-1 rounded hover:bg-[#E9B44C] hover:text-[#1C110A] transition"
          >
            Sign Up
          </Link>
          {/* Theme Toggle */}
          {/* <button onClick={toggleTheme} className="ml-4 transition">
            <img
              src={darkMode ? sunIcon : moonIcon}
              alt="Toggle theme"
              className="w-6 h-6"
            />
          </button> */}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#ffffff] dark:bg-neutral-900 border-b border-neutral-700/80 flex flex-col items-center gap-4 py-4 md:hidden text-sm font-medium z-50">
            <Link
              to="/"
              className="hover:text-[#E9B44C] transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/tutorials"
              className="hover:text-[#E9B44C] transition"
              onClick={() => setMenuOpen(false)}
            >
              Tutorials
            </Link>
            <Link
              to="/challenges"
              className="hover:text-[#E9B44C] transition"
              onClick={() => setMenuOpen(false)}
            >
              Challenges
            </Link>
            <Link
              to="/signin"
              className="text-[#50A2A7] hover:text-[#E9B44C] transition"
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-[#9B2915] text-white px-4 py-1 rounded hover:bg-[#E9B44C] hover:text-[#1C110A] transition"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </Link>
            {/* Theme Toggle */}
            {/* <button onClick={toggleTheme} className="transition">
              <img
                src={darkMode ? sunIcon : moonIcon}
                alt="Toggle theme"
                className="w-6 h-6"
              />
            </button> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
