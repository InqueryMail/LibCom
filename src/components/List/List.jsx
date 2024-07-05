import React from "react";
import { ListList } from "./ListList";
import {
  ComesticsPackaging,
  DryFruitPackaging,
  FoodPackaging,
  IceCreamAndKulfiIndustries,
  ShopingBags,
  TeaIndustries,
} from "../../../public/images/index";
import ListCard from "./ListCard";

const List = () => {
  return (
    <div className="text-white w-full flex justify-center items-center">
      <div className="flex gap-2 flex-col">
        <h1 className="w-full self-stretch flex flex-row items-start justify-center py-0 px-[18px] text-center text-17xl text-gainsboro-200 font-short-stack">
          Shubham
        </h1>
        {ListList.filter((item) => item.category === "Shoping Bags").map(
          (item) => (
            <ListCard key={item.id} image={item.image} />
          )
        )}
      </div>
    </div>
  );
};

export default List;
