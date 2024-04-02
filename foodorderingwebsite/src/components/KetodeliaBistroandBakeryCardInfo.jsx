import React from "react";

function KetodeliaBistroandBakeryCardInfo() {
  return (
    <div className="w-full h-full mt-20">
      <div
        className="w-11/12 md:w-9/12 flex flex-col md:flex-row mx-auto border-2 border-black rounded-lg overflow-hidden"
        style={{ borderBottom: "5px solid black" }}
      >
        <div className="md:w-1/2 h-[230px] md:h-full overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15542.882638301186!2d77.6346118!3d13.1168745!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae191736187a37%3A0x3092096ba7fb4c9b!2sREVA%20UNIVERSITY!5e0!3m2!1sen!2sin!4v1711788210608!5m2!1sen!2sin"
            width="566"
            height="440"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className=""
          ></iframe>
        </div>
        <div className="w-full h-3/5 md:w-1/2 border-2 md:border-l-black border-t-black md:border-t-none">
          <div className="h-full ml-4 p-7 flex flex-col  md:justify-center">
            <h2 className="text-2xl md:text-3xl text-purple-900 font-semibold mb-6">
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
            <button className="w-[180px] md:w-2/6 rounded-3xl bg-purple-500 p-3 text-white border-2 border-b-purple-800">
              Get Dirictions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KetodeliaBistroandBakeryCardInfo;
