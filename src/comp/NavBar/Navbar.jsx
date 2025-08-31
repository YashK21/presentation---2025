import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-400 text-white w-full">
<div className="max-w-screen-xl mx-auto flex items-center justify-between md:justify-center px-4 py-3">
        {/* Left Logo / Home */}
        <a href="#" className="block md:hidden font-semibold text-lg">
          HOME
        </a>

        {/* Right Menu Button (Mobile) */}
        <button
          className="flex space-x-2 md:hidden"
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

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <a href="#" className="hover:text-yellow-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300">
              Conference
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300">
              Committee
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300">
              Speakers
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300">
              Registration
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300">
              Abstract
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300">
              Tours and Travel
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-yellow-300">
              Hotel Rates
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-400">
          <ul className="flex flex-col space-y-2 px-4 py-3">
            <li>
              <a href="#" className="block hover:text-yellow-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-yellow-300">
                Conference
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-yellow-300">
                Speakers
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-yellow-300">
                Registration
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-yellow-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
