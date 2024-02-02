"use client";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import SideDemo from "@/components/sidedemo/SideDemo";

function WhoisTool() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <SideDemo />
        <div className="w-full h-[1100px] border-2 bg-[#f5f7fa]">
          <div className="text-center">
            <h1 className="text-3xl font-semibold mt-2">WHOIS checker</h1>
            <p className="p-10 text-xl ">
              Supported TLDs: .com, .net, .org, .at, .be, .ca, .cc, .cl, .cn,
              .co, .co.nz, .co.uk, .co.za, .com.ar, .com.au, .com.br, .com.cn,
              .com.mc, .com.pl, .com.tr, .com.tw, .com.ua, .com.ve, .cz, .de,
              .dk, .ee, .eu, .fi, .fr, .ga, .hk, .hr, .hu, .ie, .in, .io, .ir,
              .is, .it, .jp, .kr, .kz, .lv, .ma, .me, .ml, .mx, .net.au,
              .net.br, .net.cn, .nl, .no, .nu, .pl, .ro, .ru, .se, .sg, .sk,
              .su, .tk, .tv, .tw
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 ">
            <div className="border-2 h-[600px] ml-[100px] rounded-sm">
              <h1 className="ml-6"> List of domains (Max 1,000)</h1>
              <div>
                <Textarea
                  className="w-[550px] h-[200px] items-center justify-center bg-white ml-6"
                  placeholder="Enter a Domain Name."
                />
              </div>
              <div>
                <div className="grid w-full lg:max-w-sm items-center gap-1.5">
                  <Label className="ml-6 mt-2" htmlFor="picture">
                    or upload a file with domains (Max 30,000)
                  </Label>
                  <Input
                    className="ml-6 mt-2 w-[550px] h-[100px] bg-white outline-dashed outline-2 outline-offset-2"
                    id="picture"
                    type="File"
                    placeholder="Drag & Drop or Browse Your File"
                  />
                </div>
              </div>

              <div className="mt-4">
                <Label className="ml-6 " htmlFor="picture">
                  Name your List (optional)
                </Label>
                <Input
                  className="ml-6 mt-2 w-[550px] h-[50px] bg-white  outline-offset-2"
                  placeholder="Enter a List Name"
                />
              </div>

              <div className="ml-6 mt-4 flex flex-end">
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
  );
}

export default WhoisTool;
