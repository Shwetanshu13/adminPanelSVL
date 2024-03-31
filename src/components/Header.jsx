import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [width, setWidth] = useState(screen.width);
  const [isMobile, setIsMobile] = useState(width < 640 ? true : false);

  useEffect(() => {
    setWidth(screen.width);
    window.addEventListener("resize", () => {
      setWidth(screen.width);
    });
    setIsMobile(width < 640 ? true : false);
    // console.log(isMobile, width);
  }, [width]);


  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isMobile ? (
        <header className="bg-blue-600 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 max-w-full">
          {/* Mobile Screen Navbar */}
          <div className="flex items-center justify-between px-4 py-3 sm:p-0">
            <div>
              <Link to="/" className="flex gap-3">
                <img className="h-8" src="/logo.png" alt="Workcation" />
                <h1 className="text-lg text-white">News2Day</h1>
              </Link>
            </div>
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path
                      fillRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
          <nav
            className={
              isOpen ? "block px-2 pt-2 pb-4 sm:flex sm:p-0" : "hidden"
            }
          >
            <ul>
              <li>
                <Link to="/" className="text-white">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/create" className="text-white">
                  Create
                </Link>
              </li>
              <li>
                <Link to="/manage" className="text-white">
                  Manage
                </Link>
              </li>
              <li>
                <Link to="/report" className="text-white">
                  Report
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      ) : (
        <nav className="bg-blue-600 p-4 rounded-xl mt-3 sm:w-2/3 md:w-1/2 mx-auto sticky">
          {/* Desktop Screen Navbar */}
          <ul className="flex justify-between px-5 align-middle">
            <li>
            <Link to="/" className="flex gap-3">
                <img className="h-8" src="/logo.png" alt="Workcation" />
                <h1 className="text-lg text-white">News2Day</h1>
              </Link>
            </li>
            <li>
              <Link to="/create" className="text-white">
                Create
              </Link>
            </li>
            <li>
              <Link to="/manage" className="text-white">
                Manage
              </Link>
            </li>
            <li>
              <Link to="/report" className="text-white">
                Report
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Header;
