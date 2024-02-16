import Article from "./ui/Article";
import HeroImg from "../assets/hero-img.webp";
import Button from "./ui/Button";
import { COLORS } from "../constants/constants";
import Container from "./ui/Container";

const Hero = () => {
  return (
    <Container bgColor={COLORS.BLACK}>
      <section className="flex flex-col-reverse md:grid md:grid-cols-2 px-4 gap-12 text-center md:text-start items-center">
        <Article styles={COLORS.TEXT_WHITE}>
          <h6>Lyft Din Teknikupplevelse</h6>
          <h1>Innovationsrik Vardag.</h1>
          <Button size="M" style="text-black mt-4 md:mt-2" to="/contact">
            Kontakta Oss
          </Button>
        </Article>
        <img src={HeroImg} alt="hero-img" />
      </section>
    </Container>
  );
};

export default Hero;
