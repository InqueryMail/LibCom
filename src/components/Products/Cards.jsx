const Card = ({
  className = "",
  heading,
  perfume,
  heading1,
  para,
  headingPadding,
  frameDivColor,
  paraTransform,
}) => {
  // max-w-[334.9px]
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
          <div className="self-stretch flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch flex-1 relative rounded-xl w-full h-full flex items-center justify-center">
              <img
                className="self-stretch flex-1 object-contain absolute left-[0px] top-[18px] w-full [transform:scale(1.473)]"
                loading="lazy"
                alt=""
                src={perfume}
                style={{ transform: paraTransform }}
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start min-h-[222px] justify-end py-0 px-[18px] text-left text-white font-ribeye-marrow">
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

export default Card;
