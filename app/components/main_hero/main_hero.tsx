import React from "react";
import homeImage from "@/public/heroIMG.jpeg";

const MainHero: React.FC = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${homeImage.src})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-white text-center ">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">GymTalk</h1>
          <p className="mb-5 text-1xl">
            A community for athletes serious about levelling up their
            calisthenics skills.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
