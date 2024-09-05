"use client";

import "@/app/components/header/header.css";
import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-base-300 flex-1 justify-center navbar text-white">
      <div className="flex-none">
        <a className="btn btn-ghost text-xl">GymTalk</a>
      </div>
      <div className="flex-1 flex justify-center">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Our Story</a>
          </li>
        </ul>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
