"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { Kalam } from "next/font/google";
import HamburgerMenu from "../hamburger-menu/HamburgerMenu";
import Nav from "./nav/Nav";

const variants = {
  open: {
    width: 400,
    height: 600,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: 0,
    height: 0,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
};

const kalam = Kalam({ subsets: ["latin"], weight: "300" });

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="sm:hidden w-full fixed z-10 bg-slate-50 border">
      <div className="flex justify-between p-4">
        <motion.h1
          initial={{ translateY: -500 }}
          animate={{ translateY: 0 }}
          transition={{ type: "linear" }}
          className={`${kalam.className} text-slate-600`}
          viewport={{ once: true }}
        >
          Vital Centrum Rajnochovice
        </motion.h1>
        <HamburgerMenu isOpen={isOpen} handleClick={handleClick} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.25 }}
              onClick={handleClick}
              className="absolute h-screen w-screen z-10 bg-black"
            ></motion.div>

            <motion.nav
              variants={variants}
              initial={"closed"}
              animate={isOpen ? "open" : "closed"}
              className="absolute flex flex-col justify-evenly items-center right-0 w-full rounded-b bg-slate-100 h-fit z-30 "
            >
              <Nav handleClick={handleClick} />
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default MobileNavigation;
