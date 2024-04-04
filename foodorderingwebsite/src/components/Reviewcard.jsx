import React from "react";
import { ReviewCard_data } from "./mock data/data";

function Reviewcard() {
  return (
    <div className="flex w-full mt-10 flex-wrap">
      {ReviewCard_data.map((item, index) => {
        // Splitting the username into words, extracting first letters, and joining them
        const initials = item.username
          .split(" ")
          .map((word) => word.charAt(0))
          .join("");

        return (
          <div
            key={index}
            className="w-[225px] md:w-[357px] mt-2 ml-2 mb-4 md:mb-0 mr-2 bg-purple-200 border border-black rounded-lg"
          >
            <div className="relative w-[225px] md:w-full h-41 md:h-64">
              <img
                src={item.imageSrc}
                className="w-full h-[200px] md:h-[260px] object-cover rounded-t-lg"
              />
              {/* Displaying initials inside the absolute div */}
              <div className="realative w-[45px] h-[45px] md:w-[48px] md:h-[48px] absolute top-[11rem] md:top-[15rem] left-20 md:left-[9rem] right-24 bg-gray-300 rounded-3xl flex items-center justify-center">
                <span className="text-xl font-semibold">{initials}</span>
                <div className="absolute top-7 left-10 bg-gray-600 rounded-lg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full h-full text-center">
              <h6 className="text-sm font-semibold md:font-bold mt-8 text-center md:mt-10">
                {item.username}
              </h6>
              <span className="text-[12px] text-center">{item.date}</span>
              <p className="mb-2 mt-6 text-sm md:text-md text-center text-gray-700">
                {item.message}
              </p>
              <div className="flex mb-5 items-center justify-center">
                {[...Array(item.ratingCount)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="gray"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-star"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Reviewcard;
