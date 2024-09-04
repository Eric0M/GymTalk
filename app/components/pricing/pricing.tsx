import React from "react";

const Pricing = () => {
  return (
    <div className=" flex flex-col text-white">
      <div className="text-center pt-5 text-3xl">Starter</div>
      <div className="text-center py-5 text-3xl">%50/Month</div>
      <div className="px-10 text-2xl">Key Features</div>
      <div>
        <ul className="list-disc px-10">
          <li className="mx-10 my-5">GymTok+ Access</li>
          <li className="mx-10  my-5">Live Q&A</li>
          <li className="mx-10  my-5">Personal Coaching Plan</li>
        </ul>
      </div>
      <div className="px-10">
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  );
};

export default Pricing;
