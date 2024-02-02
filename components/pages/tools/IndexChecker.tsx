"use client";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { VscThreeBars } from "react-icons/vsc";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import SideDemo from "@/components/sidedemo/SideDemo";



function IndexChecker() {
  return (
   <>
    <Navbar />
      <div className="flex">
        <SideDemo />
        <div className="w-full h-[1100px] border-2 bg-[#f5f7fa]">
          <div className="text-center ">
          <h1 className="text-3xl font-semibold mt-2 text-[#037ac8]">
      <FcGoogle className="inline-block mr-2 text-[#037ac8]" />
      Google Index Checker
    </h1>
            <p className="p-10 text-xl text-[#037ac8] ">
            Check the index status of pages in bulk, with WS Google Index Checker Tool
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 ">
            <div className="border-2 h-[600px] ml-[100px] rounded-sm">
              <h1 className="ml-6 flex text-xl text-[#037ac8]"> 
              <VscThreeBars className="text-[#037ac8] w-6 h-6" />
              URLs(Max 100)</h1>
              <div>
                <Textarea
                  className="w-[550px] h-[200px] items-center justify-center bg-white ml-2"
                  placeholder='hello'
                />
              </div>
              <div>
                <div className="grid w-full lg:max-w-sm items-center gap-1.5">
                  <Label className="ml-6 mt-2" htmlFor="picture">
                    or upload a file with domains (Max 30,000)
                  </Label>
                  <Input
                    className="ml-2 mt-2 w-[110px] border-2 h-[40px] bg-gray  hover:bg-white"
                    id="picture"
                    type="File"
                    placeholder="Drag & Drop or Browse Your File"
                  />
                </div>
              </div>

              <div className="mt-4">
              <Select>
      <SelectTrigger className="w-[540px] ml-2 bg-white">
        <SelectValue placeholder="Select State" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select</SelectLabel>
          <SelectItem value="apple">India</SelectItem>
          <SelectItem value="banana">US</SelectItem>
          <SelectItem value="blueberry">china</SelectItem>
          <SelectItem value="grapes">Russia</SelectItem>
          <SelectItem value="pineapple">Nepal</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
                
              </div>

              <div className="ml-2 mt-4 flex flex-end">
                <Button>Submit</Button>
              </div>
            </div>
            <div className="border-2 mr-[100px] bg-white rounded-sm"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-20  bg-[#1f2937]">
        <h1 className="text-white pt-4 pl-20">@ WS-Expired Domain</h1>
      </div>
   </>
  )
}

export default IndexChecker
