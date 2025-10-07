import React from "react";

const Committee = () => {
  return (
    <div className="w-full md:w-[90%] px-4 md:px-8 py-10 mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
        Conference Committees
      </h2>

      {/* ===== Local Organizing Committee ===== */}
      <section className="mb-12">
        <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-4">
          Local Organizing Committee
        </h3>
        <div className="bg-white shadow-md rounded-lg p-6 space-y-4 text-sm md:text-base text-gray-700">
          <p>
            <span className="font-semibold">Patron:</span> Hon. VC Prof. S.
            Dhulipudi Pandit, JNU
          </p>
          <p>
            <span className="font-semibold">Co-Patrons:</span>
            <br /> Prof. Brajesh Kumar Pandey (Rector-I), JNU <br /> Prof.
            Dipendra Nath Das (Rector-II), JNU
          </p>
          <p>
            <span className="font-semibold">Chair:</span> Prof. Bijoy Kumar
            Kuanr, SCNS, JNU
          </p>
          <p>
            <span className="font-semibold">Organizing Secretary/Conveners:</span>
            <br /> Prof. Satyendra Singh, Dr. Pankaj Thakur, Dr. Prakash Kanoo,{" "}
            Dr. Sandeep Kumar, Dr. Balaji Birajdar, Dr. Pratima Solanki, Dr.
            Tulika Prasad, Dr. Vinod Kumar, Dr. Neha Paras (SCNS, JNU)
          </p>
          <p>
            <span className="font-semibold">Treasurer:</span> Dr. Pankaj Thakur,
            Dr. Prakash Kanoo (SCNS, JNU)
          </p>
        </div>
      </section>

      {/* ===== Technical Programme Committee ===== */}
      <section className="mb-12">
        <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-4">
          Technical Programme Committee (Tentative)
        </h3>
        <div className="bg-white shadow-md rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base text-gray-700">
          {[
            "Prof. Prabu K, NITK Surathkal",
            "Prof. Shyam Lal, NITK Surathkal",
            "Dr. Deepak J, IIT Roorkee",
            "Dr. Mukesh Khandelwal, DU, New Delhi",
            "Prof. Arvind Kumar, NIT Kurushetra",
            "Prof. Santanu Dwari, IIT Dhanbad",
            "Dr. Rajesh Kumar, IIIT Dharwad",
            "Dr. PK Mruduli,IIT Delhi",
            "Dr. Ravi Kant, ZHDC, University of Delhi",
          ].map((member, idx) => (
            <p key={idx}>• {member}</p>
          ))}
        </div>
      </section>

      {/* ===== International Advisory Committee ===== */}
      <section className="mb-12">
        <h3 className="text-xl md:text-2xl font-semibold text-purple-700 mb-4">
          International Advisory Committee (Tentative)
        </h3>
        <div className="bg-white shadow-md rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm md:text-base text-gray-700">
          {[
            "Prof. Mingzhong Wu, Northeastern University, USA",
            "Prof. Sanjay Mishra, University of Memphis, USA",
            "Dr. Daniel E. Bürgler, Forschungszentrum Julich, Germany",
            "Dr. Y.V. Khivintsev, Russian Academy of Sciences, Russia",
            "Dr. V Veerakumar, Minnesota, USA",
            "Dr. Jaume Anguera, Universitat Ramon Llull, Spain",
            "Prof. Guy A. E. Vandenbosch, KU Leuven, Belgium",
            "Prof. Chintha Tellambura, University of Alberta, Canada",
            "Prof. Mihaela Albu, Politehnica University, Romania",
            "Prof. Aimé Lay-Ekuakille, University of Salento, Italy",
            "Prof. Hanjung Song, Inje University, South Korea",
            "Prof. Shyam Pandey, Kyushu Institute of Technology, Japan",
            "Prof. Eremin Sergei, M.V. Lomonosov Moscow State University, Russia",
            "Prof. Oliver Eibl, Technical University, Vienna, Austria",
            "Prof. Nagendra Kaushik, Kwangwoon University, South Korea",
            "Dr. Rakesh Kumar Tiwari, Western University of Health Sciences, USA",
            "Prof. Patrick Van Dijck, KU Leuven, Belgium",
            "Dr. Richa Pandey, University of Calgary, Canada",
            "Prof. Dr. Hana Ursic Nemevsek, Jozef Stefan Institute, Slovenia",
            "Prof. Ajit Khosla, Japan",
            "Dr. Goutam, Singapore",
          ].map((member, idx) => (
            <p key={idx}>• {member}</p>
          ))}
        </div>
      </section>

      {/* ===== National Advisory Committee ===== */}
      <section>
        <h3 className="text-xl md:text-2xl font-semibold text-red-700 mb-4">
          National Advisory Committee (Tentative)
        </h3>
        <div className="bg-white shadow-md rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm md:text-base text-gray-700">
          {[
            "Prof. Bijoy Kumar Kuanr, SCNS, JNU",
            "Prof. Satyendra Singh, SCNS, JNU",
            "Dr. Pankaj Thakur, SCNS, JNU",
            "Dr. Prakash Kanoo, SCNS, JNU",
            "Dr. Sandeep Kumar, SCNS, JNU",
            "Dr. Neha Paras, SCNS, JNU",
            "Dr. Balaji Birajdar, SCNS, JNU",
            "Dr. Pratima Solanki, SCNS, JNU",
            "Dr. Tulika Prasad, SCNS, JNU",
            "Dr. Vinod Kumar, KMC College, DU",
            "Prof. Sanjog Rawat, Central University of Rajasthan",
            "Prof. Pramod Pal, Central University of Karnataka",
            "Prof. G R Mishra, Dr RML Avadh University, Ayodhya",
            "Prof. Binod Kumar Kanuajia, NIT Jalandhar",
            "Dr. Inderjeet Singh, VC, Bihar Animal Sciences University, Patna",
            "Prof. Bansi Dhar Malhotra, Ex-Scientist NPL, New Delhi",
            "Prof. Amulya K Panda, Associate Director, Panacea Biotech Ltd",
            "Dr. Tata Narasinga Rao, Former Director, ARCI Hyderabad",
            "Prof. Absar Ahmad, Director, Nanotech Centre, AMU, UP",
            "Prof. K. P. Singh, Vice Chancellor, Ruhelkhand University, Bareilly",
            "Prof. Alok Thakkar, AIIMS, New Delhi",
            "Prof. Vibha Tandon, Director, CSIR-IICB, Kolkata",
            "Prof. S. B. Krupanidhi, IISc Bengaluru",
            "Prof. Rajeev Ranjan, IISc Bengaluru",
            "Prof. Dhananjay Pandey, IIT-BHU",
            "Prof. Tapas Kumar Maji, JNCASR Bengaluru",
            "Dr. Jitender Kumar, SSPL DRDO, Delhi",
            "Prof. Prashant Mishra, IIT Delhi",
            "Prof. Suman K. Dhar, VC TERI School of Advanced Studies",
            "Dr. Dhiraj Bhatia, IIT Gandhinagar",
            "Prof. Mamta Khosla, NIT Jalandhar",
            "Prof. Arun Kumar Singh, PEC Chandigarh",
            "Prof. Manoj Kumar, NIT Delhi",
            "Dr. Subhash Chandra Yadav, AIIMS, New Delhi",
          ].map((member, idx) => (
            <p key={idx}>• {member}</p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Committee;
