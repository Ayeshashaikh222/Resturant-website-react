import React from "react";
import { KetoItemCardData } from "./mock data/data";

function KetoItemCard() {
  return (
    <div className="flex w-full">
      {KetoItemCardData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col w-full mr-2 border border-red-600"
        >
          <div className="w-full h-64">
            <img
              src={item.imagesSrc}
              alt={item.title}
              className="w-full h-full object-cover  border-2 border-black rounded-lg mb-1"
            />
          </div>
          <div className="flex">
            <span className="">{item.title}</span>
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
              className="lucide lucide-move-right ml-1 mt-1  "
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

export default KetoItemCard;
