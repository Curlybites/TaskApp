import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThemeChanger from "../components/ThemeChanger";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "sunset"
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar border-b border-slate-300/10 ${
        isScrolled
          ? "sticky right-0 left-0 top-0 z-10 bg-slate-900/30 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <div className="navbar-start">
        <Link to={"/"} className="btn btn-ghost text-xl">
          <div className="content flex flex-col text-left">
            <h1>TaskApp</h1>
            <p className="text-sm">LaravelReact</p>
          </div>
        </Link>
      </div>

      <div className="navbar-end">
        <div>
          <ul className="flex mr-2">
            <li>
              <Link to={"/About"} className="text-sm font-semibold">
                About
              </Link>
            </li>
          </ul>
        </div>

        
          <ThemeChanger theme={theme} setTheme={setTheme} />

      </div>
    </div>
  );
}
