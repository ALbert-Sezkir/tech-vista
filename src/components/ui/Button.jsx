import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
const Button = ({ to, size, style, onClick, children, type }) => {
  const sizes =
    size === "S"
      ? "w-[150px]"
      : size === "M"
      ? "w-[200px]"
      : size === "L"
      ? "w-full"
      : null;

  return (
    <Link to={to} className={style}>
      <button
        type={type}
        onClick={onClick}
        className={twMerge(
          "rounded-3xl py-4 px-8 bg-primary font-semibold",
          sizes,
          style
        )}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
