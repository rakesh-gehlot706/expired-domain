"use client";
import NAVIGATION_CONFIG from "../../navigation.config";
import classNames from "classnames";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { LuX } from "react-icons/lu";
import { GoTriangleRight } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import wsLogo from "../../app/assets/rbimg.png";
import { FaBars } from "react-icons/fa6";

const AppSidebar: React.FC = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [openSubmenuId, setOpenSubmenuId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isToggleSidebar, setNaveToggle] = useState(false);

  const path = usePathname();
  const router = useRouter();

  
  const wrapperClasses = classNames(
    "h-screen relative float-left pt-5 md:h-screen pb-4 bg-white flex flex-col justify-between",
    {
      "w-64": !toggleCollapse,
      "w-20": toggleCollapse,
    }
  );
  const collapseIconClasses = classNames(
    "p-2 rounded-full bg-white cursor-pointer",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  const handleCloseSidebar = () => {
    setNaveToggle(true);
  };

  const handleSubmenuToggle = (id: number) => {
    setOpenSubmenuId(openSubmenuId === id ? null : id); // Toggle the submenu based on its ID
  };

  return (
    <div
      className={`${
        isMobile
          ? "sticky z-50 h-screen w-11/12 bg-white pb-4 pt-5 overflow-y-auto"
          : wrapperClasses
      }`}
      style={{
        transition: "width 300ms cubic-bezier(0.2, 0, 0, 1)",
      }}
    >
      <div className="flex flex-col ">
        <div className="relative flex items-center justify-between">
          <div
            className={`transition-width mr-5 flex items-center gap-4 duration-00 ease-in-out`}
          >
            <div className=" flex items-center justify-center">
              <div className="md:me-24 ms-4 flex" onClick={handleSidebarToggle}>
                <FaBars
                  id="ml-2"
                  className={`${
                    !toggleCollapse
                      ? "me-3 h-6 w-12 text-m"
                      : "text-center h-6 w-12 "
                  } transition-all 
            duration-500 ease-in-out`}
                  style={{
                    width: `${10}px`,
                    height: `${10}px`,
                    marginLeft: `${7}px`,
                  }}
                />
                {!toggleCollapse && (
                  <span className="text-m sm:text-m self-center whitespace-nowrap  dark:text-white">
                    Page
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <ul className="my-6 flex flex-col">
          {NAVIGATION_CONFIG.items.map((item, index) => (
            <div key={index}>
              <li
                key={item.label.length + Math.random()}
                className={classNames(
                 
                  "text group relative z-50 mt-5 flex w-full cursor-pointer items-center justify-between gap-x-4 rounded-md bg-white p-3 active:bg-gray-200",
                  {
                    "bg-purple-600 from-[#663AB6] to-[#D7C4F9]": item.id === 1,
                  }
                )}
                onClick={() => {
                  if (item.submenu) {
                    handleSubmenuToggle(item.id);
                  } else {
                    router.push(item.path);
                  }
                }}
              >
                <Link href={`${item.path}`} className="flex items-center">
                  <item.Icon
                    className={`${
                      !toggleCollapse ? "mr-3" : "ml-3"
                    } transition-all duration-500
                  ease-in-out`}
                    color=""
                    size={30}
                  />

                  {!toggleCollapse && <span className="">{item.label}</span>}
                </Link>
                {item.submenu && (
                  <GoTriangleRight
                    className={classNames("", {
                      "rotate-90": openSubmenuId === item.id,
                      "text-[#002E6A]": path === item.path,
                      hidden: toggleCollapse,
                    })}
                    onClick={() => handleSubmenuToggle(item.id)}
                  />
                )}
              </li>
              {item.submenu && openSubmenuId === item.id && (
                <ul>
                  {item.submenuItems.map((submenuItem, index) => (
                    <>
                      <Link
                        className="relative"
                        key={index}
                        href={submenuItem.path}
                        prefetch
                      >
                        {!toggleCollapse && (
                          <span className="absolute -top-7 left-4 block h-12 w-52  rounded-bl-md border border-b-2 border-l-2 border-r-0 border-t-0 " />
                        )}
                        <li
                          key={index}
                          className={`text-xs relative  z-50 mx-8 my-2 w-3/4 cursor-pointer items-center gap-x-4 rounded bg-white p-2 py-2 text-[#323232] hover:bg-slate-50 ${
                            toggleCollapse && "hidden"
                          } ${
                            path === submenuItem.path ? " bg-[#F1F2F4]" : ""
                          }`}
                        >
                          <Link href={submenuItem.path} prefetch>
                            {submenuItem.label}
                          </Link>
                        </li>
                      </Link>
                    </>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(AppSidebar);
