import PropTypes from "prop-types";
import Container from "./ui/Container";
import Article from "./ui/Article";
import { COLORS } from "../constants/constants";
import Card from "../components/ui/Card";

const CardSection = ({ products }) => {
  //map the products and return every product object with a Card component
  return (
    <Container bgColor={COLORS.WHITE}>
      <section className="flex items-center flex-col gap-4 md:gap-12 md:py-64">
        <Article textColor={COLORS.TEXT_BLACK}>
          <h2 className="tracking-widest">SIGNATURSTILAR</h2>
        </Article>
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.name} {...product} />
          ))}
        </section>
      </section>
    </Container>
  );
};

export default CardSection;

CardSection.propTypes = {
  products: PropTypes.array,
};
