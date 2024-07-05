import React from "react";
import { CarouselList } from "./ProductsList";
import ProductsCards from "./ProductsCards";

const Products = () => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-start justify-start max-w-full text-left text-45xl text-silver-100 font-salsa`}
      data-scroll-to="products785"
    >
      <div className="self-stretch overflow-hidden flex flex-row items-start justify-start max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-row items-center justify-center p-5 box-border max-w-full">
            <h1 className="m-0 h-[98px] w-[607px] text-center relative text-inherit font-normal font-inherit inline-block shrink-0 max-w-full mq450:text-19xl mq1050:text-32xl">
              Categories
            </h1>
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-center p-6 box-border max-w-full text-center text-17xl text-gainsboro-200 font-short-stack mq750:pt-[21px] mq750:pb-[21px] mq750:box-border">
            <div className="flex flex-col items-center justify-center gap-[62px] w-full ">
              <div className="w-full overflow-hidden min-h-[532px] flex justify-evenly flex-row flex-wrap items-center gap-[100px] pt-0 pb-20 box-border lg:box-border">
                {CarouselList.map((item) => (
                  <ProductsCards
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    category={item.category}
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

export default Products;
