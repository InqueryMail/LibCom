import React from "react";

const Map = (className) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-start justify-start max-w-full text-left text-45xl text-silver-100 ${className}`}
      data-scroll-to="products785"
    >
      <div className=" max-w-[1500px] w-full self-stretch overflow-hidden flex flex-row items-start justify-start m-auto">
        <div className="flex-1 flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-row items-center justify-center p-5 box-border max-w-full">
            <h1 className="m-0 h-[98px] w-[607px] text-center relative text-inherit font-salsa font-normal font-inherit inline-block shrink-0 max-w-full mq450:text-19xl mq1050:text-32xl">
              Location
            </h1>
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-center p-6 box-border max-w-full text-center text-[1rem] text-gainsboro-200 font-short-stack mq750:pt-[21px] mq750:pb-[21px] mq750:box-border">
            <div className="flex flex-col items-center justify-center w-full ">
              <div className="w-full overflow-hidden min-h-[532px] flex justify-evenly flex-row flex-wrap items-center py-0 px-5 box-border lg:pl-[38px] lg:pr-[38px] lg:box-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d469984.1071988275!2d72.558382!3d23.032919!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x395e868feaaaaaab%3A0xe289c8352e4919a4!2sLibra+Communication%2C+A-80%2C+Pushpraj+Industrial+Estate%2C+Nutan+Mill+Compount%2C+Near+City+Gold+Cinema%2C+Bapu+Nagar%2C+Bapu+Nagar%2C+Ahmedabad%2C+Gujarat+380018%2C+India!3m2!1d23.032934899999997!2d72.628422!5e0!3m2!1sen!2sin!4v1491574348206"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                  className="w-screen h-screen"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
