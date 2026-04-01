import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
  const [authUser] = useAuth();

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const [sticky, setSticky] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // state to control Login modal

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
      const btn = document.getElementById("menu-btn");
      if (btn) btn.blur();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/course">Course</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </>
  );

  return (
    <div
      className={`w-full fixed top-0 left-0 right-0 transition-all duration-300 z-50 ${
        sticky ? "bg-white dark:bg-slate-900 shadow-md" : "bg-white dark:bg-slate-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="navbar min-h-0 h-12 px-0">
          {/* Navbar Start */}
          <div className="navbar-start gap-2">
            <div className="dropdown relative">
              <div
                id="menu-btn"
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                ☰
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow-lg bg-white dark:bg-slate-900 rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>

            <a className="text-xl font-bold">Bookstore</a>
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-3">{navItems}</ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end flex items-center gap-3">
            <div className="hidden md:block">
              <input
                type="text"
                placeholder="Search books..."
                className="w-64 rounded-full border border-gray-300 px-4 py-2 dark:bg-slate-900 dark:text-white"
              />
            </div>

            <label className="swap swap-rotate">
              <input type="checkbox" className="theme-controller" />
              <span
                className="swap-off text-xl cursor-pointer"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                🌞
              </span>
              <span
                className="swap-on text-xl cursor-pointer"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                🌙
              </span>
            </label>

            {/* Auth Buttons */}
            {authUser ? (
              <Logout />
            ) : (
              <>
                <button
                  className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600 rounded-full"
                  onClick={() => setShowLogin(true)}
                >
                  Login
                </button>

                {/* Show Login Modal */}
                {showLogin && <Login onClose={() => setShowLogin(false)} />}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;