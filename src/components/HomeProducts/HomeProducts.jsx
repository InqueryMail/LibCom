import HomeProductsList from "./HomeProductsList";

const Card = ({
  className = "",
  heading,
  perfume,
  heading1,
  para,
  headingPadding,
  frameDivColor,
}) => {
  return (
    <>
      <div
        className={`self-stretch max-w-[300.9px] min-h-[532px] shrink-0 flex flex-col items-end justify-start py-0 px-0 box-border gap-[17px] text-center text-17xl text-gainsboro-200 font-short-stack ${className}`}
        style={{ padding: headingPadding }}
      >
        <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[10px]">
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-[18px]">
            <div className="flex-1 flex flex-row items-start justify-start">
              <div className="flex-1 " style={{ color: frameDivColor }}>
                {heading}
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start justify-start max-h-[229px]">
            <div className="self-stretch rounded-xl shadow-[0px_4px_52.85px_rgba(215,_228,_249,_0.5)] flex flex-col items-start justify-start">
              <img
                className="self-stretch relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src={perfume}
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-[18px] text-left text-white font-ribeye-marrow">
          <div className="flex-1 flex flex-col items-start justify-start gap-[38px]">
            <div className="w-[250px] relative leading-[50px] inline-block mq1050:text-10xl mq1050:leading-[40px] mq450:text-3xl mq450:leading-[30px]">
              {heading1}
            </div>
            <p className="m-0 self-stretch relative text-lg leading-[25px] font-righteous whitespace-pre-wrap">
              {para}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const HomeProducts = ({ className = "", heading }) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-start justify-start max-w-full text-left text-45xl text-silver-100 font-salsa ${className}`}
      data-scroll-to="products785"
    >
      <div className="self-stretch overflow-hidden flex flex-row items-start justify-start max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-row items-center justify-center p-5 box-border max-w-full">
            <h1 className="m-0 h-[98px] w-[607px] text-center relative text-inherit font-normal font-inherit inline-block shrink-0 max-w-full mq450:text-19xl mq1050:text-32xl">
              {heading}
            </h1>
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-center p-6 box-border max-w-full text-center text-17xl text-gainsboro-200 font-short-stack mq750:pt-[21px] mq750:pb-[21px] mq750:box-border">
            <div className="flex flex-col items-center justify-center gap-[62px] w-full ">
              <div className="w-full overflow-hidden min-h-[532px] flex justify-evenly flex-row flex-wrap items-center gap-[100px] pt-0 pb-20 px-5 box-border lg:pl-[38px] lg:pr-[38px] lg:box-border">
                {HomeProductsList.map((item) => (
                  <Card
                    key={item.id}
                    heading={item.heading}
                    perfume={item.perfume}
                    heading1={item.heading1}
                    para={item.para}
                    headingPadding={item.headingPadding}
                    frameDivColor={item.frameDivColor}
                    paraTransform={item.paraTransform}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
