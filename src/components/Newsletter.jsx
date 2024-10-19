import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full bg-gray-200 h-full py-14 px-2 flex justify-center items-center overflow-hidden">
      <div className="max-w-md w-full">
        <h1 className="py-5 font-bold text-xl sm:text-3xl text-nowrap text-center">Subscribe for Exclusive Updates</h1>
        <div className="flex w-full justify-center">
          <input className="w-1/2 sm:w-full border focus:outline-none focus:border-gray-500 p-2 border-gray-400 h-10" type="email" name="newsletteremail" id="newsletteremail" />
          <button className="bg-black hover:bg-slate-900 transition-all duration-300 ease-in text-white px-3">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
