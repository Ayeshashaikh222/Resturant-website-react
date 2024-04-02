import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function MostLoved() {
  const mostLovedData = [
    {
      imageSrc:
        "https://www.ketodelia.ca/cdn/shop/products/cauliflowerbites.jpg?v=1673029354&width=360",
      altText: "Air Fried Keto Buffalo Cauliflower Bites",
      title: "Air Fried Keto Buffalo Cauliflower Bites",
      description:
        "Lightly battered organic cauliflower tossed in homemade buffalo sauce wit...",
      rating: 4,
      ratingCount: 5,
      price: "$12.95",
    },
    {
      imageSrc:
        "https://www.ketodelia.ca/cdn/shop/products/ketochickensoup.jpg?v=1673029356&width=360",
      altText: "Keto Chicken Soup",
      title: "Keto Chicken Soup",
      description:
        "Our Keto Chicken Soup is made with homemade organic farmers chicken and c...",
      rating: 4,
      ratingCount: 1,
      price: "$12.95",
    },
    {
      imageSrc:
        "https://www.ketodelia.ca/cdn/shop/products/NoSugarCheesecake.jpg?v=1673029341&width=360",
      altText: "Keto Cheesecake",
      title: "Keto Cheesecake",
      description:
        "A classic cheesecake, made Keto-friendly. Deliciously rich and creamy wit...",
      rating: 4,
      ratingCount: 9,
      price: "$12.50",
    },
    {
      imageSrc:
        "https://www.ketodelia.ca/cdn/shop/products/KetoBagelsCheddarJalapeno.jpg?v=1679087800&width=360",
      altText: "Keto Bagel Cheddar jalapeno - 4 pack",
      title: "Keto Bagel Cheddar Jalapeno - 4 pack",
      description:
        "Our cheddar jalapeno bagels are made of almond flour, mozzarella and crea... .",
      rating: 4,
      ratingCount: 3,
      price: "$23.95",
    },
  ];

  return (
    <div className="w-[470px] md:w-full flex flex-wrap h-full pr-1 pl-2 md:p-4">
      {mostLovedData.map((item, index) => (
        <Link
          key={index}
          to={`/mostLoved-detailpage/${index}`}
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
