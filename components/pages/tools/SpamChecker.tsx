"use client";
import Navbar from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";
// import Sidebar from '@/components/sidebar/Sidebar'
import React from "react";
import { FaFlagCheckered } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { MdHideSource } from "react-icons/md";
import { PiExportFill } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Sidebar from "@/components/sidebar/Sidebar";
import SideDemo from "@/components/sidedemo/SideDemo";

function SpamChecker() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <SideDemo />
        <div className=" flex w-full h-[1100px] bg-[#f5f7fa]  grid-cols-2 gap-12">
          <div className="w-[47%] h-[500px]  bg-[#f5f7fa] ml-8">
            <div className=" flex w-[full] h-20 border-2">
              <Button className="w-[100px] mt-4 ml-8 p-3  border-blue-900">
                <FaFlagCheckered />
                Start
              </Button>
              <Button className="w-[100px] mt-4 p-3 ml-8  border-blue-900">
                <LuRefreshCw />
                Refresh
              </Button>
              <Button className=" w-[100px] mt-4 p-3 ml-8  border-blue-900">
                <MdHideSource />
                Hide
              </Button>
              <Button className="w-[100px] mt-4 p-3 ml-8  border-blue-900 ">
                SZ Score
              </Button>
              <Button className="w-[100px] mt-4 p-3 ml-8  border-blue-900 ">
                <PiExportFill />
                Export
              </Button>
            </div>
            <div className="w-full h-[450px] mt-2 border-2">
              <div className="w-full h-10 border-2 grid grid-cols-5 gap-4">
                <div className="...">
                  <Select>
                    <SelectTrigger className="w-[100px] text-black">
                      <SelectValue />
                      <FaChevronDown />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel></SelectLabel>
                        <SelectItem value="apple">Select All</SelectItem>
                        <SelectItem value="banana">Unselect All</SelectItem>
                        <SelectItem value="blueberry">Clear</SelectItem>
                        <SelectItem value="grapes">Suspicious</SelectItem>
                        <SelectItem value="pineapple">Approved</SelectItem>
                        <SelectItem value="pineapple">Spam</SelectItem>
                        <SelectItem value="pineapple">Error</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="..."> Domain</div>
                <div className="...">Result</div>
                <div className="...">SZ Score </div>
                <div className="...">Clean/Span</div>
              </div>
            </div>
          </div>

          <div className="w-[48%] h-[700px] border-2 bg-white text-2xl text-center justify-center items-center">
            Select A Domain From The List.
          </div>
        </div>
      </div>
      <div className="w-full h-20  bg-[#1f2937]">
        <h1 className="text-white pt-4 pl-20">@ WS-Expired Domain</h1>
      </div>
    </>
  );
}

export default SpamChecker;
