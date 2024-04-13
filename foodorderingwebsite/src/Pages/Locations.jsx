import React from "react";

function Locations() {
  return (
    <>
      <div
        className=" border-b border-black"
        style={{ borderBottom: "5px solid black" }}
      >
        <div className="w-6/12 mx-auto text-center mt-14 pt-10">
          <h2 className="text-5xl mb-10 font-bold text-purple-900">
            Our Locations
          </h2>
          <p className="md:text-lg mb-4">
            We're excited to offer keto-friendly takeout and delivery at two
            Toronto locations: Ketodelia Takeout Restaurant at 3187 Yonge Street
            and Ketodelia Bistro & Bakery at 2743 Dundas St. W (Junction).
          </p>
          <p className="md:text-lg mb-14">
            Each spot features its own unique keto menu, crafted with the finest
            local ingredients. For menus, hours, and more, check out the
            information for each location below.
          </p>
        </div>
      </div>

      <div className="w-full h-[600px]">
        <div
          className="w-11/12 md:w-9/12 h-full mt-14 flex flex-col md:flex-row mx-auto border-2 border-black rounded-lg overflow-hidden "
          style={{ borderBottom: "5px solid black" }}
        >
          <div className="md:w-1/2 h-[230px] md:h-full overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14017.095921757842!2d77.280143!3d28.5615344!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce351945f45eb%3A0xf96252dd41babf89!2sJamia%20Millia%20Islamia!5e0!3m2!1sen!2sin!4v1711788605158!5m2!1sen!2sin"
              width="566"
              height="590"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full h-full md:w-1/2 border-2 md:border-l-black border-t-black md:md:border-t-none">
            <div className="h-full ml-4 p-7 flex flex-col md:justify-center">
              <h2 className="text-2xl md:text-3xl text-purple-900 font-semibold mb-6">
                Ketodelia Takeout Restaurant & Bakery
              </h2>
              <p className=" font-bold mb-2">3187 Yonge St.</p>
              <p className=" font-bold mb-2">(Yonge and Lawrence)</p>
              <p className=" font-bold mb-2"> TORONTO, Ontario M4N2K9</p>
              <p className=" font-bold mb-4">(416) 623-0317</p>
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

      <div className="w-full h-full mt-20 mb-12">
        <div
          className="w-11/12 md:w-9/12 flex flex-col md:flex-row mx-auto border-2 border-black rounded-lg overflow-hidden"
          style={{ borderBottom: "5px solid black" }}
        >
          <div className="md:w-1/2 h-[230px] md:h-full overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15542.882638301186!2d77.6346118!3d13.1168745!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae191736187a37%3A0x3092096ba7fb4c9b!2sREVA%20UNIVERSITY!5e0!3m2!1sen!2sin!4v1711788210608!5m2!1sen!2sin"
              width="566"
              height="590"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className=""
            ></iframe>
          </div>
          <div className="w-full h-full md:w-1/2 border-2 md:border-l-black border-t-black md:border-t-none">
            <div className="h-[600px] ml-4 p-7 flex flex-col  md:justify-center ">
              <h2 className="text-2xl md:text-3xl text-purple-900 font-semibold mb-6">
                Ketodelia Bistro & Bakery
              </h2>
              <p className=" font-bold mb-2">3187 Yonge St.</p>
              <p className=" font-bold mb-2">(Yonge and Lawrence)</p>
              <p className=" font-bold mb-2"> TORONTO, Ontario M4N2K9</p>
              <p className=" font-bold mb-4">(416) 623-0317</p>
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
    </>
  );
}

export default Locations;
