import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // CONTAINS THE ARRAY OF PAGES AND CORRESPONDING URL
  const navContent = [
    { webPage: "Home", url: "/" },
    { webPage: "About", url: "/about" },
    { webPage: "Portfolio", url: "/portfolio" },
    { webPage: "Blog", url: "/blog" },
    { webPage: "Contact", url: "/contact" },
  ];

  return (
    <div>
      <nav className="w-full h-[10vh] flex justify-center pl-[20vw] pt-[2vh] text-white font-normal">
        <div className="flex">
          {navContent.map((page, index) => (
            <button
              key={page.webPage}
              className={`px-[4vw] ${
                index === navContent.length - 1 &&
                "ml-[5vw]  bg-white text-black rounded-full font-bold"
              }`}
            >
              <Link
                className="font-inter text-headingLarge relative group inline-block"
                to={page.url}
              >
                {page.webPage}
                <span className="block w-0 h-[0.25vh] bg-white transition-all duration-300 group-hover:w-full group-hover:scale-x-100 group-hover:origin-center"></span>
              </Link>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
