'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface SidebarMenuItem {
  label: string;
  icon: string;
  href: string;
}

const SidebarMenu: React.FC = () => {
  const router = useRouter();
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);

  const topMenuItems: SidebarMenuItem[] = [
    {
      label: "Dashboard",
      icon: "/assets/images/dashboard/home.png",
      href: "/",
    },
    {
      label: "Buy Electricity",
      icon: "/assets/images/dashboard/electric-sign.png",
      href: "/buyelectricity",
    },
    {
      label: "Transactions",
      icon: "/assets/images/dashboard/clock.png",
      href: "/transactions",
    },
    {
      label: "Card Management",
      icon: "/assets/images/dashboard/credit-card.png",
      href: "/cardmanagement",
    },
    {
      label: "Saved Meters",
      icon: "/assets/images/dashboard/bookmark.png",
      href: "/savedmeters",
    },
    
    {
      label: "Your Details",
      icon: "/assets/images/dashboard/lock.png",
      href: "/details",
    },
    {
      label: "Update Password",
      icon: "/assets/images/dashboard/user-check.png",
      href: "/updatepassword",
    },
    {
      label: "Share To Friends",
      icon: "/assets/images/dashboard/share-2.png",
      href: "/contact",
    },
  ];

  const bottomMenuItem: SidebarMenuItem = {
    label: "Logout",
    icon: "/assets/images/dashboard/logout.png",
    href: "/logout",
  };

  return (
    <aside className="w-[260px] pt-[40px] bg-[#075DED] flex flex-col justify-between h-auto min-h-[125vh]">
      <ul className="flex flex-col  text-white">
        {topMenuItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <li
              className={` flex  text-white items-center space-x-2 py-[12px] px-4 ${
                activeMenuItem === item.href
                  ? "electric-gradient text-[#FF6700]"
                  : ""
              }`}
              onClick={() => setActiveMenuItem(item.href)}
            >
              <Image src={item.icon} className="text-[#FF6700]" alt={item.label} width={20} height={20} />
              <span className="text-[14px]">{item.label}</span>
              
            </li>
          </Link>
        ))}
      </ul>
      <div className="flex items-center space-x-2 border-t-[1px] border-[#4175DE] text-white pt-[24px] pb-[64px] px-4">
        <div>
          <Image src={bottomMenuItem.icon} alt={bottomMenuItem.label} width={20} height={20} />
        </div>
        <Link href={bottomMenuItem.href}>
          <span>{bottomMenuItem.label}</span>
        </Link>
      </div>
    </aside>
  );
};

export default SidebarMenu;
