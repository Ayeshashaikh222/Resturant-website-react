import React from "react";

function LogoCard() {
  return (
    <div className="w-11/12 md:w-11/12 h-68 mt-20 ml-4 flex md:items-center md:justify-center md:mx-auto">
      <div className="w-1/2 md:w-5/12 border-2 border-black rounded-2xl mr-3">
        <img
          src="https://www.ketodelia.ca/cdn/shop/files/restaurant_guru_2023.png?v=1690308321&width=710"
          className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] p-4 md:p-8 mx-auto object-cover"
        />
      </div>
      <div className="w-1/2 md:w-5/12 border-2 border-black rounded-2xl">
        <img
          src="https://www.ketodelia.ca/cdn/shop/files/Toronto-Ketodelia-Restaurant-Keto-Low-Carb-Cuisine-in-Toronto-removebg-preview_2.png?v=1668149195&width=710"
          className="w-[120px] h-[120px] p-6 md:w-[200px] md:h-[200px] md:p-12 mx-auto object-cover"
        />
      </div>
    </div>
  );
}

export default LogoCard;
