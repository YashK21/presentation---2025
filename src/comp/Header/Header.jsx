import jnuLogo from "../../assets/img/jnulogo.png";
import atomLogo from "../../assets/img/atomLogo.png";
import drdoLogo from "../../assets/img/drdoLogo.png";
import Navbar from "../NavBar/Navbar";

const Header = () => {
  return (
    <div className="flex flex-col">
      {/* Top Banner */}
      <div className= "hidden bg-blue-400 lg:flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 px-6 lg:px-20 py-6 lg:py-8">
        
        {/* JNU Logo */}
        <img
          src={jnuLogo}
          alt="JNU Logo"
          className="h-24 w-32 lg:h-36 lg:w-44 object-contain"
        />

        {/* Conference Info */}
        <div className="flex flex-col text-center text-white font-bold">
          <p className="text-lg lg:text-2xl">
            The International Conference on Atomic, Molecular,
          </p>
          <p className="text-lg lg:text-2xl">
            Nano and Optical Physics with Applications
            <br />
            (IAMNOP-2025)
          </p>
          <p className="text-sm lg:text-base font-normal mt-2">
            Organized by: School of Physical Sciences, Jawaharlal Nehru
            University,
            <br /> New Delhi-110067, India.
            <br />
            December 17th-19th, 2025
          </p>
        </div>

        {/* Atom Logo */}
        <img
          src={atomLogo}
          alt="Atom Logo"
          className="h-24 w-32 lg:h-36 lg:w-44 object-contain"
        />

        {/* DRDO Logo + Text */}
        <div className="flex flex-col items-center text-white lg:text-black">
          <img
            src={drdoLogo}
            alt="DRDO Logo"
            className="h-20 w-28 lg:h-32 lg:w-40 object-contain"
          />
          <p className="text-sm lg:text-base">Co-sponsored by</p>
          <p className="text-sm lg:text-base font-semibold">DRDO</p>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />
    </div>
  );
};

export default Header;
