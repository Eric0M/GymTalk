import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="hero bg-base-200 py-40">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Shoes"
        />
        <div>
          <h1 className="text-5xl font-bold">ABOUT</h1>
          <p className="py-6">About</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
