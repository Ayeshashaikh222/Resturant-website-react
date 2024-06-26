import React from "react";
import { Link } from "react-router-dom";
import MostLoved from "../components/MostLoved";
import BrowseByCategory from "../components/BrowseByCategory";
import OtherContainer from "../components/OtherContainer";
import Footer from "../Layout/Footer";
import SubFooter from "../Layout/SubFooter";
import Reviewcard from "../components/Reviewcard";

function Home() {
  return (
    <div className="w-full">
      <div className="bg-gray-100 w-screen h-84  mb-10">
        <div className="h-[355px] md:h-[550px] relative">
          <img
            src="	https://www.ketodelia.ca/cdn/shop/files/Keto_Burger_-_shifted.png?v=1664321824&width=2000"
            alt=""
            className="object-cover h-42 md:h-full w-full"
          />

          <div className="md:w-2/5 absolute p-4 md:pl-40 top-20 left-10 md:left-20 md:top-40 md:p-4 flex flex-col">
            <h2 className=" text-3xl md:text-4xl font-semibold mb-2 text-purple-800">
              LESS CARBS, MORE DELICIOUS...
            </h2>
            <div className="mb-4">
              <span>KETO FRIENDLY . LOW CARB . 100% GLUTEN FREE</span>
            </div>
            <div className="mb-2 mt-4 ml-24 md:ml-0">
              <Link className="bg-purple-500 p-3 px-8 rounded-3xl text-white">
                Order Online
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-4/5 md:p-2 flex flex-col md:mx-auto ">
        <div className="w-full flex flex-col">
          <h1 className="text-3xl md:text-5xl mb-2 p-4 font-semibold">
            Most loved
          </h1>
        </div>

        <div className="flex flex-col w-full h-full ">
          <MostLoved />
        </div>
      </div>

      <div className=" w-full md:w-9/12 h-full md:h-[600px] md:p-2 flex flex-col md:mx-auto mb-10 ">
        <Reviewcard />
        <div className="flex items-center justify-center md:justify-between mt-5 md:mt-[60px]">
          <button className="hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-left"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button className="text-md border border-black px-2">
            Show more reviews
          </button>
          <button className="hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="bg-purple-100 pt-6 pb-10">
        <div className="w-full md:w-4/5 md:p-2 flex flex-col md:mx-auto bg-purple-100">
          <div className="w-full flex flex-col">
            <h1 className="text-3xl md:text-5xl mb-2 p-4 font-semibold">
              Browse by Category
            </h1>
          </div>

          <div className="w-full h-full">
            <BrowseByCategory />
          </div>
        </div>
      </div>

      <div>
        <OtherContainer />
      </div>
    </div>
  );
}

export default Home;
