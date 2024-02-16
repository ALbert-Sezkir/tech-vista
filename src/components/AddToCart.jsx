import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "../components/ui/Button";
import { createOrder } from "../functions/api";
import { CountContext } from "../context/countContext";
import { CartContext } from "../context/cartContext";
import { useNavigate } from "react-router-dom";
import { getFromLocalStorage } from "../functions/functions";
import { STORED_VALUES } from "../constants/constants";

const AddToCart = ({ ...product }) => {
  //get count context from global count
  const { state, dispatch } = useContext(CountContext);
  const { addToCart, cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  useEffect(() => {
    const isItemInCart = cartItems?.find(
      (cartItem) => cartItem._id === product._id
    );

    if (isItemInCart) {
      dispatch({ type: "SET_COUNT", payload: isItemInCart.quantity });
    } else dispatch({ type: "SET_COUNT", payload: 0 });
  }, [cartItems]);

  const handleClick = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case "DECREMENT":
        dispatch({ type: "DECREMENT" });
        break;
      case "INCREMENT":
        dispatch({ type: "INCREMENT" });
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addToCart({ ...product, quantity: state.count });
    navigate("/cart");
  };

  return (
    <form className="grid  md:grid-cols-2 gap-[1rem] mt-8">
      <div className="flex justify-between items-center p-[.15rem] gap-[.8rem] rounded-3xl w-full bg-primary">
        <button
          name="DECREMENT"
          disabled={state.count < 1}
          onClick={handleClick}
          className=" w-full h-full bg-primary border-none disabled:cursor-not-allowed rounded-3xl"
        >
          -
        </button>
        <p>{state.count}</p>
        <button
          name="INCREMENT"
          onClick={handleClick}
          className="w-full h-full bg-primary border-none hoverTertiary rounded-3xl"
        >
          +
        </button>
      </div>
      <Button onClick={handleSubmit} size="L">
        Add to cart
      </Button>
    </form>
  );
};

export default AddToCart;

AddToCart.propTypes = {
  product: PropTypes.object,
};
