import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 mt-10">
      <div className="w-full md:w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center text-sm md:text-base">
        <p className="mb-3 md:mb-0">
          © 2025 - ICRANN-2025. All Rights Reserved.
        </p>
        <div className="flex space-x-4">
          <Link to="/registration" className="hover:underline">
            Registration
          </Link>
          <Link to="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/refund-policy" className="hover:underline">
            Refund Policy
          </Link>
          <Link to="/terms" className="hover:underline">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
