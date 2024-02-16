import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/ui/Container";
import Trash from "../assets/trash.svg";
import { getFromLocalStorage } from "../functions/functions";
import { createOrder } from "../functions/api";

import { CartContext } from "../context/cartContext";

const Checkout = () => {
  const { removeFromCart, cartItems, addToCart, clearItem, clearCart } =
    useContext(CartContext);
  const [token, setToken] = useState("");
  const [orderMessage, setOrderMessage] = useState("");

  const navigate = useNavigate();
  console.log("cartItems", cartItems);

  useEffect(() => {
    const savedToken = getFromLocalStorage("token");
    setToken(savedToken);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      navigate("/auth/login");
    } else {
      const products = cartItems.map((cartItem) => {
        return { productId: cartItem._id, quantity: cartItem.quantity };
      });
      console.log("products", products);

      const res = await createOrder({ products: products }, token);
      console.log("res", res);

      if (res.message) {
        setOrderMessage(res.message);
        clearCart();

        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    }
  };

  const order = cartItems.map((cartItem) => {
    return (
      <li
        key={cartItem._id}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_2fr_1fr_1fr_1fr] gap-[1.6rem] items-center justify-items-center"
      >
        <picture>
          <img src={cartItem.images[0]} alt="" />
        </picture>
        <article>
          <p>{cartItem.name}</p>
        </article>
        <div className="flex justify-between p-[.15rem] gap-[.8rem] w-full h-[3.2rem] bg-tertiary items-center">
          <input
            type="button"
            onClick={() => removeFromCart(cartItem)}
            className="w-full h-full border-none hoverTertiary disabled:cursor-not-allowed cursor-pointer"
            value="-"
          />
          <p className="">{cartItem.quantity}</p>
          <input
            type="button"
            onClick={() => addToCart(cartItem)}
            className="w-full h-full border-none hoverTertiary cursor-pointer"
            value="+"
          />
        </div>
        <div className=" text-grey flex w-full gap-6 font-semibold">
          <p>TOTAL :</p>
          <p>{cartItem.price * cartItem.quantity}</p>
        </div>

        <img
          src={Trash}
          onClick={() => clearItem(cartItem)}
          className="cursor-pointer"
          alt="trashcan"
        />
      </li>
    );
  });

  return (
    <Container>
      <article className="text-center py-12">
        <h3>Checkout</h3>
      </article>
      <ul className="w-full flex flex-col gap-[1.6rem] mb-16">{order}</ul>
      <button
        className="rounded-3xl py-4 px-8 bg-primary font-semibold w-full"
        onClick={handleSubmit}
        size="L"
      >
        CHECKOUT
      </button>
      <article className="text-center py-12 text-green-300">
        <p>{orderMessage}</p>
      </article>
    </Container>
  );
};

export default Checkout;
