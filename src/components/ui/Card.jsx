import PropTypes from "prop-types";
import Button from "./Button";
import { formatToSEK } from "../../functions/functions";

const Card = ({ images, name, price, _id: id }) => {
  //render the product content inside of the Card UI
  return (
    <article className="flex flex-col gap-8 max-w-[370px] min-h-[500px] rounded-xl bg-white p-8 text-center">
      <picture>
        <img className="rounded-xl" src={images[0]} alt="" />
      </picture>
      <h6 className="overflow-hidden truncate w-[full]">{name}</h6>
      <p>{formatToSEK(price)}</p>
      <Button size="M" style="self-center" to={`/${id}`}>
        Se produkt
      </Button>
    </article>
  );
};

export default Card;

Card.propTypes = {
  images: PropTypes.array,
  name: PropTypes.string,
  price: PropTypes.number,
  _id: PropTypes.string,
};
