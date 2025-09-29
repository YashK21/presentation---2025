import {  registrationFee,impDates } from "../../constant/data";
const Registration = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
       <div class="text-center mt-10 px-4">
  <div class="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-800">
    <div class="flex flex-col items-center">
      <p class="text-lg font-medium text-gray-800 mb-2">
        Paper Submission will be through Microsoft CMT
      </p>
      <p class="text-sm text-gray-600">
        The{" "}
        <a style={{
              'font-weight': 100
        }} href="https://cmt3.research.microsoft.com/" class="text-blue-600 underline hover:text-blue-800 transition">
           Microsoft CMT service
        </a> 
        {" "}is being used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
      </p>
    </div>
  </div>
</div>

      <br/>
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-8">
        Registration Details
      </h1>
  {/* ===== Registration Fee ===== */}
      <div className="w-full md:w-[90%] px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
           Fee
        </h2>
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full text-sm md:text-base border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-red-600 to-pink-600 text-white">
              <tr>
                <th className="px-4 md:px-6 py-3 text-left">Category</th>
                <th className="px-4 md:px-6 py-3 text-center">Indian (INR)</th>
                <th className="px-4 md:px-6 py-3 text-center">
                  International (USD)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {registrationFee.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-50 transition duration-200 ease-in-out"
                >
                  <td className="px-4 md:px-6 py-3 text-gray-700">
                    {row.category}
                  </td>
                  <td className="px-4 md:px-6 py-3 text-center font-medium text-gray-900">
                    {row.Indian}
                  </td>
                  <td className="px-4 md:px-6 py-3 text-center font-medium text-gray-900">
                    {row.International}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
{/* Important Notes */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6 rounded-lg shadow-sm">
        <p className="text-gray-800 font-medium text-sm sm:text-base">
          ⚠️ <span className="font-semibold">Important:</span> Does{" "}
          <span className="font-bold">NOT</span> include Travel and Accommodation.
        </p>
      </div>
      {/* ===== Important Dates ===== */}
      <div className="w-full md:w-[90%] px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
          Important Dates
        </h2>
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full text-sm md:text-base border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <tr>
                <th className="px-4 md:px-6 py-3 text-left">Event</th>
                <th className="px-4 md:px-6 py-3 text-center">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {impDates.map((item, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-50 transition duration-200 ease-in-out"
                >
                  <td className="px-4 md:px-6 py-3 text-gray-700">
                    {item.event}
                  </td>
                  <td className="px-4 md:px-6 py-3 text-center font-medium text-gray-900">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: item.date.replace(
                          /(\d+)(st|nd|rd|th)/g,
                          "$1<sup>$2</sup>"
                        ),
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
