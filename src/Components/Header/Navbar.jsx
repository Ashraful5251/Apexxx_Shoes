import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/Shop">Shop</NavLink>
      </li>
      <li>
        <NavLink to="/Products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/Pages">Pages</NavLink>
      </li>
      <li>
        <NavLink to="/Blogs">Blogs</NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-white text-xl">
            Appex
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:underline"
          >
            Menu
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center space-y-4">
              <Link to="/" className="hover:underline text-white">
                Home
              </Link>
              <Link to="/shop" className="hover:underline text-white">
                Shop
              </Link>
              <Link to="/products" className="hover:underline text-white">
                Products
              </Link>
              <Link to="/pages" className="hover:underline text-white">
                Pages
              </Link>
              <Link to="/blogs" className="hover:underline text-white">
                Blogs
              </Link>
            </div>
          </div>
        )}
        <div className="hidden md:flex flex-grow justify-center space-x-4">
          <Link to="/" className="hover:underline text-white mr-4">
            Home
          </Link>
          <Link to="/shop" className="hover:underline text-white mr-4">
            Shop
          </Link>
          <Link to="/products" className="hover:underline text-white mr-4">
            Products
          </Link>
          <Link to="/pages" className="hover:underline text-white mr-4">
            Pages
          </Link>
          <Link to="/blogs" className="hover:underline text-white">
            Blogs
          </Link>
        </div>
        <div className="md:flex-grow md:flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle text-white">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* SVG path here */}
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-black shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg text-white">8 Items</span>
                <span className=" text-white">Subtotal: $999</span>
                <div className="card-actions">
                  <Link to="/view-cart" className="btn btn-primary btn-block">
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar text-white"
            >
              <div className="w-10 rounded-full">
                <img
                  src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt="Profile"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
              <li>
                <Link to="/profile" className="justify-between text-white">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/settings" className="text-white">
                  Settings
                </Link>
              </li>
              <li>
                <Link to="/logout" className="text-white">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
