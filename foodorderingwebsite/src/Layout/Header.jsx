import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [ismenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!ismenuOpen);
  };
  return (
    
      <div className="w-full flex md:w-[80%] md:px-9  mb-1 md:py-1 gap-16 md:gap-2 h-22 md:items-center md:justify-center mx-auto">
        {/* <div className=" flex md:items-center border border-red-700"> */}
          <button
            className={`flex items-center justify-between md:hidden p-2 ${ismenuOpen ? "hidden" : "block"}`}
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        {/* </div> */}
        {/* <h1 className="w-[25%]  pl-15 first-letter:m-2 items-center justify-center border border-red-700"> */}
          <img
            className="w-[95%] md:w-[20%] h-20 p-2 "
            src="https://www.ketodelia.ca/cdn/shop/files/Ketodelia_Logo_1b.png?v=1664321580&width=500"
            alt="logoimage"
          />
        {/* </h1> */}

        <div
          className={`md:flex w-[50%] m-2 items-center justify-center ${
            ismenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="md:flex gap-2">
            <li className="p-2">
              <Link to="/">Menu</Link>
            </li>
            <li className="p-2">
              <Link to="/">FAQ</Link>
            </li>
            <li className="p-2">
              <Link to="/">About</Link>
            </li>
            <li className="p-2">
              <Link to="/">Gift cards</Link>
            </li>
            <li className="p-2">
              <Link to="/">Contact</Link>
            </li>
            <li className="p-2">
              <Link to="/">Locations</Link>
            </li>
          </ul>
        </div>
        <div className="flex pr-2 m-2 w-[30%] gap-3 items-center justify-end ">
          <span className="hidden md:inline underline">(416)623-0317</span>
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </Link>
          <Link className="hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user-round"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
          </Link>
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-bag ml-1 pr-1 "
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </Link>
        </div>
      </div>
    
  );
}

export default Header;
