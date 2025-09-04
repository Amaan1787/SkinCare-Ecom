import React from "react";
import { Link,NavLink } from "react-router-dom";
import { MapPin } from "lucide-react";
import { FaCaretDown,FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
  let location = false;
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
            <MapPin className="text-pink-300"></MapPin>
            <span className="font-semibold">
              {location ? <div></div> : "Add Address"}
            </span>
            <FaCaretDown/>
          </div>
        </div>
        <nav className="flex gap-20 items-center">
          <ul className="flex gap-20 items-center font-semibold">
            <NavLink to={"/"} className={({isActive})=>`${isActive ? "border-b-3 border-pink-500 cursor-pointer transition-all ": "text-black"}`}> <li>Home</li></NavLink>
            <NavLink to={"/product"} className={({isActive})=>`${isActive ? "border-b-3 border-pink-500 cursor-pointer transition-all": "text-black"}`}> <li>Products</li></NavLink>
            <NavLink to={"/about"} className={({isActive})=>`${isActive ? "border-b-3 border-pink-500 cursor-pointer transition-all": "text-black"}`}> <li>About</li></NavLink>
            <NavLink to={"/contact"} className={({isActive})=>`${isActive ? "border-b-3 border-pink-500 cursor-pointer transition-all": "text-black"}`}> <li>Contact</li></NavLink>
          </ul>
          <Link to={"/cart"} className="relative">
            <FaShoppingCart className="h-5 w-5"/><span className="bg-red-600 rounded-full px-1 absolute -top-3 -right-4 text-white">0</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
