import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Container = ({ children, bgColor, style }) => {
  return (
    <section className={twMerge("w-full", bgColor, style)}>
      <section className="max-w-[1920px] mx-auto md:px-16 xl:px-32 py-20 relative">
        {children}
      </section>
    </section>
  );
};

export default Container;

Container.propTypes = {
  style: PropTypes.string,
  children: PropTypes.node,
  bgColor: PropTypes.string,
};
