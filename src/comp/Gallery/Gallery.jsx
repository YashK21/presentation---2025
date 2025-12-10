import React from 'react';

const Gallery = () => {
  return (
    <div className="w-full lg:min-h-screen flex items-center justify-center px-4">
      {/* ================== FINAL TEXT NOTE ================== */}
      <p className="text-center text-gray-700 text-sm sm:text-base mt-12 font-medium italic">
        Nearby centre of attractions will be added soon. Please keep visiting —
        <span className="font-semibold text-blue-700">
          <a
            href="https://www.icrann-2025.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-1"
          >
            icrann-2025.org
          </a>
        </span>
      </p>
    </div>
  );
};

export default Gallery;
