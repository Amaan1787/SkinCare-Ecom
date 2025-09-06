import React from "react";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#909090] text-white w-full">
      <div className="footer-content w-full max-w-full mx-auto px-8 pt-12 pb-6 ">
        <div className="footer-above grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto pb-12 border-b border-white/100 ">
          <div className="footer-col flex flex-col">
            <h4 className="text-lg font-semibold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-gradient-to-r after:from-pink-600 after:to-pink-100">
              Shop
            </h4>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to={"/product"}
                  className={"text-black text-sm hover:text-gray-300 transition"}
                >
                  All Products
                </NavLink>
              </li>
              <li>
                <NavLink className={"text-black text-sm hover:text-gray-300 transition"}>New Arrivals</NavLink>
              </li>
              <li>
                <NavLink className={"text-black text-sm hover:text-gray-300 transition"}>Best Sellers</NavLink>
              </li>
              <li>
                <NavLink className={"text-black text-sm hover:text-gray-300 transition"}>Sale Items</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-col flex flex-col">
            <h4 className="text-lg font-semibold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-gradient-to-r after:from-pink-600 after:to-pink-100">
              Customer Service
            </h4>
            <ul className="space-y-2">
              <li>
                <NavLink  className={"text-black text-sm hover:text-gray-300 transition"}>Contact Us</NavLink>
              </li>
              <li>
                <NavLink  className={"text-black text-sm hover:text-gray-300 transition"}>FAQ</NavLink>
              </li>
              <li>
                <NavLink  className={"text-black text-sm hover:text-gray-300 transition"}>Returns & Exchanges</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-col flex flex-col">
            <h4 className="text-lg font-semibold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-gradient-to-r after:from-pink-600 after:to-pink-100">
              About Us
            </h4>
            <ul className="space-y-2">
              <li>
                <NavLink className={"text-black text-sm hover:text-gray-300 transition"}>Our Story</NavLink>
              </li>
              <li>
                <NavLink className={"text-black text-sm hover:text-gray-300 transition"}>Blogs</NavLink>
              </li>
              <li>
                <NavLink className={"text-black text-sm hover:text-gray-300 transition"}>Careers</NavLink>
              </li>
              <li>
                <NavLink className={"text-black text-sm hover:text-gray-300 transition"}>Press</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-col flex flex-col">
            <h4 className="text-lg font-semibold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-gradient-to-r after:from-pink-600 after:to-pink-100">
              Stay Connected
            </h4>
            <p className={"text-black text-sm mb-6 leading-relaxed"}>Subscribe for updates and special offers</p>
            <div className="footer-form w-full max-w-md flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full px-3 py-2 text-sm text-black outline-none bg-gray-100 rounded-md"
              />
              <button
                type="submit"
                className="w-full cursor-pointer bg-gradient-to-r from-pink-600 to-pink-200 rounded-md text-white font-semibold py-2 transition hover:from-pink-700 hover:to-pink-700"
              >
                Subscribe
              </button>
            </div>
            <div className="footer-socialmedia list-none">
              <li>
                <NavLink>FaceBook</NavLink>
              </li>
              <li>
                <NavLink>Twitter</NavLink>
              </li>
              <li>
                <NavLink>Instagram</NavLink>
              </li>
              <li>
                <NavLink>Linkdin</NavLink>
              </li>
            </div>
          </div>
        </div>
        <div className="footer-below max-w-6xl mx-auto py-8 flex flex-wrap justify-between items-center text-xs ">
          <p>© 2025 YourStoreName. All rights reserved.</p>
          <div className="footer-legal-link flex justify-between">
            <NavLink rel="stylesheet" href="">
              Privacy Policy
            </NavLink>
            <NavLink rel="stylesheet" href="">
              Terms of Service
            </NavLink>
            <NavLink rel="stylesheet" href="">
              Cookie Policy
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
