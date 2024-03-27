import React from "react";
import KetoItemCard from "./KetoItemCard";

function BrowseByCategory() {
  const ketoData = [
    {
      imagesSrc:
        "https://www.ketodelia.ca/cdn/shop/products/AlmondFlourWaffles.jpg?v=1673029390&width=535",
      title: "All Day Keto Breakfast",
    },
    {
      imagesSrc:
        "https://www.ketodelia.ca/cdn/shop/products/CreamyMushroomFettuccineAlfredo.jpg?v=1673029366&width=535",
      title: "keto Pastas",
    },
    {
      imagesSrc:
        "https://www.ketodelia.ca/cdn/shop/products/ketogardenveggiepizza.jpg?v=1673293248&width=535",
      title: "keto Pizzas",
    },
    {
      imagesSrc:
        "https://www.ketodelia.ca/cdn/shop/products/KetoChickenTenders.jpg?v=1673029425&width=535",
      title: "keto Mains",
    },
  ];

  return (
    <div className="w-full flex h-full p-4 ">
      {ketoData.map((item, index) => (
        <div key={index} className="w-full mr-3 border border-red-600">
          <div className="w-full h-64">
            <img
              src={item.imagesSrc}
              alt={item.title}
              className="w-full h-full object-cover border-2 border-black rounded-lg mb-1"
            />
          </div>
          <div className="flex mt-3">
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
