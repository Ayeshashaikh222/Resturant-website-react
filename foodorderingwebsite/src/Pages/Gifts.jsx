import React, { useState } from "react";
import { MostLovedDetailData } from "../components/mock data/data";
import { Link } from "react-router-dom";

function Gifts() {
  const [Addimage, setAddimage] = useState(
    "https://www.ketodelia.ca/cdn/shop/products/9RH9aAXDbuwgKAweNR1AVCoRShvRrZjB.png?v=1669955876&width=600"
  );

  return (
    <>
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
          <div className="flex flex-col w-[11/12] md:w-1/2">
            <div>
              <img src={Addimage} className="w-full rounded-xl" />
            </div>
            <div className="flex w-[400px] mt-6">
              <div className="w-[120px] h-[100px] mx-1 border-2 border-black rounded-lg overflow-hidden">
                <img
                  src="https://www.ketodelia.ca/cdn/shop/products/9RH9aAXDbuwgKAweNR1AVCoRShvRrZjB.png?v=1669955876&width=600"
                  onClick={() => {
                    setAddimage(
                      "https://www.ketodelia.ca/cdn/shop/products/9RH9aAXDbuwgKAweNR1AVCoRShvRrZjB.png?v=1669955876&width=600"
                    );
                  }}
                  className="mt-2"
                />
              </div>
              <div className="w-[120px] h-[100px] mx-1 border-2 border-black rounded-lg overflow-hidden">
                <img
                  src="https://www.ketodelia.ca/cdn/shop/products/FNS5yaf5gQisaC1IxaYMDzlUvWnARrt9.png?v=1669955901&width=600"
                  onClick={() => {
                    setAddimage(
                      "https://www.ketodelia.ca/cdn/shop/products/FNS5yaf5gQisaC1IxaYMDzlUvWnARrt9.png?v=1669955901&width=600"
                    );
                  }}
                  className="mt-2"
                />
              </div>
              <div className="w-[120px] h-[100px] mx-1 border-2 border-black rounded-lg overflow-hidden">
                <img
                  src="https://www.ketodelia.ca/cdn/shop/products/XAz3gEo3YXdaTrDuAjCpVVxErYDiaY7n.png?v=1669955911&width=600"
                  onClick={() => {
                    setAddimage(
                      "https://www.ketodelia.ca/cdn/shop/products/XAz3gEo3YXdaTrDuAjCpVVxErYDiaY7n.png?v=1669955911&width=600"
                    );
                  }}
                  className="mt-2"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:pt-0 md:pl-12 md:ml-2">
            <h6 className="text-[12px] text-gray-600 mb-1 tracking-wider">
              KETODELIA RESTAURANT
            </h6>
            <h2 className="text-3xl mb-4">Ketodelia Restaurant Gift Card</h2>
            <span className="text-lg">$30.00</span>

            <p className="mt-6">Denominations</p>
            <div className="mb-4">
              <button className="px-6 py-2  m-1 md:m-2 hover:text-white border border-black hover:bg-purple-700 rounded-3xl">
                CA$30.00
              </button>
              <button className="px-5 py-2 m-2 hover:text-white border border-black hover:bg-purple-700 rounded-3xl">
                CA$50.00
              </button>
              <button className="px-5 py-2 m-2 hover:text-white border border-black hover:bg-purple-700 rounded-3xl">
                CA$75.00
              </button>
              <button className="px-5 py-2 m-2  hover:text-white border border-black hover:bg-purple-700 rounded-3xl">
                CA$100.00
              </button>
              <button className="px-5 py-2   hover:text-white border border-black hover:bg-purple-700 rounded-3xl">
                CA$150.00
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

            <div className="mb-10">
              <p className="text-lg mb-4">
                Introducing our versatile Gift Cards, the perfect gift for any
                food lover in your life. Our Gift Cards can be used towards any
                menu items at Ketodelia, making it a great gift for birthdays,
                holidays, or any special occasion.
              </p>
              <p className="text-lg mb-4">
                Our Gift Cards are available in various denominations, so you
                can choose the amount that best suits your budget. They can also
                be used for take-out or delivery, giving the recipient the
                flexibility to enjoy our delicious Keto-friendly food at their
                convenience.
              </p>
              <p className="text-lg mb-4">
                Our menu features a wide variety of Keto-friendly options, such
                as low-carb, high-fat dishes, perfect for those following the
                ketogenic diet. We have something for everyone, from savory
                breakfast options to mouthwatering entrees and desserts, all
                made with the freshest, high-quality ingredients.
              </p>
              <p className="text-lg mb-4">
                Give the gift of delicious, healthy food with our Gift Cards.
                They are a thoughtful and convenient way to show someone you
                care. Purchase yours today and share the taste of Keto-friendly
                food with your loved ones.
              </p>
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
                fill="none"
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
                fill="none"
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
                fill="none"
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
                fill="none"
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
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-star border border-none"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
          </div>

          <div className="flex">
            <div className="hidden md:block p-2 border border-gray-300">
              Wrire a review
            </div>
          </div>
        </div>
        <div className="mt-6 mb-10">
          <p>
            Be the first to <span className="underline">write a review</span>
          </p>
        </div>
        <div className="flex md:hidden p-2 items-center justify-center border border-gray-200 hover:bg-gray-200">
          Wrire a review
        </div>
      </div>
    </>
  );
}

export default Gifts;
