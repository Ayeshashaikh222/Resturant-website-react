import React from "react";

function KetodeliaBistroandBakeryCardInfo() {
  return (
    <div className="w-full h-full mt-20">
      <div className="w-11/12 md:w-9/12  flex flex-col md:flex-row mx-auto  border border-red-700">
        <div className="md:w-1/2 h-full border border-black"></div>
        <div className="w-full h-3/5 md:w-1/2 border-b-2 border-l-2 border-r-2 border-black rounded-b-lg">
          <div className="h-full p-7 flex flex-col  md:justify-center border border-red-600">
            <h2 className="text-2xl md:text-4xl font-semibold mb-6">
              Ketodelia Bistro & Bakery
            </h2>
            <p>
              2743 Dundas St. W (Junction) Toronto, Ontario M6P 1Y1 (416)
              623-0317
            </p>
            <div className="mb-4 md:text-lg">
              <p>Monday 10:30 a.m. - 8:30 p.m.</p>
              <p>Tuesday 10:30 a.m. - 8:30 p.m.</p>
              <p>Wednesday 10:30 a.m. - 8:30 p.m.</p>
              <p>Thursday 10:30 a.m. - 8:30 p.m.</p>
              <p>Friday 10:30 a.m. - 8:30 p.m.</p>
              <p> Saturday 11:00 a.m. - 9:00 p.m.</p>
              <p>Sunday closed</p>
            </div>
            <p className="underline mb-4">View Menu</p>
            <button className="w-2/6 rounded-3xl bg-purple-400 p-2">
              Get Dirictions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KetodeliaBistroandBakeryCardInfo;
