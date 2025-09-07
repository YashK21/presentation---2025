import { speakers } from "../../constant/data";

const Speaker = () => {
  return (
    <section className="py-10 px-4 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
          Plenary / Keynote / Invited Speakers
        </h2>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-center text-center"
            >
              {/* Avatar Placeholder */}
              <div className="w-20 h-20 md:w-24 md:h-24 mb-4 rounded-full bg-gradient-to-r from-blue-300 to-indigo-400 flex items-center justify-center text-white font-bold text-xl">
                {speaker.name.split(" ")[1][0]} {/* First letter of surname */}
              </div>

              {/* Speaker Info */}
              <h3 className="text-lg font-semibold text-gray-800">
                {speaker.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{speaker.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speaker;
