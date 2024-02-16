import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Article = ({ children, styles }) => {
  return (
    <article
      className={twMerge("flex flex-col gap-8 md:max-w-[574px] z-10", styles)}
    >
      {children}
    </article>
  );
};

export default Article;

Article.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.string,
};
