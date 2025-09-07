import banner from "../../constant/img/banner.png";
import { facultyData,registrationFee,impDates } from "../../constant/data";
const Main = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* ===== Top Info & Register Button ===== */}
      <div className="flex flex-col md:flex-row items-center justify-center text-center gap-4 md:gap-6 px-4 py-6">
        <p className="text-sm md:text-base font-medium text-gray-800">
          3rd International Conference on Recent Advances in Nanoscience and
          Nanotechnology-2025 (ICRANN-2025) |
          <br className="hidden md:block" /> Dates for conference:{" "}
          <span className="font-semibold">December 20-21, 2025.</span>
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          Register Now
        </button>
      </div>

      {/* Divider */}
      <hr className="w-full md:w-[90%] border-t border-gray-200 mb-6" />

      {/* Banner */}
      <img
        src={banner}
        alt="Conference Banner"
        className="w-full md:w-[90%] h-auto object-contain"
      />

      {/* ===== Messages Section ===== */}
      <div className="w-full md:w-[90%] bg-yellow-100 mt-10 p-6 rounded-lg shadow flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <p className="text-gray-800 italic text-sm md:text-base leading-relaxed">
            “I am very pleased to highlight the importance of the IAMNOP
            conference with a wide-ranging agenda and applications to major
            scientific areas. These include astronomy and astrophysics, nuclear
            fusion energy, nanomaterials, nanomedicine, environment and climate
            sciences, and other fields...”
          </p>
          <p className="mt-3 font-semibold text-gray-900 text-sm md:text-base">
            ~ Prof. Anil K. Pradhan, The Ohio State University, USA
          </p>
        </div>
        <img
          src="https://via.placeholder.com/120"
          alt="Prof"
          className="rounded-lg w-28 h-28 object-cover"
        />
      </div>

      {/* ===== Announcements Section ===== */}
      <div className="w-full md:w-[90%] px-4 py-10">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Announcements
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Call for Registration & Abstract Submission is now open. Deadline:{" "}
            <span className="font-semibold">15 September 2025</span>.
          </li>
          <li>Celebrating the 64th birth year of Prof. J. M. Rost</li>
          <li>Felicitation of Prof. Man Mohan, President IAMNOP</li>
        </ul>
      </div>

      {/* ===== Important Notifications ===== */}
      <div className="w-full md:w-[90%] px-4 py-10">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Important Notifications
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-100 border-l-4 border-green-600 p-4 rounded-lg shadow">
            <p className="text-gray-700">
              Dates for conference:{" "}
              <span className="font-semibold">December 17th-19th, 2025</span>
            </p>
          </div>
          <div className="bg-green-100 border-l-4 border-green-600 p-4 rounded-lg shadow">
            <p className="text-gray-700">
              Abstract Submission Deadline:{" "}
              <span className="font-semibold">15 September 2025</span>
            </p>
          </div>
          <div className="bg-green-100 border-l-4 border-green-600 p-4 rounded-lg shadow">
            <p className="text-gray-700">
              Confirmation of abstract acceptance:{" "}
              <span className="font-semibold">25 September 2025</span>
            </p>
          </div>
          <div className="bg-green-100 border-l-4 border-green-600 p-4 rounded-lg shadow">
            <p className="text-gray-700">
              Registration Deadline:{" "}
              <span className="font-semibold">
                15 October (Regular), 30 October (Late)
              </span>
            </p>
          </div>
        </div>
      </div>

     {/* ===== Important Dates ===== */}
<div className="w-full md:w-[90%] px-4 py-10">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
    📅 Important Dates
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
            <td className="px-4 md:px-6 py-3 text-gray-700">{item.event}</td>
            <td className="px-4 md:px-6 py-3 text-center font-medium text-gray-900">
              {item.date}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

{/* ===== Registration Fee ===== */}
<div className="w-full md:w-[90%] px-4 py-10">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
    💰 Registration Fee
  </h2>
  <div className="overflow-x-auto shadow-lg rounded-lg">
    <table className="min-w-full text-sm md:text-base border border-gray-200 rounded-lg overflow-hidden">
      <thead className="bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <tr>
          <th className="px-4 md:px-6 py-3 text-left">Category</th>
          <th className="px-4 md:px-6 py-3 text-center">By Oct 15, 2025</th>
          <th className="px-4 md:px-6 py-3 text-center">After Oct 15, 2025</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {registrationFee.map((row, idx) => (
          <tr
            key={idx}
            className="hover:bg-gray-50 transition duration-200 ease-in-out"
          >
            <td className="px-4 md:px-6 py-3 text-gray-700">{row.category}</td>
            <td className="px-4 md:px-6 py-3 text-center font-medium text-gray-900">
              {row.early}
            </td>
            <td className="px-4 md:px-6 py-3 text-center font-medium text-gray-900">
              {row.late}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

      {/* ===== Committee Section ===== */}
      <div className="w-full md:w-[90%] px-4 py-10">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
          Organizing Committee
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {facultyData.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-white shadow p-4 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-200 rounded-full mb-3"></div>
              <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                {member.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
