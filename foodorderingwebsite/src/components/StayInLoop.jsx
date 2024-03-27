import React from "react";

function StayInLoop() {
  return (
    <div className="bg-purple-200 p-4 py-20 mt-20 flex flex-col items-center justify-center border-2 border-b-black border-t-black">
      <div className="">
        <h2 className="text-4xl text-center font-bold mb-6">
          Stay in the Loop
        </h2>
        <p className="mb-6 md:text-lg">
          Be the first to know about new collections and exclusive offers.
        </p>
        <div className="w-[300px] p-2 mx-auto flex justify-between border-2 border-black rounded-lg">
          <input className="bg-purple-200" placeholder="Email" />
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
            class="lucide lucide-move-right"
          >
            <path d="M18 8L22 12L18 16" />
            <path d="M2 12H22" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default StayInLoop;
