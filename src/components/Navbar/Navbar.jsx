"use client";

import { useState } from "react";
import { UserData } from "@/app/context/UserProvider";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // For hamburger menu icons

const Navbar = () => {
  const { user, isAuth } = UserData();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h4 className="text-2xl font-bold">
            ✍️ <span>BlogReview</span>
          </h4>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Links for Desktop */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center gap-6 absolute md:relative top-16 left-0 w-full md:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 md:bg-transparent md:top-auto md:left-auto shadow-md md:shadow-none p-4 md:p-0`}
        >
          <Link
            href="/"
            className="block md:inline text-lg font-semibold hover:text-yellow-400 transition-all duration-200"
          >
            Home
          </Link>
          <Link
            href="/profile"
            className="block md:inline text-lg font-semibold hover:text-yellow-400 transition-all duration-200"
          >
            Profile
          </Link>

          {/* Auth Buttons */}
          <div className="flex gap-4 items-center mt-4 md:mt-0">
            {user ? (
              <LogoutLink className="block text-center md:inline border border-yellow-400 rounded-lg px-6 py-2 hover:bg-yellow-400 hover:text-indigo-800 transition duration-300">
                Log Out
              </LogoutLink>
            ) : (
              <>
                <LoginLink className="block text-center md:inline border border-yellow-400 rounded-lg px-6 py-2 hover:bg-yellow-400 hover:text-indigo-800 transition duration-300">
                  Sign In
                </LoginLink>
                <RegisterLink className="block text-center md:inline border-yellow-400 border rounded-lg px-6 py-2 hover:bg-yellow-400 hover:text-indigo-800 transition duration-300">
                  Sign Up
                </RegisterLink>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
