import banner from "../../constant/img/banner.png";
import { facultyData } from "../../constant/data";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const handleNaivgate = () => {
    navigate("/registration");
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* ===== Top Info & Register Button ===== */}
      <div className="flex flex-col md:flex-row items-center justify-center text-center gap-4 md:gap-6 px-4 py-6">
        <p className="text-xs md:text-base font-medium text-gray-800">
          <span className="text-sm md:text-base font-semibold">
            3<sup className="align-super text-[0.65em] ml-0.5">rd</sup>
          </span>{" "}
          International Conference on Recent Advances in Nanoscience and
          Nanotechnology-2025 (ICRANN-2025) |
          <span className="font-semibold"> December 20-21, 2025.</span>
        </p>

        <button
          onClick={handleNaivgate}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition cursor-pointer"
        >
          Register Now
        </button>
      </div>

      {/* ===== Invitation PDF Link (NEW) ===== */}
      <div className="w-full bg-blue-50 py-3 px-4 text-center">
        <a
          href="/files/Invitation_ICRANN-2025_Final.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm md:text-base hover:underline"
        >
          📄 Download Official Invitation – ICRANN-2025
        </a>
      </div>

      {/* ===== Marquee Section ===== */}
      <div className="w-full mb-10">
        <marquee className="text-red-600 font-semibold text-sm md:text-base">
          Tentative Program Schedule Released —
          <a
            href="/files/Tentative Technical Schedule.pdf"
            target="_blank"
            className="text-blue-800 underline mx-1"
          >
            Download Technical Schedule
          </a>
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
            - Prof. Dr. Bijoy Kumar Kuanr, Chairperson, Special Centre for
            Nanosciences, Jawaharlal Nehru University
          </p>
          <p className="mt-3 font-semibold text-red-500 text-sm md:text-base">
            [Co-Researcher of Prof. Grünberg - Nobel Laureate Physics 2007]
          </p>
        </div>
      </div>

      {/* ===== Announcements Section ===== */}
      <div className="w-full md:w-[90%] px-4 py-10">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Announcements : ICRANN-2025 declares recognition in the categories
          listed below
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Award of Excellence in Nanoscience and Nanoelectronics</li>
          <li>Outstanding Women Researcher Award</li>
          <li>Innovation Award</li>
          <li>Young Researcher Award</li>
          <li>Best Oral and Poster Awards</li>
        </ul>
      </div>

      {/* ===== Committee Section ===== */}
      <section className="py-10 px-4 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
            Organizing Committee
          </h2>

          <div className="space-y-12">
            {facultyData.map((group, idx) => (
              <div key={idx}>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6 text-center">
                  {group.role}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {group.members.map((member, mIdx) => (
                    <div
                      key={mIdx}
                      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-center text-center"
                    >
                      {member.src ? (
                        <img
                          src={member.src}
                          alt={member.name}
                          className="w-20 h-20 md:w-24 md:h-24 mb-4 rounded-full object-cover shadow-md"
                        />
                      ) : (
                        <div className="w-20 h-20 md:w-24 md:h-24 mb-4 rounded-full bg-gradient-to-r from-blue-300 to-indigo-400 flex items-center justify-center text-white font-bold text-xl">
                          {member.name.split(" ")[1]?.[0] || member.name[0]}
                        </div>
                      )}
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
