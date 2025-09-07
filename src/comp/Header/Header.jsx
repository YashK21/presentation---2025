import jnuLogo from "../../constant/img/jnuLogo.png";
import nanoTechLogo from "../../constant/img/nano tech.png";
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
          className="h-24 w-32 lg:h-36 lg:w-44 object-contain mix-blend-darken"
        />

        {/* Conference Info */}
        <div className="flex flex-col text-center text-white font-bold">
          <p className="text-lg lg:text-2xl">
            3rd International Conference on Recent Advances in 
          </p>
          <p className="text-lg lg:text-2xl">
            Nanoscience and Nanotechnology-2025 
            <br />
            (ICRANN-2025)
          </p>
          <p className="text-sm lg:text-base font-normal mt-2">
            Organized by: Special Centre for Nanoscience, Jawaharlal Nehru
            University,
            <br /> New Delhi-110067, India.
            <br />
            December 20-21, 2025
          </p>
        </div>

        {/* Atom Logo */}
        <img
          src={nanoTechLogo}
          alt="Atom Logo"
          className="h-24 w-32 lg:h-36 lg:w-44 object-contain mix-blend-multiply"
        />

      </div>

      {/* Navbar */}
      <Navbar />
    </div>
  );
};

export default Header;
