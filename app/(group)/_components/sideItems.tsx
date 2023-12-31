"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { cn } from "../../../lib/utils";
import Image from "next/image";
import DropdownClose from '../../../public/dropdownClose.svg'

interface SidebarItemsProps {
  label: string;
  label2?: string;
  href: string;
  href2?: string;
  icon: string;
  icon2?: string;
  collapsible?: boolean;
}

const SidebarItems = ({
  label,
  label2,
  href,
  href2,
  icon,
  icon2,
  collapsible,
}: SidebarItemsProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  const isActive2 =
    (pathname === "/" && href2 === "/") ||
    pathname === href2 ||
    pathname?.startsWith(`${href2}/`);

  const onClick2 = () => {
   {href2 && router.push(href2)}
  };

  const [collapsed, setCollapsed] = React.useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <div
        className={cn(
          "flex items-center  gap-x-2 text-white  text-sm font-[500] pl-6 transition-all hover:cursor-pointer hover:text-white hover:bg-slate-300/20 last:mt-56",
          isActive &&
            "text-white bg-sky-200/20 hover:bg-sky-200/20 hover:text-white"
        )}
      >
        <div className="flex items-center gap-x-2 py-4 justify-between "  onClick={onClick}>
          <Image src={icon} alt={icon} />
          {label}
        </div>
        <div className="flex flex-row-reverse items-end py-4 justify-between z-50 flex-grow">
          {icon2 && (
            <div>
               <Image
              src={collapsed? DropdownClose: icon2 }
              alt={icon2}
              className="w-4 mr-3"
              onClick={toggleCollapsed}
            />
              </div>
           
          )}
        </div>

        <div
          className={cn(
            "ml-auto opacity-0 border-2 border-white h-full transition-all",
            isActive && "opacity-100 "
          )}
        />
      </div>
      {collapsed && (
        <div
        onClick={onClick2}
          className={cn(
            "flex items-center   text-white  text-sm font-[500] pl-12 transition-all hover:text-white hover:bg-slate-300/20",
            isActive2 &&
              "text-white bg-sky-200/20 hover:bg-sky-200/20 hover:text-white hover:cursor-pointer"
          )}
        >
          <div className="flex items-center gap-x-2 py-4 justify-between">
            {label2}
          </div>
        </div>
      )}
    </>
  );
};

export default SidebarItems;
