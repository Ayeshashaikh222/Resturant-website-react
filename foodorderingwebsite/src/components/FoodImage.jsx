import React from "react";

function FoodImage() {
  return (
    <div className="w-full h-full">
      <div className="relative flex flex-col w-full h-68 border mt-10 border-red-600">
        <img
          src="https://www.ketodelia.ca/cdn/shop/files/Ketodelia_Takeout_Restaurant.jpg?v=1696295373&width=550"
          className="realtive w-full h-[700px]"
        />
        <div className=" w-[400px] md:w-[600px] h-24 flex flex-col items-center justify-center mx-auto absolute top-[20rem] left-20 right-24 text-center font-bold text-2xl md:text-4xl p-2  border-2 border-black rounded-lg  bg-white">
          Our Locations & Hours
        </div>
      </div>
    </div>
  );
}

export default FoodImage;
