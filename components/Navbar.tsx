"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="">
      <div className="hidden h-10vh lg:flex justify-between lg:py-5 px-20 py-20  border-b ">
        <div className="flex items-center flex-1 ">
          <h2 className="text-3xl font-bold text-orange-600">Beauty</h2>
        </div>
        <div className="">
          <ul className="flex gap-8 mr-16 text-[18px]">
            <Link href="#">
              {" "}
              <li className="hover:text-orange-400 transition  border-b-2 border-white hover:border-orange-400 cursor-pointer">
                Home
              </li>
            </Link>
            <Link href="#">
              {" "}
              <li className="hover:text-orange-400 transition border-b-2 border-white hover:border-orange-400 cursor-pointer">
                Shop
              </li>
            </Link>
            <Link href="#">
              {" "}
              <li className="hover:text-orange-400 transition border-b-2 border-white hover:border-orange-400 cursor-pointer">
                Blogs
              </li>
            </Link>
            <Link href="#">
              {" "}
              {/* mega menu start */}
              <div className="group ">
                <button className="hover:text-orange-400 transition border-b-2 border-white hover:border-orange-400 cursor-pointer">
                  Product
                </button>
                <div className="hidden group-hover:flex flex-col absolute left-0 top-[49.5px] p-10 w-full bg-white z-20 text-black duration-300 ">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    <div className="flex flex-col">
                      <h3 className="mb-4 text-2xl text-orange-400">
                        Beauty Products
                      </h3>
                      <Link
                        href=""
                        className="hover:underline hover:text-orange-400"
                      >
                        Makeup Kit
                      </Link>
                      <Link
                        href=""
                        className="hover:underline hover:text-orange-400"
                      >
                        Makeup Kit
                      </Link>
                      <Link
                        href=""
                        className="hover:underline hover:text-orange-400"
                      >
                        Makeup Kit
                      </Link>
                      <Link
                        href=""
                        className="hover:underline hover:text-orange-400"
                      >
                        Makeup Kit
                      </Link>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="mb-4 text-2xl text-orange-400">
                        Beauty Products
                      </h3>
                      <Link
                        href=""
                        className="hover:underline hover:text-orange-400"
                      >
                        Makeup Kit
                      </Link>
                      <Link
                        href=""
                        className="hover:underline hover:text-orange-400"
                      >
                        Makeup Kit
                      </Link>
                      <Link
                        href=""
                        className="hover:underline hover:text-orange-400"
                      >
                        Makeup Kit
                      </Link>
                      <Link
                        href=""
                        className="hover:underline hover:text-orange-400"
                      >
                        Makeup Kit
                      </Link>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="mb-4 text-2xl text-orange-400">
                        Beauty Products
                      </h3>
                      <Link
                        href=""
                        className="hover:underline hover:text-orange-400"
                      >
                        Makeup Kit
                      </Link>
                      <Link
                        href=""
                        className="hover:underline hover:text-orange-400"
                      >
                        Makeup Kit
                      </Link>
                      <Link
                        href=""
                        className="hover:underline hover:text-orange-400"
                      >
                        Makeup Kit
                      </Link>
                      <Link
                        href=""
                        className="hover:underline hover:text-orange-400"
                      >
                        Makeup Kit
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* mega menu end */}
            </Link>
            <Link href="#">
              {" "}
              <li className="hover:text-orange-400 transition border-b-2 border-white hover:border-orange-400 cursor-pointer">
                Pages
              </li>
            </Link>
            <Link href="#">
              {" "}
              <li className="hover:text-orange-400 transition border-b-2 border-white hover:border-orange-400 cursor-pointer">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="flex order-3 lg:hidden m-4">
        <div className="flex items-center flex-1 ">
          <h2 className="text-3xl font-bold text-orange-600">Beauty</h2>
        </div>
        <button className="bg-orange-600 p-2" onClick={handleMenuToggle}>
          {menuOpen ? (
            <AiOutlineClose size="30px" color="black" />
          ) : (
            <RxHamburgerMenu size="30px" color="black" />
          )}
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden absolute text-right inset-0 w-full top-24 h-fit flex flex-col p-4 space-y-1 bg-orange-600">
          <div className="flex justify-center flex-col gap-y-5 py-5 text-white">
            <Link
              href="#users"
              onClick={handleMenuToggle}
              className="no-underline hover:text-black"
            >
              <span>Shop</span>
            </Link>
            <Link
              href="#features"
              onClick={handleMenuToggle}
              className="no-underline hover:text-black"
            >
              <span>Blogs</span>
            </Link>
            <Link
              href="#wishes"
              onClick={handleMenuToggle}
              className="no-underline hover:text-black"
            >
              <span>Products</span>
            </Link>
            <Link
              href="#get-started"
              onClick={handleMenuToggle}
              className="no-underline hover:text-black"
            >
              <span>Pages</span>
            </Link>
          </div>
          <hr />
          <div className="flex justify-stretch flex-col gap-y-5 py-4 items-stretch text-center rounded-xl">
            <span className="bg-black text-white font-bold text-sm rounded-xl items-center content-center cursor-pointer px-5 py-3">
              Login
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
