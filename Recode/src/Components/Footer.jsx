import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-neutral-600 text-gray-300 py-10 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & Description */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">CodeCraft</h2>
          <p className="text-sm text-gray-400">
            Empowering learners to code better, faster, and smarter — one challenge at a time.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/tutorials" className="hover:text-blue-400">Tutorials</Link></li>
            <li><Link to="/challenges" className="hover:text-blue-400">Challenges</Link></li>
            <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400">Docs</a></li>
            <li><a href="#" className="hover:text-blue-400">Blog</a></li>
            <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
            <li><a href="#" className="hover:text-blue-400">Support</a></li>
          </ul>
        </div>

        {/* Contact / Subscribe */}
        <div>
          <h3 className="text-white font-semibold mb-3">Stay Connected</h3>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input 
                type="text"
                placeholder="Your Message"
                className="px-3 py-7 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded text-white text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-neutral-700 pt-6 text-center text-sm text-white-500">
        © {new Date().getFullYear()} CodeCraft. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
