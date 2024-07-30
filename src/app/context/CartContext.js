"use client";

import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, name, price, image } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        return state.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...state, { id, name, price, image, quantity: 1 }];
      }
    }
    case "REMOVE_FROM_CART": {
      const { id } = action.payload;
      return state.filter((item) => item.id !== id);
    }
    case "DECREASE_FROM_CART": {
      const { id } = action.payload;
      return state.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    }
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
