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
          href="https://easychair.org/my/conference?conf=icrann2025"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg font-medium transition duration-300 text-sm sm:text-base"
        >
          Submit Abstract
        </a>
      </div>

      {/* Important Dates */}
      <div className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-6 text-center">
          Important Dates
        </h2>

        <ul className="space-y-4 text-gray-700 text-sm sm:text-base">
          <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
            <span className="font-medium">📌 Paper Submission Starts</span>
            <span>1st September 2025</span>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
            <span className="font-medium">📌 Paper Submission Deadline</span>
            <span>12th October 2025</span>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
            <span className="font-medium">📌 Notification of Paper Acceptance</span>
            <span>10th November 2025</span>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
            <span className="font-medium">📌 Camera Ready Submission Deadline</span>
            <span>25th November 2025</span>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
            <span className="font-medium">📌 Last Date of Early Bird Registration</span>
            <span>30th November 2025</span>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
            <span className="font-medium">📌 Last Date of Registration</span>
            <span>5th December 2025</span>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between">
            <span className="font-medium">📌 Conference Dates</span>
            <span>20th - 21st December 2025</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Abstract;
