import React from "react";

const Contact = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-6 py-10">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg p-8 border border-blue-100">
        <h2 className="text-3xl font-semibold text-blue-700 mb-10 text-center">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Google Map Embed */}
          <div className="w-full h-80 md:h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.9864863715634!2d77.1653791!3d28.5401259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dc49b64e2e1%3A0xf40d1a642ef3a63d!2sSpecial%20Centre%20for%20Nano%20Science!5e0!3m2!1sen!2sin!4v1757277139459!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JNU Map"
            ></iframe>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center text-gray-800">
            <h3 className="text-xl font-semibold mb-1">Prof. Satyendra Singh</h3>
            <h3 className="text-xl font-semibold mb-3">Dr. Pankaj Thakur</h3>

            <p className="text-gray-700 mb-3">
              <span className="font-medium">Conference Convener, ICRANN-2025</span>
            </p>

            <p className="text-gray-700 mb-3 leading-relaxed">
              Special Centre for Nanoscience, <br />
              Jawaharlal Nehru University, <br />
              New Delhi, India
            </p>

            <p className="text-gray-700 mb-3">
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:icrann2025@gmail.com"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                icrann2025@gmail.com
              </a>
            </p>

            <p className="text-gray-700 mb-3">
              <span className="font-medium">Contact:</span> +91-1126704699
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
