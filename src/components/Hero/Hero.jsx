import PropTypes from "prop-types";

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
      <div className="vc_column-inner">
        <div className="wpb_wrapper">
          <div className="vc_empty_space" style={{ height: "32px" }}>
            <span className="vc_empty_space_inner"></span>
          </div>
          <div className="vc_icon_element vc_icon_element-outer vc_icon_element-align-center">
            <div className="vc_icon_element-inner vc_icon_element-color-black vc_icon_element-size-lg vc_icon_element-style- vc_icon_element-background-color-grey">
              <span className="vc_icon_element-icon fa fa-thumbs-up"></span>
            </div>
          </div>
          <div className="vc_custom_heading style1">
            <h2
              style={{
                fontSize: "22px",
                color: "#000000",
                textAlign: "left",
                fontFamily: "Merienda",
                fontWeight: "400",
                fontStyle: "normal",
              }}
            >
              Our Quality
            </h2>
          </div>
          <div className="wpb_text_column wpb_content_element">
            <div className="wpb_wrapper">
              <p>
                I am text block. Click edit button to change this text. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div className="vc_empty_space" style={{ height: "32px" }}>
            <span className="vc_empty_space_inner"></span>
          </div>
        </div>
      </div>
    </>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
