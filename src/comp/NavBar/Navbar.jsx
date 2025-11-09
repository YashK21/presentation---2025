import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white w-full shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between md:justify-center px-4 py-3">
        {/* Left Logo / Home (Mobile Only) */}
        <Link
          to="/"
          className="block md:hidden font-semibold text-lg tracking-wide hover:text-yellow-300 transition-colors"
        >
          HOME
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center space-x-2 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-semibold">MENU</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 lg:gap-14 xl:gap-16 font-medium">
          <li>
            <Link to="/" className="hover:text-yellow-300 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/conference" className="hover:text-yellow-300 transition-colors">
              Conference
            </Link>
          </li>
          <li>
            <Link to="/committee" className="hover:text-yellow-300 transition-colors">
              Committee
            </Link>
          </li>
          <li>
            <Link to="/speaker" className="hover:text-yellow-300 transition-colors">
              Speakers
            </Link>
          </li>
          <li>
            <Link to="/registration" className="hover:text-yellow-300 transition-colors flex items-center gap-1">
              Registration
              <sup className="text-red-600 font-semibold text-sm">New</sup>
            </Link>
          </li>
          <li>
            <Link to="/abstract" className="hover:text-yellow-300 transition-colors flex items-center gap-1">
              Abstract
              <sup className="text-red-600 font-semibold text-sm">New</sup>
            </Link>
          </li>
          <li>
            <Link to="/scns" className="hover:text-yellow-300 transition-colors">
              SCNS
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300 transition-colors">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-yellow-300 transition-colors">
              Research Facilities
            </Link>
          </li>
          <li>
            <Link to="/accomodations" className="hover:text-yellow-300 transition-colors">
              Accomodations
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500 border-t border-blue-400">
          <ul className="flex flex-col space-y-2 px-4 py-4 text-sm font-medium">
            <li>
              <Link to="/" className="block hover:text-yellow-300 transition-colors" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/conference" className="block hover:text-yellow-300 transition-colors" onClick={() => setIsOpen(false)}>
                Conference
              </Link>
            </li>
            <li>
              <Link to="/committee" className="block hover:text-yellow-300 transition-colors" onClick={() => setIsOpen(false)}>
                Committee
              </Link>
            </li>
            <li>
              <Link to="/speaker" className="block hover:text-yellow-300 transition-colors" onClick={() => setIsOpen(false)}>
                Speakers
              </Link>
            </li>
            <li>
              <Link to="/registration" className=" hover:text-yellow-300 transition-colors flex items-center gap-1" onClick={() => setIsOpen(false)}>
                Registration <sup className="text-red-500 font-semibold text-xs">New</sup>
              </Link>
            </li>
            <li>
              <Link to="/abstract" className="hover:text-yellow-300 transition-colors flex items-center gap-1" onClick={() => setIsOpen(false)}>
                Abstract <sup className="text-red-500 font-semibold text-xs">New</sup>
              </Link>
            </li>
            <li>
              <Link to="/scns" className="block hover:text-yellow-300 transition-colors" onClick={() => setIsOpen(false)}>
                SCNS
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block hover:text-yellow-300 transition-colors" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="block hover:text-yellow-300 transition-colors" onClick={() => setIsOpen(false)}>
                Research Facilities
              </Link>
            </li>
            <li>
              <Link to="/accomodations" className="block hover:text-yellow-300 transition-colors" onClick={() => setIsOpen(false)}>
                Accomodations
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
