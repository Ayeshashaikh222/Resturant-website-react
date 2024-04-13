import React from "react";

function About() {
  return (
    <div>
      <div className="w-full h-full mt-6 md:mt-14 ">
        <div
          className="w-11/12 h-[690px] md:h-[350px] md:w-[1100px] flex flex-col md:flex-row mx-auto border-2 border-black rounded-lg"
          style={{ borderBottom: "5px solid black" }}
        >
          <div className="w-[440px] h-[500px] md:w-[520px] md:h-[345px] overflow-hidden  border-2 md:border-l-black">
            <img
              src="https://www.ketodelia.ca/cdn/shop/files/316326066_6318662482886_6362087473845255281_n.png?v=1674936588&width=750"
              alt="keto red velvet cake"
              className="w-full h-full object-center md:object-cover "
            />
          </div>
          <div className="w-full h-[320px] md:pt-10 md:h-full border-2  border-t-black md:border-none">
            <div className="w-[380px]  md:w-[650px] h-[250px] flex flex-col mt-8 md:mt-0 mx-auto ">
              <h2 className="text-3xl md:text-4xl font-semibold md:font-bold mb-6">
                When yummy meets healthy
              </h2>
              <p className="mb-8 text-md md:text-lg">
                Keto is not about dieting. It’s about choosing the best possible
                food to fuel your body and mind. And, of course, pleasure is
                always part of the mix.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full border-b border-black "
        style={{ borderBottom: "5px solid black" }}
      >
        <div className="w-10/12 md:w-7/12 h-[950px] md:h-[800px] mx-auto mt-20 text-center">
          <p className="mb-4 text-md md:text-lg text-gray-700">
            At Ketodelia, we're passionate about providing{" "}
            <span className="text-purple-800 font-bold">
              delicious, keto-friendly
            </span>{" "}
            meals that are not only good for you, but also taste amazing. Our
            restaurant, based in Toronto, offers{" "}
            <span className="text-purple-800 font-bold">100% gluten-free</span>{" "}
            100% gluten-free, low-carb cuisine that is carefully crafted using
            only the highest quality ingredients.
          </p>
          <p className="mb-4 text-md md:text-lg text-gray-700">
            Our menu is designed to satisfy all your cravings, from our almond
            crust pizzas to our creamy pasta dishes, burgers, and even{" "}
            <span className="text-purple-800 font-bold">sugar-free</span>{" "}
            sugar-free desserts. All of our meals are{" "}
            <span className="text-purple-800 font-bold">homemade</span> and
            prepared to order, ensuring that you're getting the freshest and
            most flavorful food possible.
          </p>
          <p className="mb-4 text-md md:text-lg text-gray-700">
            We take great care in sourcing our ingredients, using only the{" "}
            <span className="text-purple-800 font-bold">finest quality</span>{" "}
            meat from local farms and the{" "}
            <span className="text-purple-800 font-bold">
              highest quality olive, coconut, and avocado oils
            </span>{" "}
            , as well as the healthiest ghee butter and grass-fed butter. We
            believe that a healthy diet doesn't have to sacrifice taste and
            pleasure, and that's why we've created a menu that appeals to
            everyone, regardless of their dietary restrictions.
          </p>
          <p className="mb-4 text-md md:text-lg text-gray-700">
            Our team is highly professional and{" "}
            <span className="text-purple-800 font-bold">
              specialized in keto low carb diet
            </span>{" "}
            , ensuring that you're getting expert advice and guidance when it
            comes to your meal choices. We are{" "}
            <span className="text-purple-800 font-bold">
              strict on our ingredients
            </span>{" "}
            and no preservatives, artificial food coloring, and restricted
            products are used in our food.
          </p>
          <p className="mb-4 text-md md:text-lg text-gray-700">
            We're proud to offer{" "}
            <span className="text-purple-800 font-bold">
              pickup and same-day or next-day delivery
            </span>{" "}
            in Toronto and nearby cities, making it easy for you to enjoy our
            delicious keto-friendly meals whenever and wherever you choose.
            Visit us today and discover the taste of healthy eating at its
            finest!
          </p>

          <button className=" mt-6 md:mt-10 text-lg w-[180px] md:w-2/6 rounded-3xl bg-purple-500 p-3 text-white border-2 border-b-purple-800">
            Explore our Menu
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
