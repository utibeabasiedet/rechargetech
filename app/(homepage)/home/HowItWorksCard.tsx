import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  title: string;
  description: string;
}

const HowitworksCard: React.FC<Props> = ({ image, title, description }) => {
  // benefitsShadow
  return (
    <div className="flex flex-col items-center  gap-4 max-w-[244px]    ">
      <Image
      className="h-[80px] w-[80px]"
        src={`/assets/images/home/${image}`}
        alt={title}
        width={80}
        height={80}
      />
      <h3 className="text-[18px] font-bold text-white text-center">{title}</h3>
      <p className="text-white text-center">{description}</p>
    </div>
  );
};

export default HowitworksCard;
