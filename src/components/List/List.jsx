import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ListList, ListListList } from "./ListList";
import ListCard from "./ListCard";

const List = () => {
  const { id } = useParams();
  const [index, setIndex] = useState(null);

  useEffect(() => {
    if (id) {
      setIndex(parseInt(id, 10));
    }
  }, [id]);

  return (
    <div className="text-white w-full">
      <div className="flex gap-5 flex-col">
        <h1 className="w-full self-stretch flex flex-auto items-start justify-center py-0 px-[18px] text-center text-17xl text-gainsboro-200 font-short-stack">
          {ListListList[index]}
        </h1>
        <div className="flex flex-wrap justify-evenly w-full gap-10">
          {index !== null &&
            ListList[index] &&
            ListList[index].map((item) => (
              <ListCard key={item.id} image={item.image} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default List;
