import banner from "../../constant/img/banner.png";
import { facultyData } from "../../constant/data";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate()
  const handleNaivgate = () =>{
    navigate("/registration")
  }

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
        <button onClick={handleNaivgate} className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition cursor-pointer">
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
            “On behalf of the Special Centre for Nanosciences, it is my great
            pleasure to welcome you to the International Conference on Recent
            Advancements in Nanoscience and Nanotechnology-2025 (ICRANN-2025).
            This conference serves as a dynamic platform for the brightest minds
            to converge, share groundbreaking research, and collectively shape
            the future of nanoscience. We are proud to host this dialogue and
            look forward to the innovations that will emerge.”
          </p>
          <p className="mt-3 font-semibold text-gray-900 text-sm md:text-base">
            ~ Prof. Dr. Bijoy Kumar Kuanr, Head of Department, Special Centre
            for Nanosciences, Jawaharlal Nehru University
          </p>
        </div>
        {/* <img
          src="https://via.placeholder.com/120"
          alt="Prof"
          className="rounded-lg w-28 h-28 object-cover"
        /> */}
      </div>

      {/* ===== Announcements Section ===== */}
      <div className="w-full md:w-[90%] px-4 py-10">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Announcements : ICRANN-2025 declares recognition in the categories
          listed below
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Award of Excellence in Nanoscience and Nanoelectronics</li>
          <li>Felicitation of Prof. Man Mohan, President IAMNOP</li>
          <li>Innovation Award</li>
          <li>Young Researcher Award</li>
          <li>Best Oral and Poster Awards Call for Registration & Abstract</li>
        </ul>
      </div>

      {/* ===== Important Notifications ===== */}
      {/* <div className="w-full md:w-[90%] px-4 py-10">
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
      </div> */}

      {/* ===== Committee Section ===== */}
      <section className="py-10 px-4 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
            Organizing Committee
          </h2>

          {/* Faculty Roles */}
          <div className="space-y-12">
            {facultyData.map((group, idx) => (
              <div key={idx}>
                {/* Role Heading */}
                <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6 text-center">
                  {group.role}
                </h3>

                {/* Members Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {group.members.map((member, mIdx) => (
                    <div
                      key={mIdx}
                      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-center text-center"
                    >
                      {/* Avatar Placeholder */}
                      <div className="w-20 h-20 md:w-24 md:h-24 mb-4 rounded-full bg-gradient-to-r from-blue-300 to-indigo-400 flex items-center justify-center text-white font-bold text-xl">
                        {member.name.split(" ")[1]?.[0] || member.name[0]}
                      </div>

                      {/* Member Info */}
                      <h4 className="text-lg font-semibold text-gray-800">
                        {member.name}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
