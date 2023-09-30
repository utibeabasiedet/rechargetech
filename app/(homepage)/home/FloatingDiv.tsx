import React from "react";
import Image from "next/image";

type Props = {
  img: string;
  text: string;
  containerStyles?: string;
};

const FloatingDiv = ({ img, text, containerStyles }: Props) => {
  return (
    <div
      className={`inline-flex p-[auto] md:p-[12px] flex-row items-center justify-center z-20 gap-2 md:gap-5 h-[47px] md:h-[80px] bg-white max-w-[102px] md:max-w-[170px] rounded-[8px] shadow-md ${containerStyles}`}
    >
      <Image
        src={`/assets/images/home/${img}`}
        height={40}
        width={40}
        alt="hero"
        className="object-contain ml-1"
      />
      <span className="md:text-[14px] text-[10px]">{text}</span>
    </div>
  );
};

export default FloatingDiv;
