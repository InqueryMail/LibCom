import React from "react";

const Link = ({ href, children }) => {
  return (
    <li>
      <a
        href={href}
        className="block py-2 px-3 text-white hover:text-cyan-300 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
        aria-current="page"
      >
        {children}
      </a>
    </li>
  );
};

const NavBar = () => {
  return (
    <nav className="border-gray-200 w-full ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src="/libra-logo.png" className="h-8" alt="" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap "></span>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col text-center px-4 md:p-0 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 mq750:mt-4">
            <Link href={"/"} children={"Home"} />
            <Link href={"/products"} children={"Products"} />
            <Link href={"/inquiry"} children={"Inquiry"} />
            <Link href={"/about"} children={"About Us"} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
