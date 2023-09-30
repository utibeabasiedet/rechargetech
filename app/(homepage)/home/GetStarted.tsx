
'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
// import axios from "axios";
import Image from "next/image";
import CustomButton from "./CustomBotton";
import { QuickLoginRequest } from "@/types/account";
import { setUserToken } from "@/services/utilities";
import http from "../../../services/httpServices";
import Link from "next/link";


const API_BASE_URL = "https://api.myrecharge.ng";



const Searchbar: React.FC = () => {
   const router = useRouter(); // Get the router object
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const router=useRouter()

  const handleSubmit = async () => {
    if (!phoneNumber.trim()) {
      // Check if the input is empty or contains only whitespace
      alert("Please enter a valid phone number.");
      return;
    }

    try {
      setIsLoading(true);

      const form: QuickLoginRequest = { phoneNumber };

      const response = await http.post(
        `${API_BASE_URL}/myrecharge/account/quick-register`,
        form
      );

      const securityToken = response.data?.response?.securityToken;

      if (securityToken) {
        setUserToken(securityToken);
        alert("Token set successfully!");
        console.log(securityToken);
        console.log(response.data);
        router.push("/buyelectricity");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing your request.");
    } finally {
      setIsLoading(false);
      setPhoneNumber(""); // Clear the input field
    }
  };

  return (
    <form action="" className="md:flex md:space-x-2 mt-[50px]">
      <div className="flex  space-x-2 h-[52px]  border border-primary-1 mb-[16px]  placeholder:text-sm rounded-md px-2 py-2.5">
        <Image
          src="/assets/images/home/nigeria.png"
          height={24}
          width={36}
          alt="hero"
          className="object-contain w-auto"
        />

        <input
          type="text"
          className="h-full  bg-transparent outline-none"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

<CustomButton
        title={isLoading ? "Loading..." : "Get Started"}
        btnType="button"
        containerStyles="border border-primary h-full bg-primary  text-white rounded-md min-w-[100px] w-full md:max-w-[140px]"
        handleClick={() => handleSubmit()}
        disabled={isLoading}
      />

      
    </form>
  );
};

export default Searchbar;





