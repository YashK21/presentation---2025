const Registration = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-8">
        Registration Details
      </h1>

      {/* Important Notes */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6 rounded-lg shadow-sm">
        <p className="text-gray-800 font-medium text-sm sm:text-base">
          ⚠️ <span className="font-semibold">Important:</span> Does{" "}
          <span className="font-bold">NOT</span> include Travel and Accommodation.
        </p>
      </div>

      {/* Charges */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-500 mb-4">
          Additional Paper Charges
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
          <li>
            <span className="font-semibold">Indian Participants:</span> ₹3000 per additional paper
          </li>
          <li>
            <span className="font-semibold">International Participants:</span> $100 per additional paper
          </li>
        </ul>
      </div>

      {/* Payment Information */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-500 mb-4">
          Payment Information
        </h2>
        <p className="text-gray-700 mb-4 text-sm sm:text-base">
          The participation fees for the above programmes will be accepted only through{" "}
          <span className="font-semibold">e-transfer / RTGS / NEFT</span>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base">
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Bank Account No.:</span> 35404650496
            </p>
            <p>
              <span className="font-semibold">Bank Address:</span> State Bank of India, New Campus Branch, New Delhi-110067
            </p>
            <p>
              <span className="font-semibold">Beneficiary Name:</span> JNU Sponsored Seminar & Conference
            </p>
          </div>
          <div className="space-y-2">
            <p>
              <span className="font-semibold">IFSC Code:</span> SBIN0010441
            </p>
            <p>
              <span className="font-semibold">MICR Code:</span> 110002428
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-10">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg font-medium transition duration-300 text-sm sm:text-base">
          Proceed to Registration
        </button>
      </div>
    </div>
  );
};

export default Registration;
