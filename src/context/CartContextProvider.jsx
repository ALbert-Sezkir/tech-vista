import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import { CartContext } from "./cartContext";

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  const addToCart = (item) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem._id === item._id
    );

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: item.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: item.quantity }]);
    }
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem._id === item._id
    );

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem._id !== item._id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearItem = (item) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem._id === item._id
    );
    if (isItemInCart) {
      setCartItems(cartItems.filter((cartItem) => cartItem._id !== item._id));
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ addToCart, removeFromCart, clearCart, clearItem, cartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

CartContextProvider.propTypes = {
  children: PropTypes.object,
};
