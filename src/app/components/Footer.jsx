import React from "react";

const Footer = () => {
  return (
    <div className="bg-white dark:bg-gray-800 w-full">
      <footer className="bg-white text-gray-700 border-t border-gray-200 py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Logo & Description */}
            <div>
              <h2 className="text-xl font-semibold flex items-center space-x-2">
                <span className="text-black font-bold text-3xl">
                  Alowishus Deliciious Coffee
                </span>
              </h2>
              <p className="mt-2 text-lg text-gray-700">
                Lorem ipsum dolor sit amet consectetur. Imperdiet aliquet
                faucibus malesuada vitae.
              </p>
              <p className="mt-2 text-lg text-gray-700 font-semibold">
                (219) 555-0114
              </p>
              {/* Social Icons */}
              <div className="flex space-x-3 mt-3">
                <a href="#" className="text-blue-600">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-red-600">
                  <i className="fab fa-reddit"></i>
                </a>
                <a href="#" className="text-green-500">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="#" className="text-pink-600">
                  <i className="fab fa-pinterest"></i>
                </a>
              </div>
            </div>

            {/* My Account */}
            <div>
              <h3 className="font-bold text-xl mb-2">My Account</h3>
              <ul className="text-lg space-y-2">
                {[
                  "My Account",
                  "Order History",
                  "Shopping Cart",
                  "Wishlist",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-600">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Section */}
            <div>
              <h3 className="font-bold text-xl mb-2">Helps</h3>
              <ul className="text-lg space-y-2">
                {["Contact", "FAQs", "Terms & Condition", "Privacy Policy"].map(
                  (item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-blue-600">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-bold text-xl mb-2">Categories</h3>
              <ul className="text-lg space-y-2">
                {["Printers", "Cartridge", "Ink"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-600">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Payment & App Store */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-6">
            <div className="flex space-x-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-v52tLnvL3FEjfxjPvZWbvUMYvVUtAm9R6A&s"
                alt="Google Play"
                className="h-10"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJgk5tpxJC_1CAnsXwo2VvBGyQGI-o5c1PJw&s"
                alt="App Store"
                className="h-10"
              />
            </div>
            <div className="flex space-x-2 mt-4 md:mt-0">
              {[
                "Apple Pay",
                "Visa",
                "Mastercard",
                "Discover",
                "Secure Payment",
              ].map((alt, index) => (
                <img
                  key={index}
                  src={`https://via.placeholder.com/40x30?text=${alt}`}
                  alt={alt}
                  className="h-[30px] w-10 rounded-md"
                />
              ))}
            </div>
          </div>

          <div className="text-center text-lg text-gray-500 mt-6 border-t pt-4">
            ExpertSquad © 2025. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
