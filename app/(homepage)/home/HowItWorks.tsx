import React from "react";
import { HowitworksCard } from "./index";

const Howitworks: React.FC = () => {
  return (
    <section
      className={` how-it-works-section   padding-x   pt-[112px] pb-[112px]`}
    >
      <h2 className="md:max-w-[652px] mb-[72px] mx-auto text-center   text-white font-[600px] leading-[1] text-[24px] md:text-[36px] ">
        How it works
      </h2>
      <div className="flex flex-col justify-between items-center gap-[24px] md:flex-row max-w-[1216px]  mx-auto">
        <HowitworksCard
          image="add-user-account.png"
          title="Create an account"
          description="Getting started with your mobile 
number automatically creates 
an account for you."
        />
        <HowitworksCard
        
          image="mobile-purchase.png"
          title="Purchase Electricty Token"
          description="Select Disco to purchase any token amount of your 
choice at alltimes"
        />
        <HowitworksCard
          image="check.png"
          title="Get Token"
          description="Token is generated on screen and sent via SMS/email on successful payment automatically."
        />
      </div>
    </section>
  );
};

export default Howitworks;
