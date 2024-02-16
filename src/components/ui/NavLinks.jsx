import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import CartIcon from "../../assets/shopping-icon.svg";
import PropTypes from "prop-types";
import LoginDropdown from "../LoginDropdown";
import { getFromLocalStorage } from "../../functions/functions";
import { useEffect } from "react";
import { CartContext } from "../../context/cartContext";

const NavLinks = ({ links }) => {
  const { cartItems } = useContext(CartContext);
  const [token, setToken] = useState(null);

  const sum = cartItems.reduce(
    (partialSum, cartItem) => partialSum + cartItem.quantity,
    0
  );

  // get token from local storage when component mounts
  // if token exists, show logout button else login button
  useEffect(() => {
    const getToken = getFromLocalStorage("token");
    setToken(getToken);
  }, [token]);
  return (
    <>
      {links.map((link) => (
        <li key={link.name}>
          {link.id === "checkout" ? (
            <NavLink to={!token ? "/auth/login" : link.path}>
              <div className="relative">
                <img
                  className="cursor-pointer"
                  src={CartIcon}
                  alt="Shopping cart"
                />
                <p className="absolute z-30 top-[-20px] left-[20px] rounded-full p-1 bg-black text-red-500">
                  {sum === 0 ? "" : sum}
                </p>
              </div>
            </NavLink>
          ) : link.id === "login" ? (
            <div className="relative">
              <LoginDropdown />
            </div>
          ) : (
            <NavLink to={link.path}>{link.name}</NavLink>
          )}
        </li>
      ))}
    </>
  );
};

export default NavLinks;

NavLinks.propTypes = {
  links: PropTypes.array,
};
