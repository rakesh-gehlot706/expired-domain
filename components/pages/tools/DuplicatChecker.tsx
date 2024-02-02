"use client";
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { VscThreeBars } from "react-icons/vsc";
import { HiDocumentDuplicate } from "react-icons/hi";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SideDemo from "@/components/sidedemo/SideDemo";

function DuplicatChecker() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <SideDemo />
        <div className="flex-grow border-2 bg-[#f5f7fa] p-4">
          <div className="text-center">
            <h1 className="text-3xl font-semibold mt-2 text-[#037ac8]">
              <HiDocumentDuplicate className="inline-block mr-2" />
              Duplicate Checker
            </h1>
            <p className="p-4 md:p-10 text-xl text-[#037ac8]">
              Check for duplicate content in Google with the WS Duplicate Checker
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 md:ml-[10%] md:mr-[5%] rounded-sm p-4 md:p-8">
              <h1 className="flex text-xl text-[#037ac8]">
                <VscThreeBars className="text-[#037ac8] w-6 h-6 mr-2" />
                URLs (Max 100)
              </h1>
              <div className="flex flex-col md:flex-row">
                <Input
                  className="bg-white w-full md:w-[260px] rounded-none mt-2 md:mt-0"
                  placeholder="Enter Task Name"
                />
                <Select>
                  <SelectTrigger className="w-full md:w-[260px] bg-white rounded-none mt-2 md:mt-0">
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>State</SelectLabel>
                      <SelectItem value="apple">India</SelectItem>
                      <SelectItem value="banana">UK</SelectItem>
                      <SelectItem value="blueberry">US</SelectItem>
                      <SelectItem value="grapes">China</SelectItem>
                      <SelectItem value="pineapple">Japan</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <hr className="h-px my-8 w-full ml-0 md:ml-6 border-0 bg-[#037ac8]" />
              <div className="flex flex-col md:flex-row">
                <Button className="bg-white w-full md:w-[260px] mt-2 md:mt-0 md:mr-2 text-black border hover:bg-[#037ac8]">
                  Content
                </Button>
                <Button className="bg-white w-full md:w-[260px] mt-2 md:mt-0 md:mr-2 text-black border hover:bg-[#037ac8]">
                  URL
                </Button>
              </div>
              <div className="mt-4 md:mt-8">
                <Input
                  className="w-full md:w-[calc(100% - 6rem)] bg-white outline-offset-2 mt-2 md:mt-0 "
                  placeholder="Enter a List Name"
                />
              </div>
              <div className="mt-8 md:mt-20 md:mr-8 pt-6 flex justify-end">
                <Button>Submit</Button>
              </div>
            </div>
            <div className="border-2 md:mr-[10%] bg-white rounded-sm"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-20 bg-[#1f2937]">
        <h1 className="text-white pt-4 pl-4 md:pl-20">@ WS-Expired Domain</h1>
      </div>
    </>
  );
}

export default DuplicatChecker;
