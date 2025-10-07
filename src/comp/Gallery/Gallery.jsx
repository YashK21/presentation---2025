import React from "react";

// Central Instrumentation Images
import image1 from "../../constant/gallery/image1.png";
import image2 from "../../constant/gallery/image2.png";
import image3 from "../../constant/gallery/image3.png";
import image4 from "../../constant/gallery/image4.png";
import image5 from "../../constant/gallery/image5.png";
import image6 from "../../constant/gallery/image6.png";
import image7 from "../../constant/gallery/image7.png";

// Other facility images
import ElectrospinningSetup from "../../constant/gallery/Electrospinning Setup.png";
import GasSensingSystem from "../../constant/gallery/Gas Sensing System.png";
import PEHysteresisLoop from "../../constant/gallery/P-E Hysteresis Loop.png";
import LaserLithography from "../../constant/gallery/Laser Lithography.png";
import PulsedLaserDepositionSystem from "../../constant/gallery/Pulsed Laser Deposition System.png";
import SputteringandElectronBeamsystem from "../../constant/gallery/Sputtering and Electron Beam system.png";

// Central Instrumentation Images Array
const images = [
  { img: image1, title: "Powder X-ray Diffraction " },
  { img: image2, title: "Zeta Potential" },
  { img: image3, title: "Atomic Force Microscopy " },
  { img: image4, title: "Raman Spectrophotometer" },
  { img: image5, title: "UV-vis Spectrophotometer" },
  { img: image6, title: "Raman Spectrophotometer" },
  { img: image7, title: "Scanning Electron Microscope(SEM)" },
];

// Other Research Facilities Array
const otherResearchFacilityImg = [
  {
    img: ElectrospinningSetup,
    title: "Electrospinning Setup",
  },
  {
    img: GasSensingSystem,
    title: "Gas Sensing System",
  },
  {
    img: PEHysteresisLoop,
    title: "P-E Hysteresis Loop",
  },
  {
    img: LaserLithography,
    title: "Laser Lithography",
  },
  {
    img: PulsedLaserDepositionSystem,
    title: "Pulsed Laser Deposition System",
  },
  {
    img: SputteringandElectronBeamsystem,
    title: "Sputtering and Electron Beam System",
  },
];

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Central Instrumentation Facility */}
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Central Instrumentation Facility
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
  {images.map((item, index) => (
    <div
      key={index}
      className="overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-64 object-cover"
      />
      <div className="bg-white text-center py-3 px-2 font-semibold text-gray-700">
        {item.title}
      </div>
    </div>
  ))}
</div>

      {/* Other Research Facility */}
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Other Research Facility
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {otherResearchFacilityImg.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="bg-white text-center py-3 px-2 font-semibold text-gray-700">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
