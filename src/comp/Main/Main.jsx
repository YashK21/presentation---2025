import banner from "../../constant/img/banner.png";

const Main = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* ===== Top Info & Register Button ===== */}
      <div className="flex flex-col md:flex-row items-center justify-center text-center gap-4 md:gap-6 px-4 py-6">
        <p className="text-sm md:text-base font-medium text-gray-800">
          The International Conference on Atomic, Molecular, Nano and Optical
          Physics with Applications (IAMNOP-2025) |
          <br className="hidden md:block" /> Dates for conference:{" "}
          <span className="font-semibold">December 17th-19th, 2025.</span>
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
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Important Dates
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm md:text-base">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Event</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2">Early Bird Registration Deadline</td>
                <td className="px-4 py-2">15 October 2025</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Late Registration Deadline</td>
                <td className="px-4 py-2">30 October 2025</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Abstract Submission Ends</td>
                <td className="px-4 py-2">15 September 2025</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Confirmation of Abstract Acceptance</td>
                <td className="px-4 py-2">25 September 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ===== Registration Fee ===== */}
      <div className="w-full md:w-[90%] px-4 py-10">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Registration Fee
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm md:text-base">
            <thead className="bg-red-600 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2">By Oct 15, 2025</th>
                <th className="px-4 py-2">After Oct 15, 2025</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2">International Delegate</td>
                <td className="px-4 py-2">US$ 500</td>
                <td className="px-4 py-2">US$ 600</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">International Student</td>
                <td className="px-4 py-2">US$ 400</td>
                <td className="px-4 py-2">US$ 450</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Indian Delegate</td>
                <td className="px-4 py-2">₹6000</td>
                <td className="px-4 py-2">₹7000</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Indian Student</td>
                <td className="px-4 py-2">₹4000</td>
                <td className="px-4 py-2">₹4500</td>
              </tr>
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
          {[
            { name: "Prof. Santishree Dhulipudi Pandit", role: "Patron" },
            { name: "Prof. Brajesh Kumar Pandey", role: "Co-Patron" },
            { name: "Prof. Sobhan Sen", role: "Chairperson" },
            { name: "Prof. Man Mohan", role: "President" },
            { name: "Prof. Frank B. Rosmej", role: "Chief Advisor" },
            { name: "Dr. Alok Kumar Singh Jha", role: "Convener" },
            { name: "Prof. Pawan Kumar Kulriya", role: "Co-Convener" },
            { name: "Dr. Ram Prasad Prajapati", role: "Co-Convener" },
            { name: "Dr. Shilpi Agarwal", role: "Secretary" },
          ].map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-white shadow p-4 rounded-lg"
            >
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-3"></div>
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
