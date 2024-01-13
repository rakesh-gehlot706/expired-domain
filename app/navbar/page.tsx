"use client";
import React from "react";
import Image from "next/image";
import wsImg from "../assets/rbimg.png";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";

function Navbar() {
  return (
    <>
      <div className="w-full h-[45px] bg-[#0279c5] flex">
        <Image src={wsImg} alt="Logo" className="h-10 w-20 ml-2 mt-0" />
        <h1 className="text-xl font-semibold text-white align-middle justify-center ml-2 mt-1">
          WS-Expired Domain
        </h1>
        <Input
          className="w-[100px] bg-white ml-3 mt-1 border-none outline-none text-center"
          type="text"
          id="password"
          placeholder="Search"
        />
        <Dialog>
          <DialogTrigger asChild>
            <Button className="ml-[100px] mt-1" variant="outline">
              +
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle> Type Domians or Upload a File</DialogTitle>
              <DialogDescription>
                <Textarea placeholder="Type your message here." />
                <p>Or upload a file with domains</p>
              </DialogDescription>
            </DialogHeader>

            <div className="flex">
              <Button className="w-[100px] text-m text-white ">
                Choose file
              </Button>
              <p className="mt-1 ml-1">No choosen file</p>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default Navbar;
