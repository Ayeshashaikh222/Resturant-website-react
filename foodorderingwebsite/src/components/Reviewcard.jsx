import React from "react";

function Reviewcard() {
  const review_data = [
    {
      id: 1,
      username: "Henriette G.",
      date: "4/21/2023",
      message: "Great we user it for my birthday cake. Delicious cake.",
      rating: 5,
    },
    {
      id: 2,
      username: "Mani S.",
      date: "4/27/2023",
      message: "Best keto Pizza in the city.",
      rating: 5,
    },
    {
      id: 3,
      username: "Natalia B.",
      date: "4/26/2023",
      message:
        "Ordered the tiramisu cupcakes for the first time for a work event and they were a hit! So tasty, fluffy and soft, definitely will order again! Thank you 😊",
      rating: 5,
    },
  ];

  return (
    <div className=" flex w-full h-full border border-red-700">
      {review_data.map((item, index) => (
        <div
          key={index}
          className="w-[280px] mt-2 ml-2 h-72 mb-4 md:mb-0 mr-3 p-2 bg-gray-300"
        >
          {/* <div className="w-[200px] md:w-full h-41 md:h-64">
            <img
              src={item.imageSrc}
              className=" w-full h-[200px] md:h-[260px] object-cover"
            />
          </div> */}
          <div className=" w-full h-full">
            <h6 className="text-sm font-semibold md:font-bold mb-3 mt-2 md:mt-3">
              {item.username}
            </h6>
            <p className="mb-2 text-sm md:text-md text-gray-700">
              {item.message}
            </p>
            <div className="flex mb-2">
              {[...Array(item.rating)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="gray"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
              <span className="ml-2">({item.ratingCount})</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reviewcard;
