import React from "react";

function Middlecard() {
  return (
    <div className="w-full h-full mt-14">
      <div className="w-11/12 h-[600px] md:h-[370px] md:w-9/12 flex flex-col md:flex-row mx-auto ">
        <div className="md:w-1/2 h-96">
          <img
            src="https://www.ketodelia.ca/cdn/shop/files/Keto_Red_Velvet_Cake_1662917780.png?v=1668492270&width=750"
            alt="keto red velvet cake"
            className="w-full h-full object-cover border-2 border-black rounded-xl rounded-b-none border-b-none"
          />
        </div>
        <div className="w-full h-96 md:w-1/2 border-b-2 border-l-2 border-r-2 border-black rounded-b-lg">
          <div className="h-full p-7 flex flex-col  md:justify-center border border-red-600">
            <p className="mb-1">From our bakery</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Keto Red Velvet Cake 8”
            </h2>
            <p className="mb-8">
              Sugar-free low carb red velvet cake is naturally colored and
              sugar-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middlecard;
