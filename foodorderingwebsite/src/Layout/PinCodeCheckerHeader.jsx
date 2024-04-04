import React, { useState } from "react";

function PinCodeCheckerHeader() {
  const [isVisible, setIsVisible] = useState(true);

  const PincodeSubmitHandler = (event) => {
    event.preventDefault();
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  // if (!isVisible) {
  //   return null; // Render nothing if isVisible is false
  // }

  return (
    <>
      <div className="flex flex-col w-screen md:flex-row md:items-center md:justify-center font-sans bg-purple-200">
        <span className="inline-block ml-2 mt-1 pt-2 text-bold md:text-center md:pt-0 md:mt-0">
          Do we deliver to your location?
        </span>
        <form onSubmit={PincodeSubmitHandler} className="">
          <div className="flex m-2 w-full gap-2">
            <input
              type="text"
              placeholder="Enter your postal code..."
              className="p-2 w-2/3 border outline-none focus:border-purple-500 rounded"
            />
            <button
              type="submit"
              className=" p-2 pt-2 px-4 text-center bg-purple-800 focus:border-2 text-white rounded"
            >
              Go
            </button>
            <span
              className=" p-2 border border-purple-500 text-purple-500 rounded-xl cursor-pointer"
              onClick={handleClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default PinCodeCheckerHeader;
