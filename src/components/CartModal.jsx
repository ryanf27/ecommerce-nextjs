import React from "react";

const CartModal = ({ isOpen, onClose, cartItems }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="fixed right-0 top-0 h-full w-80 bg-white text-black shadow-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        {cartItems.length > 0 ? (
          <>
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center space-x-4">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium ">{item.name}</h3>
                    <p className="text-gray-500 text-sm">{item.price}</p>
                  </div>
                  <div className="text-sm ">Qty: {item.quantity}</div>
                </li>
              ))}
            </ul>
            <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Checkout
            </button>
          </>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default CartModal;
