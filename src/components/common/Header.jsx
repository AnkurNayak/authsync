"use client";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { HiOutlineBars3 } from "react-icons/hi2";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = ["Home", "Next-Auth", "Formik", "SWR"];

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="h-16 flex items-center bg-app-bar shadow sm:sticky top-0 z-[170]">
      <div className="container mx-auto px-4 md:px-8 flex items-center w-full">
        <div className="font-bold tracking-widest text-xl">AuthSync</div>
        <div className="ml-auto flex items-center font-medium text-sm gap-2">
          <div className="hidden md:flex">
            <NavHorizontal />
          </div>
          <div className="flex md:hidden relative">
            <button
              className="flex items-center justify-center h-8 w-8 rounded-full hover:bg-hover"
              onClick={() => setIsNavOpen((pv) => !pv)}
            >
              <HiOutlineBars3 size={24} className="text-icon" />
            </button>
            {isNavOpen && <NavVertical setIsNavOpen={setIsNavOpen} />}
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

const NavVertical = ({ setIsNavOpen }) => {
  return (
    <motion.div
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.2, damping: 25 }}
      className="absolute top-14 flex flex-col bg-app-bar right-0 w-40 rounded-md overflow-hidden shadow-custom"
    >
      {navLinks.map((item, index) => (
        <Link
          href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
          className="px-4 py-2 hover:bg-hover flex items-start"
          key={index}
          onClick={() => setIsNavOpen(false)}
        >
          {item}
        </Link>
      ))}
    </motion.div>
  );
};

const NavHorizontal = () => {
  return (
    <>
      {navLinks.map((item, index) => (
        <div className="p-8" key={index}>
          <Link
            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="text-gray-500 dark:text-gray-300 hover:text-text dark:hover:text-text"
          >
            {item}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Header;
