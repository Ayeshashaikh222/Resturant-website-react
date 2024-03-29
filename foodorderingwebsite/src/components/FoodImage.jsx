import React from "react";

function FoodImage() {
  return (
    <div className="w-full h-full">
      <div className="relative flex flex-col w-full h-58 border mt-10 border-red-600">
        <img
          src="https://www.ketodelia.ca/cdn/shop/files/Ketodelia_Takeout_Restaurant.jpg?v=1696295373&width=550"
          className="w-full object-cover h-[550px]"
        />
        <div className="hidden md:flex w-[400px] md:w-[500px] h-24 flex-col items-center justify-center mx-auto absolute top-[14rem] left-20 right-24 text-center font-bold text-2xl md:text-4xl p-2  border-2 border-black rounded-lg  bg-white">
          Our Locations & Hours
        </div>
      </div>
      <div className="md:hidden w-[500px] md:w-[600px] h-24 flex flex-col items-center justify-center text-center font-bold text-2xl md:text-4xl p-2 border-2 border-t-black border-b-black  bg-white">
        Our Locations & Hours
      </div>
    </div>
  );
}

export default FoodImage;
