import Article from "../components/ui/Article";
import Container from "../components/ui/Container";
import AddToCart from "../components/AddToCart";
import { getProduct } from "../functions/api";
import { useLoaderData } from "react-router-dom";
import { formatToSEK } from "../functions/functions";

const Product = () => {
  const product = useLoaderData(); //use the data returned from the fetch with the useLoaderData hook

  const { name, images, description, category, price } = product; //destructure product object before ui for cleaner code and better readability

  return (
    <Container style="px-4">
      <section className="flex justify-center items-center py-16 text-center md:text-left">
        <h1>{name}</h1>
      </section>
      <section className="grid md:grid-cols-2 gap-16 md:gap-40 pt-10">
        <figure>
          <img src={images[0]} alt={`A product named ${name}`} />
        </figure>
        <Article styles="text-center md:text-left">
          <h4>{category}</h4>
          <h6>{name}</h6>
          <p>{formatToSEK(price)}</p>
          <details className="bg-white rounded-2xl px-8 py-2 max-h-[300px] overflow-y-scroll">
            <summary className="leading-10">Beskrivning</summary>
            <p className="p-6 tracking-wide">{description}</p>
          </details>
          <AddToCart {...product} />
        </Article>
      </section>
    </Container>
  );
};

export default Product;

export const loader = ({ params }) => {
  //loader function fetches products when component mounts
  return getProduct(params.id);
};
