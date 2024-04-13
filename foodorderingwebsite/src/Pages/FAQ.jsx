import React from "react";

function FAQ() {
  const FAQData = [
    {
      id: "f1",
      text: "How far do you deliver, how quickly, and how much will it cost?",
    },
    {
      id: "f2",
      text: "Do your services include pick-up, walk-in, and dine-in options?",
    },
    {
      id: "f3",
      text: "When can I expect my pickup order to be ready?",
    },
    {
      id: "f4",
      text: "Is your food keto-friendly or is it truly keto?",
    },
    {
      id: "f5",
      text: "What sweeteners, oils, and/or other ingredients are used in your dishes?",
    },
    {
      id: "f6",
      text: "Where are you located?",
    },
  ];

  return (
    <>
      <div
        className="flex w-full h-full bg-gray-100 border-b border-black"
        style={{ borderBottom: "5px solid black" }}
      >
        <div className="w-full p-2 md:w-8/12 flex flex-col md:mx-auto">
          <h2 className="text-purple-900 p-6 md:mt-2 font-bold text-3xl md:text-5xl md:text-center">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 mb-8">
            {FAQData.map((item) => (
              <div className="w-full">
                <div className="w-full flex justify-between p-3 border-b border-gray-300 hover:bg-gray-300">
                  <div className="flex ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-square-check mr-3"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <p className="font-semibold"> {item.text}</p>
                  </div>
                  <div>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-chevron-down"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-100 mb-10 h-[880px] md:h-[700px] pt-6">
        <div className="w-full h-[950px] md:h-full pt-8">
          <div
            className="w-11/12 md:w-9/12 h-[800px] md:h-[630px] flex flex-col md:flex-row mx-auto border-2 border-black rounded-lg overflow-hidden"
            style={{ borderBottom: "5px solid black" }}
          >
            <div className="md:w-1/2 h-[280px] md:h-full overflow-hidden ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15542.882638301186!2d77.6346118!3d13.1168745!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae191736187a37%3A0x3092096ba7fb4c9b!2sREVA%20UNIVERSITY!5e0!3m2!1sen!2sin!4v1711788210608!5m2!1sen!2sin"
                width="566"
                height="630"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className=""
              ></iframe>
            </div>
            <div className="w-full h-[770px] md:w-1/2 border-2 md:border-l-black border-t-black md:border-t-none">
              <div className=" ml-4 p-12 flex flex-col  md:justify-center ">
                <h2 className=" text-3xl md:text-5xl text-purple-900 font-semibold mb-6">
                  Location & Hours
                </h2>
                <p className="md:text-lg font-bold mb-2">Ketodelia</p>
                <p className="md:text-lg font-bold mb-2">3187 Yonge St.</p>
                <p className="md:text-lg font-bold mb-2">
                  {" "}
                  TORONTO, Ontario M4N2K9
                </p>
                <p className="md:text-lg font-bold mb-2">(416) 623-0317</p>
                <span className="md:text-lg font-bold mb-4">
                  ketodeliatoronto@gmail.com
                </span>
                <div className="mb-6 md:text-lg">
                  <p>Monday 10:30 a.m. - 8:30 p.m.</p>
                  <p>Tuesday 10:30 a.m. - 8:30 p.m.</p>
                  <p>Wednesday 10:30 a.m. - 8:30 p.m.</p>
                  <p>Thursday 10:30 a.m. - 8:30 p.m.</p>
                  <p>Friday 10:30 a.m. - 8:30 p.m.</p>
                  <p> Saturday 11:00 a.m. - 9:00 p.m.</p>
                  <p>Sunday closed</p>
                </div>

                <button className="w-[180px] md:w-2/6 rounded-3xl bg-purple-500 p-3 text-white border-2 border-b-purple-800">
                  Get Dirictions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
