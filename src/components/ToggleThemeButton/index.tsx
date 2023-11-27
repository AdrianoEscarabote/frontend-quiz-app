"use client";

import Image from "next/image";
import style from "./style.module.css";
import { useEffect, useState } from "react";

const ToggleThemeButton = () => {
  const [darkIcon, setDarkIcon] = useState(false);

  useEffect(() => {
    const themeToggle = document.getElementById("switch");

    const handleToggleClick = () => {
      document.body.classList.toggle("light-theme");
    };

    themeToggle?.addEventListener("click", handleToggleClick);

    return () => {
      themeToggle?.removeEventListener("click", handleToggleClick);
    };
  }, []);

  useEffect(() => {
    const home = document.querySelector("main");
    if (!home) {
      return;
    }
    if (document.body.classList.contains("light-theme")) {
      home.classList.add("light-bg");
      home.classList.remove("dark-bg");
    } else {
      home.classList.add("dark-bg");
      home.classList.remove("light-bg");
    }
  }, [darkIcon]);

  return (
    <div className={`${style.container} flex items-center gap-4`}>
      <Image
        src={
          darkIcon ? "/assets/icon-sun-light.svg" : "/assets/icon-sun-dark.svg"
        }
        width={24}
        height={24}
        alt="icon sun"
        className={`${style.icon}`}
      />
      <input
        className={`${style.input}`}
        type="checkbox"
        id="switch"
        onChange={(e) => setDarkIcon(e.currentTarget.checked)}
      />
      <label className={`${style.label}`} htmlFor="switch">
        Toggle
      </label>
      <Image
        src={
          darkIcon
            ? "/assets/icon-moon-light.svg"
            : "/assets/icon-moon-dark.svg"
        }
        width={24}
        height={24}
        alt="icon moon"
        className={`${style.icon}`}
      />
    </div>
  );
};

export default ToggleThemeButton;
