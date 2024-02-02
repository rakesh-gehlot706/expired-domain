"use client";
import Navbar from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
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
import { MdImageSearch } from "react-icons/md";
import SideDemo from "@/components/sidedemo/SideDemo";

function WaybackExpert() {
  return (
    <>
      <Navbar />

      <div className="flex">
        <SideDemo />
        <div className="w-full h-[1100px]">
          <div className="w-full h-20  pt-4 bg-[#e2e8f0] ">
            <h1 className="font-bold text-center text-3xl items-center justify-center">
              Wayback Explorer
            </h1>
            <p className="text-center items-center justify-center">
              Super easy to use! Enter domain name, select a date from the drop
              down, click Submit
            </p>
          </div>

          <div className="flex w-full h-[100px] bg-slate-200">
            <Input
              className="  w-[400px] bg-white ml-[350px] mt-8 "
              type="text"
              id="password"
              placeholder="Enter a Domain Name"
            />
            <Select>
              <SelectTrigger className="w-[300px] mt-8 ml-4 border bg-white">
                <SelectValue placeholder="Select Domain" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Domain</SelectLabel>
                  <SelectItem value="apple">Name of Domain</SelectItem>
                  <SelectItem value="banana">Name of Domain</SelectItem>
                  <SelectItem value="blueberry">Name of Domain</SelectItem>
                  <SelectItem value="grapes">Name of Domain</SelectItem>
                  <SelectItem value="pineapple">Name of Domaine</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button className="mt-8 ml-6">Submit</Button>
          </div>

          <div className="w-full h-[888px] bg-slate-200 mt-2">
            <div className="w-[80%] h-[600px] bg-white border-4 border-indigo-200 border-t-slate-200 m-auto mt-4 ">
              <p className="text-xl text-center items-center justify-centers mt-8">
                You have not explored any domains yet
              </p>
              <div className="w-[200px] h-[200px]  m-auto mt-4 flex items-center justify-center">
                <MdImageSearch size={'8rem'} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-20  bg-[#1f2937]">
        <h1 className="text-white pt-4 pl-20">@ WS-Expired Domain</h1>
      </div>
    </>
  );
}

export default WaybackExpert;
