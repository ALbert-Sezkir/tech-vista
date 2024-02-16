import { useContext } from "react";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Trash from "../assets/trash.svg";

import { CartContext } from "../context/cartContext";

const Cart = () => {
  const { removeFromCart, cartItems, addToCart, clearItem } =
    useContext(CartContext);

  const _cartItems = cartItems.map((cartItem) => {
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
      <ul className="w-full flex flex-col gap-[1.6rem] mb-16">{_cartItems}</ul>
      <div className="flex w-full gap-3 justify-center">
        <Button to={"/"} size="L">
          Continue shopping
        </Button>
        <Button to={"/checkout"} size="L">
          Go to Checkout
        </Button>
      </div>
    </Container>
  );
};

export default Cart;
