import React from "react";

const Accomodations = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 to-white px-4 sm:px-6 py-10 flex flex-col items-center">
      
      {/* MAIN CARD */}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6 sm:p-10 border border-blue-100">
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 text-center mb-6">
          Accommodation Information
        </h2>

        {/* University Guest House Section */}
        <section className="mb-10">
          <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-3 text-center">
            Guest House Accommodation Information
          </h3>

          <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
            The University is pleased to offer limited Guest House accommodation facilities 
            for participants of ICRANN-2025 at UGC MMTTC & Aravali Guest House, JNU, New Delhi 
            and the National Institute of Health and Family Welfare, New Delhi.
          </p>

          {/* CATEGORIES */}
          <div className="space-y-6">
            {/* Category I */}
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
              <h4 className="text-lg font-semibold text-blue-800 mb-2">
                Category-I: UGC MMTTC, JNU, New Delhi
              </h4>
              <p className="text-gray-700 text-sm sm:text-base">
                <strong>Room Type:</strong> Single-bedded / Double-bedded sharing <br />
                <strong>Charges:</strong> ₹500 / ₹400 per day (including GST) <br />
                The charge includes only Bed & Basic Amenities.
              </p>
            </div>

            {/* Category II */}
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
              <h4 className="text-lg font-semibold text-blue-800 mb-2">
                Category-II: Aravali Guest House, JNU, New Delhi
              </h4>
              <p className="text-gray-700 text-sm sm:text-base">
                <strong>Room Type:</strong> Single-bedded / Double-bedded sharing <br />
                <strong>Charges:</strong> ₹1575 per day (including GST) <br />
                <strong>Blower/Heater:</strong> ₹200 extra per room per day <br />
                Charges include only Bed & Basic Amenities.
              </p>
            </div>

            {/* Category III */}
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
              <h4 className="text-lg font-semibold text-blue-800 mb-2">
                Category-III: National Institute of Health and Family Welfare, New Delhi
              </h4>
              <p className="text-gray-700 text-sm sm:text-base">
                <strong>Room Type:</strong> Single-bedded / Double-bedded sharing <br />
                <strong>Charges:</strong> ₹900 / ₹600 per day (including GST) <br />
                The charge includes only Bed & Basic Amenities.
              </p>
            </div>
          </div>

          {/* Notes */}
          <div className="mt-6 text-sm sm:text-base text-gray-700 leading-relaxed">
            <p><strong>Note:</strong></p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Food (as per conference schedule) is covered in your registration fees and will be arranged at the Convention Centre, JNU.</li>
              <li>Accommodation will be allotted on a first-come, first-served basis, subject to availability.</li>
            </ul>
          </div>

          {/* Apply Button */}
          <div className="text-center mt-6">
            <a
              href="https://docs.google.com/forms/d/1XHYJMGfqVlB6YFWg6gc7PzUx66olUFhYabeNIPXPQ_Y/edit"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md shadow hover:bg-blue-700 transition"
            >
              Apply for Accommodation
            </a>
          </div>

          {/* Committee */}
          <div className="mt-6 text-gray-700 text-sm sm:text-base">
            <p className="font-semibold">Accommodation Committee:</p>
            <ul className="mt-2 space-y-1">
              <li>Dr. Sandeep Kumar</li>
              <li>Dr. Neha Paras</li>
              <li>Prof. Ketavath Kumar Naik</li>
              <li>Prof. Satyendra Singh</li>
            </ul>
            <p className="mt-2">
              Contact: <strong>icrann2025@gmail.com</strong>
            </p>
          </div>
        </section>

        {/* HOTEL SECTION */}
        <section>
          <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-3 text-center">
            Hotel Accommodation (Outside the Campus)
          </h3>

          <p className="text-gray-700 text-sm sm:text-base mb-4">
            Participants may also arrange their stay outside the campus. 
            A list of hotels offering reasonable rates is provided below.
          </p>

          {/* Responsive table wrapper */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm sm:text-base">
              <thead className="bg-blue-100">
                <tr>
                  <th className="border px-3 py-2">Hotel</th>
                  <th className="border px-3 py-2">Address</th>
                  <th className="border px-3 py-2">Contact</th>
                  <th className="border px-3 py-2">Website</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border px-3 py-2">Shanti Residency</td>
                  <td className="border px-3 py-2">67 D/1 Laxmi Market, Munirka., New Delhi</td>
                  <td className="border px-3 py-2">9816049443</td>
                  <td className="border px-3 py-2"><a className="text-blue-600 underline" href="http://www.hotelshantiresidency.com">Website</a></td>
                </tr>

                <tr>
                  <td className="border px-3 py-2">Minimalist One Hauz Khas</td>
                  <td className="border px-3 py-2">T-40, Hauz Khas Village, New Delhi</td>
                  <td className="border px-3 py-2">09667774907</td>
                  <td className="border px-3 py-2"><a className="text-blue-600 underline" href="https://www.minimalisthotels.com">Website</a></td>
                </tr>

                <tr>
                  <td className="border px-3 py-2">Jaypee Vasant Continental</td>
                  <td className="border px-3 py-2">Basant Lok, Vasant Vihar, New Delhi</td>
                  <td className="border px-3 py-2">011-4600 8800</td>
                  <td className="border px-3 py-2"><a className="text-blue-600 underline" href="https://www.jaypeehotels.com">Website</a></td>
                </tr>

                <tr>
                  <td className="border px-3 py-2">Minimalist Poshtel & Suites</td>
                  <td className="border px-3 py-2">T47 Hauz Khas Village, New Delhi</td>
                  <td className="border px-3 py-2">09667774907</td>
                  <td className="border px-3 py-2"><a className="text-blue-600 underline" href="https://minimalistposhtelsuites.bookmystay.io">Website</a></td>
                </tr>

                <tr>
                  <td className="border px-3 py-2">ACE STAYZ</td>
                  <td className="border px-3 py-2">157/9, Kishan Garh, Vasant Kunj, New Delhi</td>
                  <td className="border px-3 py-2">011-26145893</td>
                  <td className="border px-3 py-2"><a className="text-blue-600 underline" href="https://acestayz.com">Website</a></td>
                </tr>

                <tr>
                  <td className="border px-3 py-2">Indira International Inn</td>
                  <td className="border px-3 py-2">B-32, Masoodpur, Vasant Kunj, New Delhi</td>
                  <td className="border px-3 py-2">011-26136363</td>
                  <td className="border px-3 py-2"><a className="text-blue-600 underline" href="https://www.guestreservations.com/indira-international-inn">Website</a></td>
                </tr>

                <tr>
                  <td className="border px-3 py-2">The Grand New Delhi</td>
                  <td className="border px-3 py-2">Nelson Mandela Marg, New Delhi</td>
                  <td className="border px-3 py-2">011-47661200</td>
                  <td className="border px-3 py-2"><a className="text-blue-600 underline" href="https://www.thegrandnewdelhi.com">Website</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Accomodations;
