import React from "react";
import Image from "next/image";

const Button = ({ ButtonText, ButtonClasses, ButtonClicked, icon }: any) => {
  return (
    <div
      onClick={ButtonClicked}
      className={`bg-primary rounded-[8px] px-[31px] py-2 laptopScreen:text-base cursor-pointer max-lg:px-4 max-lg:py-[7px] max-lg:text-sm ${ButtonClasses}`}
    >
      {icon && <Image src={icon} alt="icon" width={24} height={24} />}
      {/* P tag with text in a single line */}
      <p className="whitespace-nowrap">{ButtonText}</p>
    </div>
  );
};

export default Button;
