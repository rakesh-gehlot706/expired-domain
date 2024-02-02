"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { MdContentCopy } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import { Button } from "@/components/ui/button";

import { FaTable } from "react-icons/fa";
import { TbShieldCheckeredFilled } from "react-icons/tb";
import { RiFolderSharedFill } from "react-icons/ri";
import { PiToolboxFill } from "react-icons/pi";
import { FaBox } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaClone } from "react-icons/fa6";
import { FaListOl } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { GiBinoculars } from "react-icons/gi";
import { FaArrowAltCircleRight } from "react-icons/fa";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Sidebar(): any {
  const [sidebarWidth, setSidebarWidth] = useState(80);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState("");
  const [isSubDomainOpen, setIsSubDomainOpen] = useState(false);
  const [sidebar, setSidebar] = useState(true);
  let curval;

  const handleMenuClick = () => {
    setSidebar(!sidebar);
  };

  const handleToolsClick = (value: any) => {
    curval = value;
    setIsSubMenuOpen((prevState) => (prevState === value ? "" : value));
  };

  const handleSubMenuClick = (value: any) => {
    curval = value;
    setIsSubMenuOpen((prevState) => (prevState === value ? "" : value));
  };
  

  return (
    <div>
      
      <nav
        className={`flex h-[1100px] border-2 justify-center text-xs transition-all duration-500  bg-white
        ${sidebar ? "w-20" : "w-40"}
        `}
      >
        <ul className="space-y-12 mt-2 ">
          <li>
            <Link href="#" onClick={() => handleMenuClick()}>
              <div className="flex gap-x-4 ">
                <FaBars  />
                {!sidebar && "pages"}
              </div>
            </Link>
          </li>

          <li className="relative" id="tools">
            <Link
              className="transition-all duration-300"
              href="#"
              onClick={() => {
                handleToolsClick("tools");
              }}
            >
              <div className="flex gap-x-4  transition-all duration-300 ">
                <FaTools />
                {!sidebar && <span className="flex items-center">Tools</span>}
             </div>
            </Link>
            <div>
            {(isSubMenuOpen === "tools" || curval === "tools") && (
              <ul className="text-xs bg-black text-white w-[138px] space-y-4 absolute top-full -left-5 mt-2 border p-2 transition-all ease-in-out duration-500 ">
                <li className="flex gap-1">
                  <FaTable />
                  <Link href="/pages/tools/domainTable">Domain Table</Link>
                </li>
                <li className="flex">
                  <TbShieldCheckeredFilled />
                  <Link href="spamchecker">Spam Checker</Link>
                </li>
                <li className="flex">
                  <RiFolderSharedFill />
                  <Link href="wayback">Wayback Expert</Link>
                </li>
                <li className="flex">
                  <PiToolboxFill />
                  <Link href="whoistool">Whois Tool</Link>
                </li>
                <li className="flex">
                  <FaBox />
                  <Link href="registrarCompare">Registrar Compare</Link>
                </li>
                <li className="flex">
                  <FaGoogle />
                  <Link href="indexChecker">Index Checker</Link>
                </li>
                <li className="flex">
                  <FaClone />
                  <Link href="duplicateChecker">Duplicate Checker</Link>
                </li>
                <li className="flex">
                  <FaListOl />
                  <Link href="serpChecker">SERP Checker</Link>
                </li>
              </ul>
            )}
              </div>
          </li>

          <li id="domains">
            <Link
              className="transition-all duration-500 "
              href="/sidebar"
              onClick={() => {
                handleToolsClick("domains");
              }}
            >
              <div className="flex gap-x-4 justify-center items-center  ">
                <AiOutlineBars />
                {!sidebar && <span className="flex items-center">Domains</span>}
              </div>
            </Link>
            {(isSubMenuOpen === "domains" || curval === "domains") && (
              <ul className=" pl-4 space-y-4 mt-2  text-xs ">
                <li className="flex">
                  <FaAddressCard />
                  <Link href="pages/domain/privateDomain">Private Domain</Link>
                </li>
                <li className="flex">
                  <GiBinoculars />
                  <Link href="pages/domain/watchList">Watch List</Link>
                </li>
              </ul>
            )}
          </li>

          <li id="content">
            <Link
              className="transition-all duration-500 "
              href="/sidebar"
              onClick={() => {
                handleToolsClick("content");
              }}
            >
              <div className="flex gap-x-4 ">
                <MdContentCopy />
                {!sidebar && <span>Content</span>}
              </div>
            </Link>
            {isSubMenuOpen == "content" && (
              <ul className="pl-4 space-y-2 transition-all duration-500 text-xs">
                <li className="transition-all duration-500 text-xs">
                  <Link href="/sidebar">Content Creator</Link>
                </li>
                <li>
                  <Link href="/">SZ words usage</Link>
                </li>
              </ul>
            )}
          </li>

          <li id="setting">
            <Link
              className="transition-all duration-500 "
              href="/sidebar"
              onClick={() => {
                handleToolsClick("setting");
              }}
            >
              <div className="flex gap-x-4">
                <IoIosSettings />
                {!sidebar && <span>Setting</span>}
              </div>
            </Link>
            {isSubMenuOpen == "setting" && (
              <ul className="pl-4 space-y-2 transition-all duration-500 text-xs">
                <li className="transition-all duration-500 text-xs">
                  <Link href="/sidebar">PBN Hosting</Link>
                </li>
                <li>
                  <Link href="/">Ahrefs</Link>
                </li>
              </ul>
            )}
          </li>

          <li id="profile">
            <Link href="/">
              <div className="flex gap-x-4 ">
                <CgProfile />
                {!sidebar && <span>Profile</span>}
              </div>
            </Link>
          </li>

          <li id="credits">
            <Link href="/">
              <div className="flex gap-x-4">
                <FaRegMoneyBillAlt />
                {!sidebar && <span>Credits</span>}
              </div>
            </Link>
          </li>

          <li id="help">
            <Link href="/">
              <div className="flex gap-x-4">
                <IoMdHelpCircle />
                {!sidebar && <span>Help</span>}
              </div>
            </Link>
          </li>

          <li id="logout">
            <Link href="/">
              <div className="flex gap-x-4">
                <TbLogout />
                {!sidebar && <span>Logout</span>}
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
