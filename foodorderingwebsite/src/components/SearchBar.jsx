import React from "react";

function SearchBar() {
  return (
    <>
      <div className=" flex flex-col pt-4 w-screen md:flex-row md:items-center md:justify-center font-sans">
        <div className=" flex w-11/12 p-4 md:items-center md:justify-center">
          <span className="inline-block ml-2 mt-1 pt-2 text-bold md:text-center md:pt-0 md:mt-0">
            Search
          </span>
          <form className="w-2/6">
            <div className="flex m-2 w-full gap-2">
              <input
                type="text"
                className="p-2 w-full border outline-none focus:border-purple-500 rounded"
              />
              <button
                type="submit"
                className=" p-2 pt-2 px-4 text-center bg-purple-800 focus:border-2 text-white rounded"
              >
                Go
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
