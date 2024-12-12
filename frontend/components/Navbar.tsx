"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`max-w-7xl fixed top-4 mx-auto inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "w-[90%] bg-black/50 border border-white"
          : "w-[95%] bg-transparent"
      } rounded-md lg:w-full ${isScrolled ? "transform translate-y-[-4px]" : ""}`}
      style={{ transform: "none" }}
    >
      <div className="hidden lg:block w-full">
        <div className="w-full flex relative justify-between px-4 py-3 rounded-md transition duration-200 mx-auto">
          <div className="flex flex-row gap-2 items-center">
            <Link
              href="/"
              className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
            >
              <Image
                src="/Paddlelite Logo.png"
                alt="Paddlelite Logo"
                className="max-h-24 max-w-24 object-contain opacity-60 group-hover:opacity-100 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-indigo-500/50 transition-all duration-300"
                width={44}
                height={44}
              />
              <span className="text-white font-bold">PaddleLift</span>
            </Link>
            <div className="flex items-center gap-1.5">
              <Link
                href="/about"
                className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200"
              >
                Contact Us
              </Link>
              {/*
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
              */}
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            {/*
           <Link
              href="/register"
              className="group hover:-translate-y-0.5 active:scale-[0.98] relative z-10 bg-transparent hover:border-secondary hover:bg-secondary/50 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-md px-4 py-2 flex items-center justify-center"
            >
              Register
            </Link>
            */}
            <button className="group hover:-translate-y-0.5 active:scale-[0.98] bg-blue-700 text-white relative z-10 hover:bg-blue-700/90 border border-secondary text-sm md:text-sm transition font-medium duration-200 rounded-md px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF60_inset,_0px_1px_0px_0px_#FFFFFF60_inset]">
              Job List
            </button>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="flex h-full w-full items-center lg:hidden">
        <div className="flex justify-between bg-transparent items-center w-full rounded-md px-2.5 py-1.5 transition duration-200">
          <Link
            href="/"
            className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
          >
            <Image
              src="/Paddlelite Logo.png"
              alt="Paddlelite Logo"
              className="max-h-24 max-w-24 object-contain opacity-60 group-hover:opacity-100 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-indigo-500/50 transition-all duration-300"
              width={33}
              height={33}
            />
            <span className="text-white font-bold">PaddleLift</span>
          </Link>
          {/* Hamburger Menu */}
          <button onClick={toggleMobileMenu} className="text-white h-6 w-6">
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
          </button>
        </div>
      </div>

      {/* Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-start justify-start space-y-10 pt-5 text-xl text-zinc-600 transition duration-200 hover:text-zinc-800">
          <div className="flex items-center justify-between w-full px-5">
            <Link
              href="/"
              className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
            >
              <Image
                src="/Paddlelite Logo.png"
                alt="Paddlelite Logo"
                className="max-h-24 max-w-24 object-contain opacity-60 group-hover:opacity-100 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-indigo-500/50 transition-all duration-300"
                width={44}
                height={44}
              />
              <span className="text-white font-bold">PaddleLift</span>
            </Link>
            <button onClick={toggleMobileMenu} className="text-white h-6 w-6">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-white h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-6.2 6.2-6.2 16.4 0 22.6L233.4 256l-68.2 68.2c-6.2 6.2-6.2 16.4 0 22.6 6.2 6.2 16.4 6.2 22.6 0L256 278.6l68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-start w-full pl-6 space-y-6">
            <Link href="/about" className="text-white">
              About Us
            </Link>
            <Link href="/contact" className="text-white">
              Contact
            </Link>
            {/*       
            <Link href="/blog" className="text-white">
              Blog
            </Link>
            <Link href="/contact" className="text-white">
              Contact
            </Link>
            <Link href="/register" className="text-white">
              Register
            </Link>
            */}
            <button className="text-white">Job List</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
