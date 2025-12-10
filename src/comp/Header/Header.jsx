import jnuLogo from "../../constant/img/jnuLogo.png";
import drdoLogo from "../../constant/img/drdo.png";
import csirLogo from "../../constant/img/CSIR-Logo.jpg";
import nanoTechLogo from "../../constant/img/nano tech.png";
import biotech from "../../constant/img/biotech.png";

import Navbar from "../NavBar/Navbar";

const Header = () => {
  return (
    <div className="flex flex-col">
      {/* Top Banner */}
      <div className="relative w-full bg-blue-400 flex flex-col items-center px-4 py-6 lg:py-10">
        {/* ==================== MOBILE: LOGO FIRST ==================== */}
       <img
  src={jnuLogo}
  alt="JNU Logo"
  style={{ mixBlendMode: "multiply" }}
  className="
    h-32 w-32 sm:h-36 sm:w-36 object-contain mb-4
    lg:absolute lg:left-4 lg:top-6 lg:h-40 lg:w-40 lg:mb-0
  "
/>


        {/* ==================== TITLE TEXT ==================== */}
        <div className="flex flex-col items-center text-center text-white font-bold w-full max-w-6xl px-2 mt-2 lg:mt-0">
          <p className="text-lg sm:text-xl lg:text-3xl leading-snug">
            3<sup className="align-super text-[0.65em] ml-0.5">rd</sup>{" "}
            International Conference on Recent Advances in Nanoscience and
            Nanotechnology-2025 (ICRANN-2025)
          </p>

          <p className="text-xs sm:text-sm lg:text-base font-normal mt-2 leading-relaxed">
            Organized by: Special Centre for Nanoscience, Jawaharlal Nehru
            University, <br className="hidden sm:block" />
            New Delhi-110067, India. <br className="hidden sm:block" />
            December 20–21, 2025
          </p>
        </div>

        {/* ==================== SPONSOR LOGOS ==================== */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-8 w-full">
          <img
            src={biotech}
            alt="Department of Biotechnology"
            className="h-20 sm:h-24 lg:h-28 object-contain mix-blend-darken"
          />

          <img
            src={csirLogo}
            alt="CSIR Logo"
            className="h-20 sm:h-24 lg:h-28 object-contain mix-blend-multiply"
          />

          <img
            src={drdoLogo}
            alt="DRDO Logo"
            className="h-20 sm:h-24 lg:h-28 object-contain"
            style={{ background: "transparent" }}
          />

          <img
            src={nanoTechLogo}
            alt="NanoTech Logo"
            className="h-20 sm:h-24 lg:h-28 object-contain mix-blend-multiply"
          />
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default Header;
