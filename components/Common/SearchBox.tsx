"use client";
import React, { useState } from "react";
import { josefin } from "../../utils/utilsFonts";
import Button from "./Button";
import locationIcon from "../../Assets/Icons/location.png";

const SearchBox = ({ searchClasses }) => {
  return (
    <div
      className={`bg-white p-[20px] rounded-xl shadow-md max-w-[1190px] w-full m-auto relative z-1 ${searchClasses} h-fit`}
    >
      <div className="flex justify-between gap-4 relative max-xl:grid max-xl:grid-cols-3 max-md:grid-cols-1">
        <input
          type="text"
          placeholder="Search..."
          className="py-[10px] px-6 border border-greyishBrown rounded-[8px] w-full"
        />
        <Button
          ButtonText={"Search"}
          ButtonClasses={
            "w-max flex items-center font-semibold text-white justify-center max-h-[58px] max-xl:w-full max-md:py-3"
          }
        ></Button>
        <Button
          ButtonText={"Find Services near me"}
          icon={locationIcon}
          logo={locationIcon}
          ButtonClasses={
            "!bg-blue-100 text-[#2A86DB] font-semibold w-fit flex items-center gap-[8px] justify-center max-h-[58px] max-xl:w-full max-md:py-3"
          }
        ></Button>
      </div>
    </div>
  );
};

export default SearchBox;
