import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MostLovedData } from "./mock data/data";

function MostLoved() {
  return (
    <div className="w-[470px] md:w-full flex flex-wrap h-full pr-1 pl-2 md:p-4">
      {MostLovedData.map((item) => (
        <Link
          key={item.id}
          to={`/mostLoved-detailpage/${item.id}`}
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
  );
}

export default MostLoved;
