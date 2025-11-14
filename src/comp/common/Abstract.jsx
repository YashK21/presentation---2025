import { impDates } from "../../constant/data";
import nanosci from "../../constant/img/nanosci.png"
const Abstract = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-8">
        Abstract / Full Paper Submission
      </h1>


      {/* Submission Link */}
      <div className="text-center mb-10">
        <p className="text-gray-700 mb-3 font-medium text-sm sm:text-base">
          Submit your abstract via the link below:
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfNL9R5lhFU9-QU3MU66N6HO4YqynSkAQw99WaA0cEyjgequA/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg font-medium transition duration-300 text-sm sm:text-base"
        >
          Submit Abstract
        </a>
      </div>

      
      {/* Section for Publications & Proceedings */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
        Publications & Proceedings
      </h2>

      {/* Descriptive text, corrected from h3 to p tags */}
      <div className="max-w-4xl mx-auto mb-10 text-base sm:text-lg text-gray-700 leading-relaxed space-y-4 text-left md:text-justify">
        <p>
          ICRANN-2025 encourages the submission of original and unpublished
          research. All accepted extended abstracts will be published in the
          conference proceedings, titled the Book of Abstracts, which will be
          assigned an online ISBN.
        </p>
        <p>
          For authors who choose to submit a full paper, accepted manuscripts
          may be assigned to affiliated SCI/SCIE & Scopus-indexed journals,
          based on the scope and quality of the work. Full papers submitted to
          ICRANN-2025 by the deadline will be evaluated for originality by the
          committee and will undergo the standard peer-review process of the
          respective journals.
        </p>
      </div>
{/* ===== NanoLIFE Journal Section ===== */}
<div className="max-w-4xl mx-auto mt-8 mb-12">

  <div className="flex flex-col items-center space-y-4">
     <p className="text-gray-700 text-sm sm:text-base text-center">
      The full paper will be uploaded as a new submission through CMT portal after the conference dates. <br />
      
    </p>
    {/* Journal Image */}
    <img
      src={nanosci}
      alt="NanoLIFE Journal Cover"
      className="w-64 sm:w-72 rounded-lg shadow-md"
    />

    {/* Journal Link + Info */}
    <a
      href="https://www.worldscientific.com/worldscinet/nl"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline text-base sm:text-lg font-medium text-center"
    >
      NanoLIFE (Impact Factor: 0.7)
    </a>
   <p className="text-gray-700 text-sm sm:text-base text-center">
      Note: Other Journals information will be display soon
    </p>
   
  </div>

</div>

      {/* ===== Important Dates ===== */}
      {/* Centering the table container */}
      <div className="flex justify-center py-10">
        <div className="w-full md:w-[90%] lg:w-[80%]">
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
      </div>
    </div>
  );
};

export default Abstract;
