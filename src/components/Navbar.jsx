import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MapPin } from "lucide-react";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useState } from "react";

const Navbar = ({ location, getLocation, dropDown, setDropdown }) => {
  let toggleDropdown = () => {
    setDropdown(!dropDown);
  };

  return (
    <div className="bg-white p-3 shadow-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex gap-7 items-center">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl">
              <span className="text-pink-500">Skin</span>Care
            </h1>
          </Link>
          <div className="flex gap-1 cursor-pointer text-gray-400 items-center">
            <MapPin className="text-pink-300 h-10 items-center"></MapPin>
            <span className="font-semibold">
              {location ? (
                <div className="-space-y-1 text-[12px]">
                  <p>{location.state}</p>
                  <p>{location.city}</p>
                </div>
              ) : (
                "Add Address"
              )}
            </span>
            <FaCaretDown onClick={toggleDropdown} />
          </div>
          {dropDown ? (
            <div className="w-52 h-max shadow-2xl z-10 fixed top-10 left-66 border-2 p-2 bg-white border-gray-200 rounded-md">
              <h1 className="flex justify-between text-[16px] items-center">
                Change Location
                <span>
                  <CgClose
                    className="cursor-pointer"
                    onClick={toggleDropdown}
                  />
                </span>
              </h1>
              <div className="flex justify-end mt-4">
                <button
                  className="text-[14px] bg-red-600 py-1 px-2 rounded-md text-white cursor-pointer"
                  onClick={getLocation}
                >
                  Detect my location
                </button>
              </div>
            </div>
          ) : null}
        </div>
        <nav className="flex gap-10 items-center">
          <ul className="flex gap-15 items-center font-semibold">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 border-pink-500 cursor-pointer transition-all "
                    : "text-black"
                }`
              }
            >
              {" "}
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/product"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 border-pink-500 cursor-pointer transition-all"
                    : "text-black"
                }`
              }
            >
              {" "}
              <li>Products</li>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 border-pink-500 cursor-pointer transition-all"
                    : "text-black"
                }`
              }
            >
              {" "}
              <li>About</li>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 border-pink-500 cursor-pointer transition-all"
                    : "text-black"
                }`
              }
            >
              {" "}
              <li>Contact</li>
            </NavLink>
          </ul>
          <Link to={"/cart"} className="relative">
            <FaShoppingCart className="h-5 w-5" />
            <span className="bg-red-600 rounded-full px-1 absolute -top-3 -right-4 text-white">
              0
            </span>
          </Link>
          <div>
            <SignedOut>
              <SignInButton className="bg-red-600 px-3 py-1 text-white rounded-md cursor-pointer" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
