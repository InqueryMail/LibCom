import React, { useState } from "react";
import { ListList } from "./ListList";
import ListCard from "./ListCard";

const List = () => {
  const [index, setIndex] = useState(5);
  return (
    <div className="text-white w-full flex justify-center items-center">
      <div className="flex gap-2 flex-col">
        <h1 className="w-full self-stretch flex flex-row items-start justify-center py-0 px-[18px] text-center text-17xl text-gainsboro-200 font-short-stack">
          Shubham
        </h1>
        {ListList[index].map((item) => (
          <ListCard key={item.id} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default List;
