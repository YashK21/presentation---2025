import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-blue-400 text-white w-full">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between md:justify-center px-4 py-3">
        {/* Left Logo / Home */}
        <Link to="/" className="block md:hidden font-semibold text-lg">
          HOME
        </Link>

        {/* Right Menu Link (Mobile) */}
        <Link
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
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 lg:gap-14 xl:gap-16 font-medium">
          <li>
            <Link to="/" className="hover:text-yellow-300 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="conference"
              className="hover:text-yellow-300 cursor-pointer"
            >
              Conference
            </Link>
          </li>
          <li>
            <Link
              to="committee"
              className="hover:text-yellow-300 cursor-pointer"
            >
              Committee
            </Link>
          </li>
          <li>
            <Link to="speaker" className="hover:text-yellow-300 cursor-pointer">
              Speakers
            </Link>
          </li>
          <li>
            <Link
              to="/registration"
              className="hover:text-yellow-300 cursor-pointer"
            >
              Registration{" "}
              <sup
                class="font-features sups"
                style={{
                  color: "red",
                }}
              >
                New
              </sup>
            </Link>
          </li>
          <li>
            <Link
              to="/abstract"
              className="hover:text-yellow-300 cursor-pointer"
            >
              Abstract{" "}
              <sup
                class="font-features sups"
                style={{
                  color: "red",
                }}
              >
                New
              </sup>
            </Link>
          </li>
          <li>
            <Link to="/scns" className="hover:text-yellow-300 cursor-pointer">
              SCNS
            </Link>
          </li>

          <li>
            <Link to="contact" className="hover:text-yellow-300 cursor-pointer">
              Contact Us
            </Link>
          </li>
          <li>
              <Link
                to="/gallery"
                className="block hover:text-yellow-300 cursor-pointer"
              >
                Research Facilities
              </Link>
            </li>
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-400">
          <ul className="flex flex-col space-y-2 px-4 py-3">
            <li>
              <Link
                to="/scns"
                className="block hover:text-yellow-300 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/conference"
                className="block hover:text-yellow-300 cursor-pointer"
              >
                Conference
              </Link>
            </li>
            <li>
              <Link
                to="speaker"
                className="block hover:text-yellow-300 cursor-pointer"
              >
                Speakers
              </Link>
            </li>
            <li>
              <Link
                to="/registration"
                className="block hover:text-yellow-300 cursor-pointer"
              >
                Registration
              </Link>
            </li>
             <li>
              <Link
                to="/abstract"
                className="block hover:text-yellow-300 cursor-pointer"
              >
                Abstract
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block hover:text-yellow-300 cursor-pointer"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="block hover:text-yellow-300 cursor-pointer"
              >
                Research Facilities
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
