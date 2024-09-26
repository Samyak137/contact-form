import React from "react";

const App = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="page font-karla h-[670px] w-[375px] py-5 bg-customGreen flex justify-center items-center xl:w-full xl:h-screen">
          <div className="main-form min-h-[650px] h-auto w-[350px]  bg-white rounded-xl xl:min-h-[500px] xl:w-[600px]">
            <div className=" xl:mt-4">
              <h2 className="text-xl font-bold ml-5 mt-3 text-gray-800 xl:text-2xl ">
                Contact Us
              </h2>
            </div>
            <div className="name ml-5 flex flex-wrap  xl:justify-evenly xl:mt-5 xl:ml-[2px]">
              <div className="first my-3 xl:my-0">
                <h4 className="font-karla-400 text-gray-500 text-xs">
                  First Name <span className="text-green-600">*</span>
                </h4>
                <input className="border-2 border-gray-300 rounded-[5px] w-[290px] h-[40px] mt-1 xl:w-[260px] " />
              </div>
              <div className="last xl:my-0">
                <h4 className="font-karla-700 text-gray-500 text-xs">
                  Last Name <span className="text-green-600">*</span>
                </h4>
                <input className="border-2 border-gray-300 rounded-[5px] w-[290px] h-[40px] mt-1 xl:w-[260px]" />
              </div>
            </div>
            <div className="email ml-5 my-3 xl:my-4 xl:mx-7">
              <h4 className="font-karla-700 text-gray-500 text-xs">
                Email Address <span className="text-green-600">*</span>
              </h4>
              <input className="border-2 border-gray-300 rounded-[5px] w-[290px] h-[40px] mt-1 xl:w-[260px] xl:w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
