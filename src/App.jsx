import React from "react";

const App = () => {
  return (
    <>
      <div className="page font-karla h-screen w-screen bg-customGreen flex justify-center items-center ">
        <div className="main-form h-[700px] w-[750px] bg-white rounded-xl">
          <div className="">
            <h2 className="text-3xl font-bold m-[30px]">Contact Us</h2>
          </div>
          <div className="name flex justify-evenly ">
            <div className="first">
              <h4 className="font-karla-400">First Name *</h4>
              <input className="border-2 border-gray-300 rounded-[5px] w-[300px] h-[45px] mt-2 " />
            </div>
            <div className="first">
              <h4 className="font-karla-400">Last Name *</h4>
              <input className="border-2 border-gray-300 rounded-[5px] w-[300px] h-[45px] mt-2 " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
