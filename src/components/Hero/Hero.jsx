const Hero = ({ className = "" }) => {
  return (
    <>
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
    </>
  );
};

export default Hero;
