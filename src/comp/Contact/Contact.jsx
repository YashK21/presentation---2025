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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.9864863715634!2d77.1653791!3d28.5401259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dc49b64e2e1%3A0xf40d1a642ef3a63d!2sSpecial%20Centre%20for%20Nano%20Science!5e0!3m2!1sen!2sin!4v1757277139459!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              Prof. Satyendra Singh
            </h3>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              Dr. Pankaj Thakur
            </h3>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">
                Conference Convener, ICRANN-2025
              </span>
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
              </a>{" "}
              {/* <a
                href="mailto:aloksinghjha@gmail.com"
                className="text-blue-600 hover:underline"
              >
                aloksinghjha@gmail.com
              </a> */}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">Contact:</span>{" "}
              +91-1126704699
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
