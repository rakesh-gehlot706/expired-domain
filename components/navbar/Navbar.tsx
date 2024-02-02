"use client";
import React from "react";
import Image from "next/image";
import wsImg from "../../app/assets/rbimg.png"
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
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { Textarea } from "@/components/ui/textarea";

import { IoHome } from "react-icons/io5";
import { GiDetour } from "react-icons/gi";
import { BiSolidVideos } from "react-icons/bi";
import { IoMdHelpCircle } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

function Navbar() {
  return (
    <>
      <div className="w-full h-[55px] bg-[#26313c] flex  ">
        <Image src={wsImg} alt="Logo" className="h-10 w-20 ml-2 mt-2" />
        <h1 className="text-xl font-semibold text-white align-middle justify-center ml-2 mt-3">
          WS-Expired Domain
        </h1>
        <Input
          className="w-[150px] bg-white ml-2 mt-2 border-none outline-none text-xs"
          type="text"
         
          // placeholder="Enter Keyword..."
        />
        <Button className="ml-4 mt-2 " variant="outline">
          <IoSearchOutline />
        </Button>
        {/* <Dialog>
          <DialogTrigger asChild>
            <div>
              <Button className="ml-4 mt-2" variant="outline">
                +
              </Button>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle> Type Domians or Upload a File</DialogTitle>
              <DialogDescription>
                <Textarea placeholder="Enter your domais details." />
                <p>Or upload a file with domains</p>
              </DialogDescription>
            </DialogHeader>

            <div className="flex">
              <Button className="w-[100px] text-m bg-[#26313c] text-white ">
                Choose file
              </Button>
              <p className="mt-1 ml-1">No choosen file</p>
            </div>
            <DialogFooter>
              <Button className="bg-[#26313c]" type="submit">
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog> */}
          {/* <Dialog>
      <DialogTrigger asChild>
        <Button className="ml-4 mt-2" variant="outline">+</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog> */}
<div>
  
</div>
<Sheet>
      <SheetTrigger  asChild>
        <Button className="ml-4 mt-2" variant="outline">+</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-center">WS Expire Domain</SheetTitle>
          <SheetDescription className="text-center">
           Start Searching Millions of Domains Now..
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4 ">
            <Label htmlFor="name" className="text-right">
              First Name
            </Label>
            <Input id="name" value="" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4 ">
            <Label htmlFor="name" className="text-right">
             Last Name
            </Label>
            <Input id="name" value="" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Your Email
            </Label>
            <Input id="username" value="" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Your Business
            </Label>
            <Input id="username" value="" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Login</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="ml-4 mt-2" variant="outline">
              <HiOutlineBars3 />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle> Your Domain Lists</DialogTitle>
              <DialogDescription>
                <Textarea />
                <p>You have no Domain List</p>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Button className="ml-4 mt-2" variant="outline">
          <FaFilter />
        </Button>
        
        <div className="ml-[490px]">
        <Button className="ml-4 mt-2 bg-[#26313c] outline-none border-none" >
        <IoHome />
        </Button>
        <Button className="ml-4 mt-2 bg-[#26313c] outline-none border-none" >
        <GiDetour />
        </Button>
        <Button className="ml-4 mt-2 bg-[#26313c] outline-none border-none">
        <BiSolidVideos />
        </Button>
        <Button className="ml-4 mt-2 bg-[#26313c] outline-none border-none">
        <IoSettings />
        </Button>
        <Button className="ml-4 mt-2 bg-[#26313c] outline-none border-none">
        <CgProfile />
        </Button>
         

        </div>


      </div>
    </>
  );
}

export default Navbar;
