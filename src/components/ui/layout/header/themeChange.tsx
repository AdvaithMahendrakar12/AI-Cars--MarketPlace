"use client";

import React from 'react'
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

const  ThemeChange = () => {
   const { setTheme, theme } = useTheme();

  return theme === "dark" ? (
    <button
      onClick={() => setTheme("light")}
      className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted"
    >
      <SunIcon />
    </button>
  ) : (
    <button
      onClick={() => setTheme("dark")}
      className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted"
    >
      <MoonIcon />
    </button>
  )
}

export default ThemeChange
