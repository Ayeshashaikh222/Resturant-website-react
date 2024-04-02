import React from "react";

function Middlecard() {
  return (
    <div className="w-full h-full mt-14">
      <div
        className="w-11/12 h-[600px] md:h-[400px] md:w-[1140px] flex flex-col md:flex-row-reverse mx-auto border-2 border-black rounded-lg"
        style={{ borderBottom: "5px solid black" }}
      >
        <div className="md:w-1/2 h-[392px] overflow-hidden  border-2 md:border-l-black">
          <img
            src="https://www.ketodelia.ca/cdn/shop/files/Keto_Red_Velvet_Cake_1662917780.png?v=1668492270&width=750"
            alt="keto red velvet cake"
            className="w-full h-full object-center  "
          />
        </div>
        <div className="w-full h-[300px] md:h-[400px] md:w-1/2 border-2 border-t-black md:border-none">
          <div className="w-[400px] h-full p-7 flex flex-col md:justify-center mx-auto mt-8 md:mt-0 ">
            <p className="mb-1 text-lg">From our bakery</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Keto Red Velvet Cake 8”
            </h2>
            <p className="mb-8 text-lg">
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
