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

function WaybackExpert() {
  return (
    <>
      <Navbar />

      <div className="flex">
        <Sidebar/>
        <div className="w-full h-[1100px]">
      <div className="w-full h-20  mt-6 ">
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

      <div className="w-full h-[467px] bg-slate-200 mt-2">
        <div className="w-full h-[400px] bg-white mt-4 items-center justify-center m-auto">
            <p className="text-xl text-center items-center justify-centers">You haven’t explored any domains yet</p>

        </div>

      </div>
      </div>
      </div>
      <div className="w-full h-20  bg-[#1f2937]">
          <h1 className="text-white pt-4 pl-20">
           @ WS-Expired Domain
          </h1>
      </div>
     
    </>
  );
}

export default WaybackExpert;
