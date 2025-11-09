import React from "react";

const Accomodations = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-6 py-10 text-center">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8 border border-blue-100">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">
          Accommodation Information
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          For further updates, please check this page regularly.
        </p>
      </div>
    </div>
  );
};

export default Accomodations;
