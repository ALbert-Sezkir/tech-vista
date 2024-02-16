import { useLoaderData } from "react-router-dom";
//every api call is in the api file
import { getProducts } from "../functions/api";
import Hero from "../components/Hero";
import CardSection from "../components/CardSection";

const WelcomePage = () => {
  const products = useLoaderData(); //use the data returned from the fetch with the useLoaderData hook

  return (
    <section className="relative">
      <Hero />
      {/* prop down the data to the card section */}
      <CardSection products={products} />
    </section>
  );
};

export default WelcomePage;

export const loader = () => {
  //loader function fetches products when component mounts
  return getProducts();
};
