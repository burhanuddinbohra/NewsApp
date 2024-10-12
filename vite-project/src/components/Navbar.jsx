import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-800 w-full p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-white text-xl font-semibold transition-transform transform hover:scale-105 hover:text-blue-400" // Add hover effect
        >
          News Website
        </Link>
        <div className="flex space-x-4">
          <Link
            to="/"
            className={`text-white px-3 py-2 rounded-md text-lg hover:bg-gray-700 transition duration-200 ${
              location.pathname === "/" ? "bg-gray-700" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-white px-3 py-2 rounded-md text-lg hover:bg-gray-700 transition duration-200 ${
              location.pathname === "/about" ? "bg-gray-700" : ""
            }`}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
