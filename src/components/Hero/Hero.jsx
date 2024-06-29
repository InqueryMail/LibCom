// import PropTypes from "prop-types";
// import styles from "./Hero.module.css";

// const Hero = ({ className = "" }) => {
//   return (
//     <section
//       className={[styles.hero, className].join(" ")}
//       data-scroll-to="hero"
//     >
//       <img
//         className={styles.heroChild}
//         loading="lazy"
//         alt=""
//         src="/background.png"
//       />
//     </section>
//   );
// };

// Hero.propTypes = {
//   className: PropTypes.string,
// };

// export default Hero;

import PropTypes from "prop-types";

const Hero = ({ className = "" }) => {
  return (
    <section
      className={`w-full m-auto max-w-[1362px] ${className}`}
      data-scroll-to="hero"
    >
      <img
        className=" flex-1 relative  overflow-hidden object-cover"
        loading="lazy"
        alt=""
        src="/background.png"
      />
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
