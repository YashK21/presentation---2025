import {
  registrationFee,
  impDates,
  sponsorshipOptions,
} from "../../constant/data";

const Registration = () => {
  const regularFees = registrationFee.filter((item) => item.type === "regular");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* ---------- PAGE TITLE ---------- */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-10">
        Registration Details
      </h1>
      {/* ===== FLASH / SCROLLING UPDATES ===== */}
      <div className="w-full mb-10">
        <marquee className="text-red-600 font-semibold text-sm md:text-base">
          Tentative Program Schedule Released —
          <a
            href="/files/Tentative Program Schedule.pdf"
            target="_blank"
            className="text-blue-800 underline mx-1"
          >
            Download Program Schedule
          </a>
          | PPT Template & Poster Template for Presenters —
          <a
            href="/files/ICRANN-25_ppt_format.pptx"
            target="_blank"
            className="text-blue-800 underline mx-1"
          >
            PPT Template
          </a>
          |
          <a
            href="/files/ICRANN-25_poster_format.pptx"
            target="_blank"
            className="text-blue-800 underline mx-1"
          >
            Poster Template
          </a>
        </marquee>

        <div className="flex flex-wrap justify-center gap-4 mt-3 text-blue-700 underline font-medium">
          <a href="/files/Tentative Program Schedule.pdf" target="_blank">
            Program Schedule PDF
          </a>
          <a href="/files/ICRANN-25_ppt_format.pptx" target="_blank">
            PPT Template
          </a>
          <a href="/files/ICRANN-25_poster_format.pptx" target="_blank">
            Poster Template
          </a>
        </div>
      </div>

      {/* ---------- REGULAR FEES ---------- */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 text-center">
          Regular Registration Fee
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
              {regularFees.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition">
                  <td className="px-4 md:px-6 py-3 text-gray-700">
                    {row.category}
                  </td>
                  <td className="px-4 md:px-6 py-3 text-center font-medium">
                    {row.Indian}
                  </td>
                  <td className="px-4 md:px-6 py-3 text-center font-medium">
                    {row.International}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ---------- IMPORTANT NOTE ---------- */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-12 rounded-lg shadow-sm">
        <p className="text-gray-800 font-medium text-sm sm:text-base">
          ⚠️ <strong>Important:</strong> Registration fee{" "}
          <strong>does not</strong> include Travel and Accommodation.
        </p>
      </div>

      {/* ---------- SPONSORSHIP ---------- */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
          Sponsorship / Corporate Participants
        </h2>

        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full text-sm md:text-base border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
              <tr>
                <th className="px-4 md:px-6 py-3 text-left">Category</th>
                <th className="px-4 md:px-6 py-3 text-center">Price (INR)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sponsorshipOptions.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition">
                  <td className="px-4 md:px-6 py-3 text-gray-700">
                    {item.category}
                  </td>
                  <td className="px-4 md:px-6 py-3 text-center font-medium">
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 text-sm mt-4 leading-relaxed">
          <strong>Note:</strong> For students, a scanned copy of current ID is
          required. All foreign delegates/students must fill the International
          Travel Information Form with passport details. A one/two-page resume
          must also be submitted.
          <br />
          <br />
          <strong>Refund Policy:</strong> Registration and accommodation fees
          are non-refundable.
          <br />
          <br />
          <strong>Payment Mode:</strong> NEFT/Credit/Debit Card.{" "}
          <span className="font-semibold text-red-600">
            DDs are not accepted.
          </span>
        </p>
      </section>

      {/* ---------- IMPORTANT DATES ---------- */}
      <section className="mb-12">
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
                <tr key={idx} className="hover:bg-gray-50 transition">
                  <td className="px-4 md:px-6 py-3 text-gray-700">
                    {item.event}
                  </td>
                  <td
                    className="px-4 md:px-6 py-3 text-center font-medium"
                    dangerouslySetInnerHTML={{
                      __html: item.date.replace(
                        /(\d+)(st|nd|rd|th)/g,
                        "$1<sup>$2</sup>"
                      ),
                    }}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ---------- ADDITIONAL PAPER CHARGES ---------- */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-500 mb-4">
          Additional Paper Charges
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base space-y-2">
          <li>
            <strong>Indian Participants:</strong> ₹3000 per additional paper
          </li>
          <li>
            <strong>International Participants:</strong> $100 per additional
            paper
          </li>
        </ul>
      </div>

      {/* ---------- PAYMENT INFO ---------- */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-500 mb-4">
          Payment Information
        </h2>

        <p className="text-gray-700 mb-4">
          Participation fees will be accepted only through{" "}
          <strong>e-transfer / RTGS / NEFT</strong>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <p>
              <strong>Bank Account No.:</strong> 35404650496
            </p>
            <p>
              <strong>Bank Address:</strong> State Bank of India, New Campus
              Branch, New Delhi-110067
            </p>
            <p>
              <strong>Beneficiary Name:</strong> JNU Sponsored Seminar &
              Conference
            </p>
          </div>
          <div className="space-y-2">
            <p>
              <strong>IFSC Code:</strong> SBIN0010441
            </p>
            <p>
              <strong>MICR Code:</strong> 110002428
            </p>
          </div>
        </div>
      </div>

      {/* ---------- CTA ---------- */}
      <div className="text-center mt-10">
        <a
          href="https://docs.google.com/forms/d/1WBqkhjVgUno1GwgL15iogC9LC67uxSW-9OpTSptqIcg/edit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg font-medium transition">
            Proceed to Registration
          </button>
        </a>
      </div>
    </div>
  );
};

export default Registration;
