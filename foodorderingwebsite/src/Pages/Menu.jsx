import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AppetizersData,
  BeveragesData,
  KetoBreakfastData,
  KetoCakesData,
  KetoCupcakesData,
  KetoDressingsandSaucesData,
  ReadyToCookData,
  SaladsData,
  SugarFreeDessertsData,
  ketoBurgerData,
  ketoMainsData,
  ketoPastaData,
  ketoPizzaData,
  ketoSidesData,
  soupData,
} from "../components/mock data/data";
import SearchBar from "../components/SearchBar";

function Menu() {
  const [searchTerm, setSearchTerm] = useState(null);

  const [searchedVal, setsearchedVal] = useState(null);

  useEffect(() => {
    let id = setTimeout(() => {
      setsearchedVal(searchTerm);
    }, 500);
    return () => clearTimeout(id);
  }, [searchTerm]);

  const filteredData = AppetizersData.filter((item) =>
    item?.title.toLocaleLowerCase().includes(searchedVal.toLocaleLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-center bg-purple-600">
        <p className="w-full md:w-9/12 p-4 md:p-6 md:py-9 text-lg text-white">
          Order for pickup or delivery in Toronto and nearby. Delivery minimum
          $25, ETA 45 mins-1.5 hrs, depending on location. Orders outside of
          Toronto delivered next day. Walk-ins welcome!
        </p>
      </div>

      <div className="sticky top-0 z-50 bg-white flex items-center justify-center shadow-lg">
        <ul className="w-full md:w-9/12 ml-6 p-2 text-md md:text-lg flex gap-3  text-gray-700">
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
      <SearchBar />
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="w-full md:w-9/12 md:ml-6 ">
          <h2 className="text-2xl mb-4 mt-2 font-semibold p-2">Appetizers</h2>
          <div className="flex flex-wrap justify-between w-full ">
            {AppetizersData.map((item) => (
              <div className="flex w-[556px] h-[280px] my-2 ml-2 border border-gray-400">
                <div className="w-2/3  pl-4 pt-4 ml-1 flex flex-col ">
                  <h2 className="font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-700 mb-2">{item.description}</p>
                  <div className="mb-2">
                    <span className="">★★★★★ (4)</span>
                  </div>
                  <span className="mb-4">${item.price}</span>
                  <button
                    className="w-[150px] px-2 py-1 border-2 border-black rounded-2xl"
                    style={{ borderBottom: "5px solid black" }}
                  >
                    Add to Order
                  </button>
                </div>
                <div className="w-[158px] h-10/12 m-2 mr-2 rounded-xl overflow-hidden">
                  <img src={item.img} className="object-cover h-[276px] " />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-9/12 md:ml-6 ">
          <h2 className="text-2xl mb-4 mt-2 font-semibold p-2">
            Keto Breakfast
          </h2>
          <div className="flex flex-wrap justify-between w-full ">
            {KetoBreakfastData.map((item) => (
              <div className="flex w-[556px] h-[280px] my-2 ml-2 border border-gray-400">
                <div className="w-2/3  pl-4 pt-4 ml-1 flex flex-col ">
                  <h2 className="font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-700 mb-2">{item.description}</p>
                  <div className="mb-2">
                    <span className="">★★★★★ (4)</span>
                  </div>
                  <span className="mb-4">${item.price}</span>
                  <button
                    className="w-[150px] px-2 py-1 border-2 border-black rounded-2xl"
                    style={{ borderBottom: "5px solid black" }}
                  >
                    Add to Order
                  </button>
                </div>
                <div className="w-[158px] h-10/12 m-2 mr-2 rounded-xl overflow-hidden">
                  <img src={item.img} className="object-cover h-[276px] " />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-9/12 md:ml-6 ">
          <h2 className="text-2xl mb-4 mt-2 font-semibold p-2">Salads</h2>
          <div className="flex flex-wrap justify-between w-full ">
            {SaladsData.map((item) => (
              <div className="flex w-[556px] h-[280px] my-2 ml-2 border border-gray-400">
                <div className="w-2/3  pl-4 pt-4 ml-1 flex flex-col ">
                  <h2 className="font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-700 mb-2">{item.description}</p>
                  <div className="mb-2">
                    <span className="">★★★★★ (4)</span>
                  </div>
                  <span className="mb-4">${item.price}</span>
                  <button
                    className="w-[150px] px-2 py-1 border-2 border-black rounded-2xl"
                    style={{ borderBottom: "5px solid black" }}
                  >
                    Add to Order
                  </button>
                </div>
                <div className="w-[158px] h-10/12 m-2 mr-2 rounded-xl overflow-hidden">
                  <img src={item.img} className="object-cover h-[276px] " />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-9/12 md:ml-6 ">
          <h2 className="text-2xl mb-4 mt-2 font-semibold p-2">Soup</h2>
          <div className="flex flex-wrap justify-between w-full ">
            {soupData.map((item) => (
              <div className="flex w-[556px] h-[280px] my-2 ml-2 border border-gray-400">
                <div className="w-2/3  pl-4 pt-4 ml-1 flex flex-col ">
                  <h2 className="font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-700 mb-2">{item.description}</p>
                  <div className="mb-2">
                    <span className="">★★★★★ (4)</span>
                  </div>
                  <span className="mb-4">${item.price}</span>
                  <button
                    className="w-[150px] px-2 py-1 border-2 border-black rounded-2xl"
                    style={{ borderBottom: "5px solid black" }}
                  >
                    Add to Order
                  </button>
                </div>
                <div className="w-[158px] h-10/12 m-2 mr-2 rounded-xl overflow-hidden">
                  <img src={item.img} className="object-cover h-[276px] " />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-9/12 md:ml-6 ">
          <h2 className="text-2xl mb-4 mt-2 font-semibold p-2">keto Pizza</h2>
          <div className="flex flex-wrap justify-between w-full ">
            {ketoPizzaData.map((item) => (
              <div className="flex w-[556px] h-[280px] my-2 ml-2 border border-gray-400">
                <div className="w-2/3  pl-4 pt-4 ml-1 flex flex-col ">
                  <h2 className="font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-700 mb-2">{item.description}</p>
                  <div className="mb-2">
                    <span className="">★★★★★ (4)</span>
                  </div>
                  <span className="mb-4">${item.price}</span>
                  <button
                    className="w-[150px] px-2 py-1 border-2 border-black rounded-2xl"
                    style={{ borderBottom: "5px solid black" }}
                  >
                    Add to Order
                  </button>
                </div>
                <div className="w-[158px] h-10/12 m-2 mr-2 rounded-xl overflow-hidden">
                  <img src={item.img} className="object-cover h-[276px] " />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-9/12 md:ml-6 ">
          <h2 className="text-2xl mb-4 mt-2 font-semibold p-2">keto Burger</h2>
          <div className="flex flex-wrap justify-between w-full ">
            {ketoBurgerData.map((item) => (
              <div className="flex w-[556px] h-[280px] my-2 ml-2 border border-gray-400">
                <div className="w-2/3  pl-4 pt-4 ml-1 flex flex-col ">
                  <h2 className="font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-700 mb-2">{item.description}</p>
                  <div className="mb-2">
                    <span className="">★★★★★ (4)</span>
                  </div>
                  <span className="mb-4">${item.price}</span>
                  <button
                    className="w-[150px] px-2 py-1 border-2 border-black rounded-2xl"
                    style={{ borderBottom: "5px solid black" }}
                  >
                    Add to Order
                  </button>
                </div>
                <div className="w-[158px] h-10/12 m-2 mr-2 rounded-xl overflow-hidden">
                  <img src={item.img} className="object-cover h-[276px] " />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-9/12 md:ml-6 ">
          <h2 className="text-2xl mb-4 mt-2 font-semibold p-2">keto Pasta</h2>
          <div className="flex flex-wrap justify-between w-full ">
            {ketoPastaData.map((item) => (
              <div className="flex w-[556px] h-[280px] my-2 ml-2 border border-gray-400">
                <div className="w-2/3  pl-4 pt-4 ml-1 flex flex-col ">
                  <h2 className="font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-700 mb-2">{item.description}</p>
                  <div className="mb-2">
                    <span className="">★★★★★ (4)</span>
                  </div>
                  <span className="mb-4">${item.price}</span>
                  <button
                    className="w-[150px] px-2 py-1 border-2 border-black rounded-2xl"
                    style={{ borderBottom: "5px solid black" }}
                  >
                    Add to Order
                  </button>
                </div>
                <div className="w-[158px] h-10/12 m-2 mr-2 rounded-xl overflow-hidden">
                  <img src={item.img} className="object-cover h-[276px] " />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-9/12 md:ml-6 ">
          <h2 className="text-2xl mb-4 mt-2 font-semibold p-2">keto Mains</h2>
          <div className="flex flex-wrap justify-between w-full ">
            {ketoMainsData.map((item) => (
              <div className="flex w-[556px] h-[280px] my-2 ml-2 border border-gray-400">
                <div className="w-2/3  pl-4 pt-4 ml-1 flex flex-col ">
                  <h2 className="font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-700 mb-2">{item.description}</p>
                  <div className="mb-2">
                    <span className="">★★★★★ (4)</span>
                  </div>
                  <span className="mb-4">${item.price}</span>
                  <button
                    className="w-[150px] px-2 py-1 border-2 border-black rounded-2xl"
                    style={{ borderBottom: "5px solid black" }}
                  >
                    Add to Order
                  </button>
                </div>
                <div className="w-[158px] h-10/12 m-2 mr-2 rounded-xl overflow-hidden">
                  <img src={item.img} className="object-cover h-[276px] " />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-9/12 md:ml-6 ">
          <h2 className="text-2xl mb-4 mt-2 font-semibold p-2">keto Sides</h2>
          <div className="flex flex-wrap justify-between w-full ">
            {ketoSidesData.map((item) => (
              <div className="flex w-[556px] h-[280px] my-2 ml-2 border border-gray-400">
                <div className="w-2/3  pl-4 pt-4 ml-1 flex flex-col ">
                  <h2 className="font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-700 mb-2">{item.description}</p>
                  <div className="mb-2">
                    <span className="">★★★★★ (4)</span>
                  </div>
                  <span className="mb-4">${item.price}</span>
                  <button
                    className="w-[150px] px-2 py-1 border-2 border-black rounded-2xl"
                    style={{ borderBottom: "5px solid black" }}
                  >
                    Add to Order
                  </button>
                </div>
                <div className="w-[158px] h-10/12 m-2 mr-2 rounded-xl overflow-hidden">
                  <img src={item.img} className="object-cover h-[276px] " />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-9/12 md:ml-6 ">
          <h2 className="text-2xl mb-4 mt-2 font-semibold p-2">
            Sugar Free Desserts
          </h2>
          <div className="flex flex-wrap justify-between w-full ">
            {SugarFreeDessertsData.map((item) => (
              <div className="flex w-[556px] h-[280px] my-2 ml-2 border border-gray-400">
                <div className="w-2/3  pl-4 pt-4 ml-1 flex flex-col ">
                  <h2 className="font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-700 mb-2">{item.description}</p>
                  <div className="mb-2">
                    <span className="">★★★★★ (4)</span>
                  </div>
                  <span className="mb-4">${item.price}</span>
                  <button
                    className="w-[150px] px-2 py-1 border-2 border-black rounded-2xl"
                    style={{ borderBottom: "5px solid black" }}
                  >
                    Add to Order
                  </button>
                </div>
                <div className="w-[158px] h-10/12 m-2 mr-2 rounded-xl overflow-hidden">
                  <img src={item.img} className="object-cover h-[276px] " />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-9/12 md:ml-6 ">
          <h2 className="text-2xl mb-4 mt-2 font-semibold p-2">
            Keto CupCakes
          </h2>
          <div className="flex flex-wrap justify-between w-full ">
            {KetoCupcakesData.map((item) => (
              <div className="flex w-[556px] h-[280px] my-2 ml-2 border border-gray-400">
                <div className="w-2/3  pl-4 pt-4 ml-1 flex flex-col ">
                  <h2 className="font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-700 mb-2">{item.description}</p>
                  <div className="mb-2">
                    <span className="">★★★★★ (4)</span>
                  </div>
                  <span className="mb-4">${item.price}</span>
                  <button
                    className="w-[150px] px-2 py-1 border-2 border-black rounded-2xl"
                    style={{ borderBottom: "5px solid black" }}
                  >
                    Add to Order
                  </button>
                </div>
                <div className="w-[158px] h-10/12 m-2 mr-2 rounded-xl overflow-hidden">
                  <img src={item.img} className="object-cover h-[276px] " />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-9/12 md:ml-6 ">
          <h2 className="text-2xl mb-4 mt-2 font-semibold p-2">
            Ready To Cook
          </h2>
          <div className="flex flex-wrap justify-between w-full ">
            {ReadyToCookData.map((item) => (
              <div className="flex w-[556px] h-[280px] my-2 ml-2 border border-gray-400">
                <div className="w-2/3  pl-4 pt-4 ml-1 flex flex-col ">
                  <h2 className="font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-700 mb-2">{item.description}</p>
                  <div className="mb-2">
                    <span className="">★★★★★ (4)</span>
                  </div>
                  <span className="mb-4">${item.price}</span>
                  <button
                    className="w-[150px] px-2 py-1 border-2 border-black rounded-2xl"
                    style={{ borderBottom: "5px solid black" }}
                  >
                    Add to Order
                  </button>
                </div>
                <div className="w-[158px] h-10/12 m-2 mr-2 rounded-xl overflow-hidden">
                  <img src={item.img} className="object-cover h-[276px] " />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-9/12 md:ml-6 ">
          <h2 className="text-2xl mb-4 mt-2 font-semibold p-2">
            Keto Dressings and Sauces
          </h2>
          <div className="flex flex-wrap justify-between w-full ">
            {KetoDressingsandSaucesData.map((item) => (
              <div className="flex w-[556px] h-[280px] my-2 ml-2 border border-gray-400">
                <div className="w-2/3  pl-4 pt-4 ml-1 flex flex-col ">
                  <h2 className="font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-700 mb-2">{item.description}</p>
                  <div className="mb-2">
                    <span className="">★★★★★ (4)</span>
                  </div>
                  <span className="mb-4">${item.price}</span>
                  <button
                    className="w-[150px] px-2 py-1 border-2 border-black rounded-2xl"
                    style={{ borderBottom: "5px solid black" }}
                  >
                    Add to Order
                  </button>
                </div>
                <div className="w-[158px] h-10/12 m-2 mr-2 rounded-xl overflow-hidden">
                  <img src={item.img} className="object-cover h-[276px] " />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-9/12 md:ml-6 ">
          <h2 className="text-2xl mb-4 mt-2 font-semibold p-2">Beverages</h2>
          <div className="flex flex-wrap justify-between w-full ">
            {BeveragesData.map((item) => (
              <div className="flex w-[556px] h-[280px] my-2 ml-2 border border-gray-400">
                <div className="w-2/3  pl-4 pt-4 ml-1 flex flex-col ">
                  <h2 className="font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-700 mb-2">{item.description}</p>
                  <div className="mb-2">
                    <span className="">★★★★★ (4)</span>
                  </div>
                  <span className="mb-4">${item.price}</span>
                  <button
                    className="w-[150px] px-2 py-1 border-2 border-black rounded-2xl"
                    style={{ borderBottom: "5px solid black" }}
                  >
                    Add to Order
                  </button>
                </div>
                <div className="w-[158px] h-10/12 m-2 mr-2 rounded-xl overflow-hidden">
                  <img src={item.img} className="object-cover h-[276px] " />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-9/12 md:ml-6 ">
          <h2 className="text-2xl mb-4 mt-2 font-semibold p-2">Keto Cakes</h2>
          <div className="flex flex-wrap justify-between w-full ">
            {KetoCakesData.map((item) => (
              <div className="flex w-[556px] h-[280px] my-2 ml-2 border border-gray-400">
                <div className="w-2/3  pl-4 pt-4 ml-1 flex flex-col ">
                  <h2 className="font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-700 mb-2">{item.description}</p>
                  <div className="mb-2">
                    <span className="">★★★★★ (4)</span>
                  </div>
                  <span className="mb-4">${item.price}</span>
                  <button
                    className="w-[150px] px-2 py-1 border-2 border-black rounded-2xl"
                    style={{ borderBottom: "5px solid black" }}
                  >
                    Add to Order
                  </button>
                </div>
                <div className="w-[158px] h-10/12 m-2 mr-2 rounded-xl overflow-hidden">
                  <img src={item.img} className="object-cover h-[276px] " />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
