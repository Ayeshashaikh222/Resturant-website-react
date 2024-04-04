import React from "react";
import KetoItemCard from "./KetoItemCard";
import { BrowseByCategoryData } from "./mock data/data";

function BrowseByCategory() {
  return (
    <div className="w-full flex pr-0 pl-4 md:p-4 flex-wrap">
      {BrowseByCategoryData.map((item, index) => (
        <div key={index} className="w-[218px] md:w-[279px] mb-4 md:mb-0 mr-3">
          <div className="w-full h-58 md:h-64">
            <img
              src={item.imagesSrc}
              alt={item.title}
              className="w-full h-[235px] md:h-full object-cover border-2 border-black rounded-lg mb-0 md:mb-1"
              style={{ borderBottom: "5px solid black" }}
            />
          </div>
          <div className="flex mt-1 md:mt-3">
            <span className="font-semibold text-lg">{item.title}</span>
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
              className="lucide lucide-move-right ml-2 mt-2"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BrowseByCategory;
