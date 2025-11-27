import jnuLogo from "../../constant/img/jnuLogo.png";
import csirLogo from "../../constant/img/CSIR-Logo.jpg";
import nanoTechLogo from "../../constant/img/nano tech.png";
import biotech from "../../constant/img/biotech.png";

import Navbar from "../NavBar/Navbar";

const Header = () => {
  return (
    <div className="flex flex-col">
      {/* Top Banner */}
      <div className="w-full bg-blue-400 flex flex-col items-center px-4 py-6 lg:py-10">

        {/* --------- TEXT SECTION --------- */}
        <div className="flex flex-col items-center text-center text-white font-bold w-full max-w-6xl px-2">

          {/* Single-line text on large screens */}
          <p className="text-lg sm:text-xl lg:text-3xl whitespace-normal lg:whitespace-nowrap leading-snug">
            3
            <sup className="align-super text-[0.65em] ml-0.5">rd</sup>{" "}
            International Conference on Recent Advances in Nanoscience and
            Nanotechnology-2025 (ICRANN-2025)
          </p>

          {/* Organized by */}
          <p className="text-xs sm:text-sm lg:text-base font-normal mt-2 leading-relaxed">
            Organized by: Special Centre for Nanoscience, Jawaharlal Nehru
            University, <br className="hidden sm:block" />
            New Delhi-110067, India. <br className="hidden sm:block" />
            December 20–21, 2025
          </p>
        </div>

        {/* --------- LOGOS SECTION (Responsive) --------- */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-6 w-full">

          {/* JNU Logo (shifted up slightly on large screens) */}
          <img
            src={jnuLogo}
            alt="JNU Logo"
            className="h-24 w-28 sm:h-32 sm:w-40 lg:h-48 lg:w-56 object-contain mix-blend-darken lg:-mt-4"
          />

          {/* Biotech Logo */}
          <img
            src={biotech}
            alt="Department of Biotechnology"
            className="h-20 w-28 sm:h-32 sm:w-40 lg:h-44 lg:w-52 object-contain mix-blend-darken"
          />

          {/* CSIR Logo */}
          <img
            src={csirLogo}
            alt="CSIR Logo"
            className="h-20 w-28 sm:h-32 sm:w-40 lg:h-44 lg:w-52 object-contain mix-blend-multiply"
          />

          {/* NRF / NanoTech Logo */}
          <img
            src={nanoTechLogo}
            alt="NanoTech Logo"
            className="h-20 w-28 sm:h-32 sm:w-40 lg:h-44 lg:w-52 object-contain mix-blend-multiply"
          />
        </div>
      </div>

      {/* Navbar */}
      <Navbar />
    </div>
  );
};

export default Header;
