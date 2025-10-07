import jnuLogo from "../../constant/img/jnuLogo.png";
import nanoTechLogo from "../../constant/img/nano tech.png";
import Navbar from "../NavBar/Navbar";

const Header = () => {
  return (
    <div className="flex flex-col">
      {" "}
      {/* Top Banner */}{" "}
     <div className="w-full bg-blue-400 lg:flex hidden flex-row items-center justify-between gap-6 px-8 py-6 lg:py-10">
  {/* JNU Logo */}
  <img
    src={jnuLogo}
    alt="JNU Logo"
    className="h-28 w-36 lg:h-40 lg:w-52 object-contain mix-blend-darken"
  />

  {/* Conference Info */}
  <div className="flex flex-col text-center text-white font-bold flex-1 px-4">
    <p className="text-xl lg:text-3xl">
      3<sup className="align-super text-[0.65em] ml-0.5">rd</sup> International Conference on Recent Advances in
    </p>
    <p className="text-xl lg:text-3xl">
      Nanoscience and Nanotechnology-2025 <br /> (ICRANN-2025)
    </p>
    <p className="text-sm lg:text-base font-normal mt-2">
      Organized by: Special Centre for Nanoscience, Jawaharlal Nehru University, <br />
      New Delhi-110067, India.
      <br /> December 20–21, 2025
    </p>
  </div>

  {/* Atom Logo */}
  <img
    src={nanoTechLogo}
    alt="Atom Logo"
    className="h-28 w-36 lg:h-40 lg:w-52 object-contain mix-blend-multiply"
  />
</div>

      {/* Navbar */} <Navbar />{" "}
    </div>
  );
};

export default Header;
