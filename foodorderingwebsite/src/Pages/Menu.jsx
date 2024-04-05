import React from "react";
import { Link } from "react-router-dom";
import { AppetizersData } from "../components/mock data/data";

function Menu() {
  return (
    <div>
      <div className="flex items-center justify-center bg-purple-600">
        <p className="w-9/12 p-4 md:p-6 md:py-9 text-lg text-white">
          Order for pickup or delivery in Toronto and nearby. Delivery minimum
          $25, ETA 45 mins-1.5 hrs, depending on location. Orders outside of
          Toronto delivered next day. Walk-ins welcome!
        </p>
      </div>
      <div className="sticky top-0 z-50 bg-white flex items-center justify-center border border-red-600">
        <ul className="w-9/12 ml-6 p-1 text-lg  md:flex gap-3 border border-red-500 text-gray-700">
          <li className="p-2">
            <Link to="/menu">Appetizers</Link>
          </li>
          <li className="p-2">
            <Link to="/">Keto Breakfast</Link>
          </li>
          <li className="p-2">
            <Link to="/">Salads</Link>
          </li>
          <li className="p-2">
            <Link to="/">Soups</Link>
          </li>
          <li className="p-2">
            <Link to="/">Keto Pizzas</Link>
          </li>
          <li className="p-2">
            <Link to="/">Keto Burgers</Link>
          </li>
          <li className="p-2">
            <Link to="/">Keto Pastas</Link>
          </li>
          <li className="p-2">
            <Link to="/">More</Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center justify-center border border-red-800">
        <div className="w-9/12 md:ml-6 border border-pink-800">
          <h2 className="text-2xl mb-4 mt-2 font-semibold p-2">Appetizers</h2>
          <div className="flex flex-wrap justify-between w-full  border border-green-700">
            {AppetizersData.map((item) => (
              <div className="flex w-[556px] h-[280px] border border-red-600">
                <div className="w-2/3 flex flex-col border border-pink-500">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <div>
                    <span></span>
                    <span>6</span>
                  </div>
                  <span>{item.price}</span>
                  <button>Add to Order</button>
                </div>
                <div className="w-2/6 border border-red-800">
                  <img src={item.img} className=" hobject-conatiner" />
                </div>
              </div>
            ))}

            {/* <div className="w-[556px] h-[280px] border border-red-600">
              <div></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
