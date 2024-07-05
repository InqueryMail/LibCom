import React from "react";

const ListCard = ({ className = "", image }) => {
  return (
    <div
      className={`self-stretch max-w-[300.9px] shrink-0 flex flex-col items-end justify-start py-0 px-0 box-border text-center text-17xl text-gainsboro-200 font-short-stack ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[10px]">
        <div className="self-stretch rounded-xl shadow-[0px_4px_52.85px_rgba(215,_228,_249,_0.5)] flex flex-col items-start justify-start">
          <img
            className="self-stretch relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src={image}
          />
        </div>
      </div>
    </div>
  );
};

export default ListCard;
