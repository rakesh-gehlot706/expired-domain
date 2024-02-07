"use client";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { LuRefreshCcw } from "react-icons/lu";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { FaRegFolderOpen } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SideDemo from "@/components/sidedemo/SideDemo";
import { AiOutlineDelete } from "react-icons/ai";
import { FaFolderOpen } from "react-icons/fa";

const invoices = [
  {
    paymentStatus: "jeberkowitz.com.",
    totalAmount: "24",
    paymentMethod: "",
  },
  {
    paymentStatus: "express-domains.com.",
    totalAmount: "25",
    paymentMethod: "",
  },
  {
    paymentStatus: "esoterikflirt.net.",
    totalAmount: "23",
    paymentMethod: "",
  },
  {
    paymentStatus: "tcmadridbe.org.",
    totalAmount: "18",
    paymentMethod: "",
  },
  {
    paymentStatus: "wickedunlock.com.",
    totalAmount: "29",
    paymentMethod: "",
  },
  {
    paymentStatus: "kedunlock",
    totalAmount: "27",
    paymentMethod: "",
  },
  {
    paymentStatus: "tcmadridbe.or",
    totalAmount: "22",
    paymentMethod: "",
  },
  {
    paymentStatus: "jeberkowitz.com.",
    totalAmount: "24",
    paymentMethod: "",
  },
  {
    paymentStatus: "express-domains.com.",
    totalAmount: "25",
    paymentMethod: "",
  },
  {
    paymentStatus: "esoterikflirt.net.",
    totalAmount: "23",
    paymentMethod: "",
  },
  {
    paymentStatus: "tcmadridbe.org.",
    totalAmount: "18",
    paymentMethod: "",
  },
  {
    paymentStatus: "wickedunlock.com.",
    totalAmount: "29",
    paymentMethod: "",
  },
  {
    paymentStatus: "kedunlock",
    totalAmount: "27",
    paymentMethod: "",
  },
  {
    paymentStatus: "tcmadridbe.or",
    totalAmount: "22",
    paymentMethod: "",
  },
  {
    paymentStatus: "jeberkowitz.com.",
    totalAmount: "24",
    paymentMethod: "",
  },
  {
    paymentStatus: "express-domains.com.",
    totalAmount: "25",
    paymentMethod: "",
  },
  {
    paymentStatus: "esoterikflirt.net.",
    totalAmount: "23",
    paymentMethod: "",
  },
  {
    paymentStatus: "tcmadridbe.org.",
    totalAmount: "18",
    paymentMethod: "",
  },
  {
    paymentStatus: "wickedunlock.com.",
    totalAmount: "29",
    paymentMethod: "",
  },
  {
    paymentStatus: "kedunlock",
    totalAmount: "27",
    paymentMethod: "",
  },
  {
    paymentStatus: "tcmadridbe.or",
    totalAmount: "22",
    paymentMethod: "",
  },
];

function PrivateDomain() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <SideDemo />
        <div className="w-full h-[1100px] bg-[#f5f7fa]">
          <div className="w-[98%] h-[1050px] mt-5 border-blue-950 bg-white items-center m-auto p-5 shadow-blue-800">
            <div className="w-full h-full border">
              <div className="w-full  h-12  flex items-center">
                <h1 className="mt-2 ml-2 text-m text-blue-900">
                  Private Domain
                </h1>
                <Select>
                  <SelectTrigger className="w-[70px] mt-1 ml-2 text-xs text-blue-900">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>25</SelectLabel>
                      <SelectItem
                        className="text-xs text-blue-900"
                        value="apple"
                      >
                        25
                      </SelectItem>
                      <SelectItem
                        className="text-xs text-blue-900"
                        value="banana"
                      >
                        50{" "}
                      </SelectItem>
                      <SelectItem
                        className="text-xs text-blue-900"
                        value="blueberry"
                      >
                        75
                      </SelectItem>
                      <SelectItem
                        className="text-xs text-blue-900"
                        value="grapes"
                      >
                        100{" "}
                      </SelectItem>
                      <SelectItem
                        className="text-xs text-blue-900"
                        value="pineapple"
                      >
                        200{" "}
                      </SelectItem>
                      <SelectItem
                        className="text-xs text-blue-900"
                        value="pineapple"
                      >
                        500{" "}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Button className="mt-1 ml-4 bg-[#79be6d] text-white">
                  <LuRefreshCcw /> Refresh
                </Button>
                <Select>
                  <SelectTrigger className="w-[120px] mt-1 ml-2 bg-[#79be6d] text-white">
                    <SelectValue placeholder="Deploy to..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Deploy to..</SelectLabel>
                      <SelectItem className="flex" value="apple">
                        Connect to EBN
                        <IoSettings />
                      </SelectItem>
                      <SelectItem className="flex" value="banana">
                        Connect to Bulk By Hosting
                        <IoSettings />
                      </SelectItem>
                      <SelectItem className="flex" value="blueberry">
                        Connect to Lounch CDN
                        <IoSettings />
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Button className="mt-1 ml-4 bg-[#79be6d] text-white">
                  <AiOutlineDelete /> Delete
                </Button>
                <Button className="mt-1 ml-4 bg-[#79be6d] text-white ">
                  <FaFolderOpen /> Import Domains
                </Button>
            
                <Sheet>
                  <SheetTrigger>
                  
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Are you absolutely sure?</SheetTitle>
                      <SheetDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
              <div>
                <Table className="border-1 scroll-hidden">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-center border bg-gradient-to-b from-slate-200">
                        <div className="items-center justify-center">
                          <Checkbox id="terms" />
                        </div>
                      </TableHead>
                      <TableHead className="text-center border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        Domain
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        TF
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        CF
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200text-xs text-blue-900 ">
                        Maj BL
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        Maj RD
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        Maj TO
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        Maj Lang
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        Site Lang
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        Moz DA
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        Moz PA
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        Age
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        WS Score
                      </TableHead>
                      <TableHead className="text-center  text-white from-slate-200 bg-[#1f2937] text-xs">
                        WS Redirects
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        WS Parked
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        WS A/ History
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        WS Drops
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        Google Index
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        Out Links Internal
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        Out Links External
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        Out Domains External
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        Date Aded
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  {/* <TableBody className="border">
                    {invoices.map((invoice) => (
                      <TableRow className="border" key={invoice.invoice}>
                        <TableCell className="font-medium">
                          {invoice.invoice}

                        </TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right">
                          {invoice.totalAmount}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody> */}
                  <TableFooter>
                    {/* <TableRow>
                      <TableCell colSpan={3}>Total</TableCell>
                      <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow> */}
                  </TableFooter>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivateDomain;
