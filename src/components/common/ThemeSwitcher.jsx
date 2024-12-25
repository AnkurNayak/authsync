"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CiSun } from "react-icons/ci";
import { CiCloudMoon } from "react-icons/ci";

const tabs = ["light", "dark"];

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="flex items-center flex-wrap gap-2">
      {tabs.map((tab) => (
        <Chip
          text={tab}
          selected={theme === tab}
          setSelected={() => setTheme(tab)}
          key={tab}
        />
      ))}
    </div>
  );
};

const Chip = ({ text, selected, setSelected }) => {
  return (
    <button
      onClick={setSelected}
      className={`${
        selected ? "text-white" : "hover:text-slate-200 hover:bg-slate-700"
      } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">
        {text === "light" ? <CiSun size={24} /> : <CiCloudMoon size={24} />}
      </span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
        />
      )}
    </button>
  );
};

export default ThemeSwitcher;
