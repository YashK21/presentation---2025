import React from "react";

const Contact = () => {
  return (
    <div className="w-full">
      {/* Contact Section */}
      <div className="w-full md:w-[90%] mx-auto px-4 py-10">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Google Map Embed */}
          <div className="w-full h-80 md:h-[400px] shadow-lg rounded-xl overflow-hidden">
            <iframe
              src="https://maps.app.goo.gl/BS6JgmDLtvb1wzbq5?g_st=aw"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JNU Map"
            ></iframe>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              Dr. Alok Kumar Singh Jha
            </h3>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">Convener, ICRANN-2025</span>
            </p>
            <p className="text-gray-700 mb-2">
              Special Centre for Nanoscience, <br />
              Jawaharlal Nehru University, <br />
              New Delhi, India
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:icrannjnu25@gmail.com"
                className="text-blue-600 hover:underline"
              >
                icrannjnu25@gmail.com
              </a>
              ,{" "}
              <a
                href="mailto:aloksinghjha@gmail.com"
                className="text-blue-600 hover:underline"
              >
                aloksinghjha@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Contact;
