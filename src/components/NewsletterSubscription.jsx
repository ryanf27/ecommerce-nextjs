import React from "react";

const NewsletterSubscription = () => {
  return (
    <div className="bg-[#611122] py-16">
      <div className="container mx-auto px-4">
        <form
          className="flex flex-col items-center max-w-lg mx-auto bg-[#611122] p-10 rounded"
          style={{ maxWidth: "600px" }}
        >
          <div className="mb-6 w-full text-left">
            <p className="text-2xl text-white font-bold">Get a 10% discount</p>
          </div>
          <div className="mb-6 w-full text-left">
            <p className="text-base text-white">
              Subscribe to the Impericon newsletter and receive a 10% discount
              code for your next order.
            </p>
          </div>
          <div className="mb-6 w-full">
            <div className="flex items-center">
              <input
                type="radio"
                id="mens_clothing"
                name="gender"
                className="mr-2"
              />
              <label
                htmlFor="mens_clothing"
                className="text-white cursor-pointer mr-6"
              >
                Men&#39;s clothing
              </label>
              <input
                type="radio"
                id="womens_clothing"
                name="gender"
                className="mr-2"
              />
              <label
                htmlFor="womens_clothing"
                className="text-white cursor-pointer"
              >
                Women&#39;s clothing
              </label>
            </div>
          </div>
          <div className="mb-6 w-full">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full p-2 border border-gray-300 rounded text-black"
            />
          </div>
          <div className="mb-6 w-full">
            <button
              type="button"
              className="w-full py-2 bg-gray-300 border border-black text-black font-bold"
            >
              SUBSCRIBE NOW
            </button>
          </div>
          <div className="w-full text-left">
            <p className="text-xs text-white">
              Data is not given to third parties and unsubscription is possible
              at any time. With the subscription, you accept our privacy policy.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
