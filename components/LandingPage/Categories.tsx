import React from "react";
import { josefin } from "../../utils/utilsFonts";
import CategoryCard from "../Common/CategoryCard";
import Button from "../Common/Button";

const Categories = ({ title, categories }) => {
  return (
    <div className=" py-[60px] px-[50px] max-lg:px-4 max-lg:py-10 hotel-suggestion">
      <div className="flex justify-between">
        <h2
          className={` ${josefin.className} text-[32px] font-semibold text-black max-lg:text-[32px] max-lg:leading-[35px] mb-[30px]`}
        >
          {title}
        </h2>
        <Button
          ButtonText={"Show All"}
          ButtonClasses={
            "!bg-blue-100 text-[#2A86DB] font-semibold w-fit flex items-center justify-center max-h-[46px] max-xl:w-full max-md:py-3"
          }
        ></Button>
      </div>
      <div className="grid grid-cols-4 gap-6 hotel-card-design max-lg:grid-cols-1">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            paraText={category}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
