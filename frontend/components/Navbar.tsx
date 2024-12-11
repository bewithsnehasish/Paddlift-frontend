"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`max-w-7xl fixed top-4 mx-auto inset-x-0 z-50 transition-all duration-300 ${isScrolled ? "w-[90%] bg-black/50 border border-white" : "w-[95%] bg-transparent"} rounded-md lg:w-full`}
      style={{ transform: "none" }}
    >
      <div className="hidden lg:block w-full">
        <div className="w-full flex relative justify-between px-4 py-3 rounded-md transition duration-200 mx-auto">
          <div className="flex flex-row gap-2 items-center">
            <Link
              href="/"
              className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
              >
                <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
                <path
                  d="M11.0389 19.8912L11.0392 28.5579C12.6769 28.5579 14.0028 27.2273 13.9972 25.5897L13.9712 18.071L13.9899 13.8938C13.9996 11.7406 15.753 10.003 17.9061 10.0126C20.0593 10.0223 21.797 11.7756 21.7873 13.9288L21.7686 18.106L21.7686 18.7764C21.7686 19.3921 22.2677 19.8912 22.8833 19.8911C23.499 19.8911 23.998 19.392 23.998 18.7764L23.998 13.5232C23.998 9.95254 21.1035 7.05796 17.5328 7.05796C13.9735 7.05796 11.0836 9.93487 11.0677 13.4942L11.0389 19.8912Z"
                  fill="#111B21"
                />
              </svg>
              <span className="text-white font-bold">PaddleLift</span>
            </Link>
            <div className="flex items-center gap-1.5">
              <Link
                href="/features"
                className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200"
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <Link
              href="/register"
              className="group hover:-translate-y-0.5 active:scale-[0.98] relative z-10 bg-transparent hover:border-secondary hover:bg-secondary/50 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-md px-4 py-2 flex items-center justify-center"
            >
              Register
            </Link>
            <button className="group hover:-translate-y-0.5 active:scale-[0.98] bg-blue-700 text-white relative z-10 hover:bg-blue-700/90 border border-secondary text-sm md:text-sm transition font-medium duration-200 rounded-md px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF60_inset,_0px_1px_0px_0px_#FFFFFF60_inset]">
              Job List
            </button>
          </div>
        </div>
      </div>

      <div className="flex h-full w-full items-center lg:hidden">
        <div className="flex justify-between bg-transparent items-center w-full rounded-md px-2.5 py-1.5 transition duration-200">
          <Link
            href="/"
            className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
          >
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
            >
              <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
              <path
                d="M11.0389 19.8912L11.0392 28.5579C12.6769 28.5579 14.0028 27.2273 13.9972 25.5897L13.9712 18.071L13.9899 13.8938C13.9996 11.7406 15.753 10.003 17.9061 10.0126C20.0593 10.0223 21.797 11.7756 21.7873 13.9288L21.7686 18.106L21.7686 18.7764C21.7686 19.3921 22.2677 19.8912 22.8833 19.8911C23.499 19.8911 23.998 19.392 23.998 18.7764L23.998 13.5232C23.998 9.95254 21.1035 7.05796 17.5328 7.05796C13.9735 7.05796 11.0836 9.93487 11.0677 13.4942L11.0389 19.8912Z"
                fill="#111B21"
              />
            </svg>
            <span className="text-white font-bold">PaddleLift</span>
          </Link>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="text-white h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16-7.2 16 16s-7.2 16-16 16z" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
