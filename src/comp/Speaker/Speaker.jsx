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
              {/* Speaker Image */}
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-24 h-24 md:w-28 md:h-28 mb-4 rounded-full object-cover border-4 border-indigo-200 shadow-sm"
              />

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
