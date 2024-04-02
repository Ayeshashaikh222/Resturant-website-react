import React from "react";

function KetodeliaTakeoutcardInfo() {
  return (
    <div className="w-full h-full">
      <div
        className="w-11/12 md:w-9/12 h-full mt-20 flex flex-col md:flex-row mx-auto border-2 border-black rounded-lg overflow-hidden "
        style={{ borderBottom: "5px solid black" }}
      >
        <div className="md:w-1/2 h-[230px] md:h-full overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14017.095921757842!2d77.280143!3d28.5615344!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce351945f45eb%3A0xf96252dd41babf89!2sJamia%20Millia%20Islamia!5e0!3m2!1sen!2sin!4v1711788605158!5m2!1sen!2sin"
            width="566"
            height="500"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full h-3/5 md:w-1/2 border-2 md:border-l-black border-t-black md:md:border-t-none">
          <div className="h-full ml-4 p-7 flex flex-col md:justify-center">
            <h2 className="text-2xl md:text-3xl text-purple-900 font-semibold mb-6">
              Ketodelia Takeout Restaurant & Bakery
            </h2>
            <p>
              3187 Yonge St. (Yonge and Lawrence) Toronto, Ontario M4N2K9 (416)
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
            <button className="w-[180px] md:w-2/6 rounded-3xl mb-4 bg-purple-500 p-3 text-white border-2 border-b-purple-800">
              Get Dirictions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KetodeliaTakeoutcardInfo;
