import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom/dist";
import {
  MostLovedData,
  MostLovedDetailData,
  review_data,
} from "./mock data/data";

function MostLovedDetailPage() {
  const { itemId } = useParams();

  const filteredData = MostLovedData.find((item) => item.id == itemId);
  console.log(filteredData);

  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="w-[455px] md:w-10/12  ml-4 flex flex-col md:items-center md:justify-center md:mx-auto">
      <div className="w-full flex flex-row mb-4 md:ml-12 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-arrow-left md:ml-20"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
        <span className="ml-1">Back to Menu</span>
      </div>
      <div className="w-full md:w-10/12 h-full flex flex-col md:flex-row">
        <div className="w-[11/12] md:w-1/2">
          <img src={filteredData.imageSrc} className="w-full rounded-xl" />
        </div>
        <div className="w-full md:w-1/2 mt-4 md:pt-0 md:pl-12 md:ml-2">
          <h6 className="text-[12px] text-gray-600 mb-1 tracking-wider">
            KETODELIA RESTAURANT
          </h6>
          <h2 className="text-3xl mb-4">{filteredData.title}</h2>
          <span className="text-lg">{filteredData.price}</span>
          <div className="flex mb-2">
            {/* {[...Array(item.rating)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
            ))} */}
            {/* <span className="ml-2">({item.ratingCount})</span> */}
          </div>
          <p className="mb-4">Choose your sauce</p>
          <div className="mb-4">
            <button className="px-6 py-2  m-1 md:m-2 hover:text-white border border-black hover:bg-purple-700 rounded-3xl">
              Ranch
            </button>
            <button className="px-5 py-2 m-2 hover:text-white border border-black hover:bg-purple-700 rounded-3xl">
              Marinara
            </button>
            <button className="px-5 py-2 m-2 hover:text-white border border-black hover:bg-purple-700 rounded-3xl">
              Texas BBQ
            </button>
            <button className="px-5 py-2 m-2  hover:text-white border border-black hover:bg-purple-700 rounded-3xl">
              caesar
            </button>
            <button className="px-5 py-2   hover:text-white border border-black hover:bg-purple-700 rounded-3xl">
              Blue Cheese
            </button>
            <button className="px-5 py-2 m-2  hover:text-white border border-black hover:bg-purple-700 rounded-3xl">
              No sauce
            </button>
          </div>
          <div className="flex flex-col mb-6 ">
            <span className="mb-2">Quantity</span>
            <div
              className="w-[160px] p-3 flex justify-between border-2 border-black rounded-3xl  "
              style={{ borderBottom: "5px solid black" }}
            >
              <button className=" text-xl ">-</button>
              <span className="text-lg">1</span>
              <button className="text-xl">+</button>
            </div>
          </div>
          <div className="w-full mb-8">
            <button className="w-full  px-2 py-3 text-white bg-purple-600 rounded-3xl">
              Add to Order
            </button>
          </div>
          <div className="mb-4">
            <p className="">{filteredData.description}</p>
          </div>
          <div className="border border-b-black">
            <div className=" flex justify-between p-4 ">
              <div className="flex">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-apple text-gray-600"
                  >
                    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                    <path d="M10 2c1 .5 2 2 2 5" />
                  </svg>
                </span>
                <button className="font-semibold">Ingredients</button>
              </div>
              <span
                className="cursor-pointer "
                onClick={toggleContentVisibility}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className={`lucide lucide-chevron-down text-gray-600`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </div>
            {isContentVisible && (
              <p className="flex flex-col ml-4">
                <span className="mb-1">{filteredData.items[0]}</span>
                <span className="mb-1">{filteredData.items[1]}</span>
                <span className="mb-1">{filteredData.items[2]}</span>
                <span className="mb-1">{filteredData.items[3]}</span>
                <span className="mb-1 ">{filteredData.items[4]}</span>
              </p>
            )}
          </div>

          <div className="flex justify-between p-4 border border-b-black">
            <div className="flex">
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-heart text-gray-600 "
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </span>
              <button className="font-semibold">Nutritional info</button>
            </div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chevron-down text-gray-600"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>
          </div>
          <div className="flex p-4 mb-8">
            <div className="flex">
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-download text-gray-600"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
              </span>
              <button className="text-sm">Share</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold ml-3 mb-6 md:mb-2">
          You may also like
        </h2>
        <div className="w-[470px] md:w-full flex flex-wrap h-full pr-1 pl-2 md:p-4">
          {MostLovedDetailData.map((item, index) => (
            <Link
              key={index}
              className="w-[216px] md:w-[279px] h-54 mb-4 md:mb-0 mr-3 "
            >
              <div className="w-[200px] md:w-full h-41 md:h-64 ml-2 md:ml-0">
                <img
                  src={item.imageSrc}
                  alt={item.altText}
                  className=" w-full h-[200px] md:h-[260px] object-cover  border-2 border-black rounded-lg mb-1"
                  style={{ borderBottom: "5px solid black" }}
                />
              </div>
              <div className=" w-full h-full ml-2 ">
                <h6 className="text-sm font-semibold md:font-bold mb-3 mt-2 md:mt-3">
                  {item.title}
                </h6>
                <p className="mb-2 text-sm md:text-md text-gray-700">
                  {item.description}
                </p>
                <div className="flex mb-2">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
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
                  <span className="ml-2">({item.ratingCount})</span>
                </div>
                <div className="mb-1">
                  <span className="text-[18px]">{item.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="md:w-10/12 mb-4 md:mb-0 flex justify-between">
        <div className="flex">
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="gray"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-star border border-none"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <div className="flex ml-2 items-center justify-center">
            <span className="text-lg mr-1 text-gray-800">5 Reviews</span>
            <span className="mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chevron-down "
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>
          </div>
        </div>

        <div className="flex">
          <div className="hidden md:block p-2 border border-gray-50">
            Wrire a review
          </div>
          <span className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex md:hidden p-2 items-center justify-center border border-gray-200 hover:bg-gray-200">
        Wrire a review
      </div>

      <div className="w-full h-[850px] md:h-[600px] mt-2 md:mt-10 ">
        <div className="flex w-full h-[400px] md:ml-12 md:pl-10 mt-10 flex-wrap ">
          {review_data.map((item, index) => (
            <div
              key={index}
              className="w-[200px] p-2 md:p-4 md:w-[357px] mt-2 ml-2 mb-4 md:mb-0 mr-1 bg-purple-50 rounded-lg  shadow-lg"
            >
              <div className="w-full ">
                <h6 className="text-sm font-semibold md:font-bold mt-2 md:mt-4">
                  {item.username}
                </h6>
                <span className="text-[12px]">{item.date}</span>
                <div className="flex mb-5">
                  {[...Array(item.ratingCount)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                <p className="mb-2 mt-2 md:mt-4 text-sm md:text-md text-gray-700">
                  {item.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MostLovedDetailPage;
