"use client";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

import { AiOutlineRight } from "react-icons/ai";

import { useState, useEffect } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 20vh
      if (window.scrollY > (40 * window.innerHeight) / 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full z-[100] shadow-sm ${
        isSticky ? "sticky top-0" : ""
      }`}
    >
        
      <nav className=" relative h-[13vh] mx-auto flex justify-between items-center px-4 px-2 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
          priority={true}
            src="/assets/images/dashboard/admin-logo.png"
            alt="logo"
            width={192}
            height={41}
            className="object-contain"
          />
        </Link>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <ul
          className={`lg:flex  gap-2  lg:items-center  lg:gap-6 ${
            menuOpen
              ? "flex absolute shadow-md  w-[100%]  top-[13vh] border-t-2 justify-start z-[18] items-center bg-[#f5f5f5] flex-col right-[0] h-[50vh]"
              : "hidden"
          }`}
        >
            <li className={` ${ menuOpen && "not-lg:border-b-2 lg:border-none flex justify-between items-center w-full px-6  text-center py-4"}`}>
            <Link href="/">Blog</Link>
            {menuOpen && <AiOutlineRight />}
          </li>
          <li className={` ${ menuOpen && "not-lg:border-b-2 lg:border-none flex justify-between items-center w-full px-6  text-center py-4"}`}>
            <Link href="/">FAQ</Link>
            {menuOpen && <AiOutlineRight />}
          </li>

          <li className={` ${ menuOpen ? "not-lg:border-b-2 lg:border-none flex justify-between items-center w-full px-6  text-center py-4": " "}`}>
            <Link href="/contact">Contact Us</Link>
            {menuOpen && <AiOutlineRight />}
          </li>
          <li className={`p-[4px]  border rounded-lg ${ menuOpen ? "not-lg:border-b-2 lg:border-none flex justify-between items-center w-full px-6  text-center py-4": " "}`}>
            <select name="" className="outline-none pr-[4px]"  id="" >
                <option value="" className="">09030024812</option>
            </select>
            {menuOpen && <AiOutlineRight />}
          </li>
          <li className={` bg-primary-1 p-[6px] rounded-md ${ menuOpen ? "not-lg:border-b-2 lg:border-none flex justify-between items-center w-full px-6  text-center py-4": " "}`}>
            <Image className="" src='/assets/images/dashboard/carbon_notification.png' width={32} height={32} alt='notification' />
            {menuOpen && <AiOutlineRight />}
          </li>
         
          

         
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
