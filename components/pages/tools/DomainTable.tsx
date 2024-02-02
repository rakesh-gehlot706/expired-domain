"use client";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import React, { useState } from "react";
// import ReactPaginate from "react-paginate";
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
import { useQuery, useLazyQuery, gql, useMutation } from "@apollo/client";
import { HiVariable } from "react-icons/hi2";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { format } from "date-fns";
import { FaDotCircle } from "react-icons/fa";
import { FaCircleNotch } from "react-icons/fa";
import SideDemo from "@/components/sidedemo/SideDemo";

const GET_DATA = gql`
  query GetDomains($input: paginationInput) {
    getDomains(input: $input) {
      limit
      result {
        domain_link
        domain_length
        domain_backlinks
        domain_pop
        domain_creationDate
        domain_ACR
        domain_MMGR
        domain_DMOZ
        domain_reg
        domain_status_com
        domain_status_net
        domain_status_org
        domain_status_biz
        domain_status_info
        domain_status_de
        domain_addDate
        domain_related_cnobi
        domain_wikipedia_links
        domain_dropped
        domain_whois_status
      }
      page
      totalPage
      totalResult
    }
  }
`;
function DomainTable() {
  const [getUser, setUser] = useState("");
  const [currentPage, setCurrentPage] = useState(0); // Assuming initial page is 1
  const { data, loading, refetch } = useQuery(GET_DATA, {
    variables: {
      input: {
        page: currentPage + 1,
        limit: 15,
      },
    },
  });

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0)); // Ensure the page doesn't go below 1
  };

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        <SideDemo />

        <div className="w-full h-auto bg-[#f5f7fa]">
          <div className="w-[98%] h-[1050px] mt-5 border-blue-950 bg-white items-center m-auto p-5 shadow-blue-800">
            <div className="w-full h-full border">
              <div className="w-full h-12  border">
                <Select>
                  <SelectTrigger className="w-[180px] mt-1 ml-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel className="text-xs text-blue-900">
                        Domain
                      </SelectLabel>
                      <SelectItem
                        className="text-xs text-blue-900"
                        value="apple"
                      >
                        Domain 1
                      </SelectItem>
                      <SelectItem
                        className="text-xs text-blue-900"
                        value="banana"
                      >
                        Domain 2{" "}
                      </SelectItem>
                      <SelectItem
                        className="text-xs text-blue-900"
                        value="blueberry"
                      >
                        Domain 3{" "}
                      </SelectItem>
                      <SelectItem
                        className="text-xs text-blue-900"
                        value="grapes"
                      >
                        Domain 4{" "}
                      </SelectItem>
                      <SelectItem
                        className="text-xs text-blue-900"
                        value="pineapple"
                      >
                        Domain 5{" "}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Table className="border-1 overflow-y-scroll">
                  <TableHeader className="h-[70px]">
                    <TableRow>
                      <TableHead className=" text-center border bg-gradient-to-b from-slate-200">
                        <div className="items-center justify-center">
                          <Checkbox id="terms" className="mr-2" />
                        </div>
                      </TableHead>
                      <TableHead className="text-center border bg-gradient-to-b from-slate-200 text-xs text-blue-900 cursor-pointer">
                        Domain
                      </TableHead>
                      <TableHead
                        className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900 cursor-pointer"
                        title="The number of characters in the domain name"
                      >
                        LE
                      </TableHead>
                      <TableHead
                        className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900 cursor-pointer"
                        title="SEOkicks Domain Pop - Number of Backlinks from different Domains"
                      >
                        DP
                      </TableHead>
                      <TableHead
                        className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900 cursor-pointer"
                        title=" The Birth Year of the Domain using the Whois Creation Date as Birthday."
                      >
                        WBY
                      </TableHead>
                      {/* <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        ABY
                      </TableHead> */}
                      <TableHead
                        className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900 cursor-pointer"
                        title="  Archive.org Number of Crawl Results"
                      >
                        ACR
                      </TableHead>
                      <TableHead
                        className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900 cursor-pointer"
                        title="  Majestic Million Global Rank (smaller is better)"
                      >
                        MMGR
                      </TableHead>
                      <TableHead
                        className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900 cursor-pointer"
                        title="   Status of the Domain in Dmoz.org"
                      >
                        DMOZ
                      </TableHead>
                      <TableHead
                        className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900 cursor-pointer"
                        title="   Number of TLDs the Domain Name is Registered"
                      >
                        REG
                      </TableHead>
                      <TableHead
                        className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900 cursor-pointer"
                        title=" DNS Status .com of Domain Name"
                      >
                        C
                      </TableHead>
                      <TableHead
                        className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900 cursor-pointer"
                        title="  DNS Status .net of Domain Name"
                      >
                        N
                      </TableHead>
                      <TableHead
                        className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900 cursor-pointer"
                        title="DNS Status .org of Domain Name"
                      >
                        O
                      </TableHead>
                      <TableHead
                        className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900 cursor-pointer"
                        title=" DNS Status .biz of Domain Name"
                      >
                        B
                      </TableHead>
                      <TableHead
                        className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900 cursor-pointer"
                        title=" DNS Status .info of Domain Name"
                      >
                        I
                      </TableHead>
                      <TableHead
                        className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900 cursor-pointer"
                        title=" DNS Status .de of Domain Name"
                      >
                        D
                      </TableHead>
                      <TableHead
                        className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900 cursor-pointer"
                        title=" Date the Domain was added to the Domain List"
                      >
                        ADD DATE
                      </TableHead>
                      <TableHead
                        className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900 cursor-pointer"
                        title=" Number of Related Domains in .com/.net/.org/.biz/.info (starts with + ends with)"
                      >
                        RDT
                      </TableHead>
                      <TableHead
                        className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900 cursor-pointer"
                        title="Number of Links from *.wikipedia.org"
                      >
                        WPL
                      </TableHead>
                      <TableHead
                        className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900 cursor-pointer"
                        title=" When the domain dropped"
                      >
                        DROPPED
                      </TableHead>
                      <TableHead
                        className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900 cursor-pointer"
                        title="Status of the Domain (Available or Registered)"
                      >
                        STATUS
                      </TableHead>
                      {/* <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        PRICE
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        EXPIRE
                      </TableHead> */}
                    </TableRow>
                  </TableHeader>
                  <TableBody className="border">
                    {data?.getDomains?.result.map((item: any, key: number) => {
                      return (
                        <TableRow className="border" key={key}>
                          <TableCell className="font-medium">
                            <Checkbox id={`terms${key}`} />
                          </TableCell>
                          <TableCell className="text-left border text-xs">
                            {item.domain_link}
                          </TableCell>
                          <TableCell className="text-center border text-xs">
                            {item.domain_length}
                          </TableCell>
                          <TableCell className="text-center border text-xs">
                            {item.domain_backlinks}
                          </TableCell>
                          <TableCell className="text-center border text-xs">
                            {format(
                              new Date(item.domain_creationDate),
                              "dd/MM/yy"
                            )}
                          </TableCell>
                          {/* <TableCell className="text-center border text-xs">
                            {item.domain_length}
                          </TableCell> */}
                          <TableCell className="text-center border text-xs">
                            {item.domain_ACR.replace(/\D/g, "")}
                          </TableCell>
                          <TableCell className="text-center border text-xs">
                            {item.domain_MMGR}
                          </TableCell>
                          <TableCell className="text-center border text-xs">
                            {item.domain_DMOZ}
                          </TableCell>
                          <TableCell className="text-center border text-xs">
                            {item.domain_reg}
                          </TableCell>
                          <TableCell
                            className="text-center border text-xs "
                            style={{
                              color:
                                item.domain_status_com === "available"
                                  ? "green"
                                  : item.domain_status_com === "register"
                                  ? "red"
                                  : "red",
                            }}
                          >
                            {/* {item.domain_status_com} */}
                            <FaCircleNotch
                              title={
                                item.domain_status_com === "available"
                                  ? "Available"
                                  : "Registered"
                              }
                            />
                          </TableCell>
                          <TableCell
                            className="text-center border text-xs"
                            style={{
                              color:
                                item.domain_status_net === "available"
                                  ? "green"
                                  : item.domain_status_net === "register"
                                  ? "red"
                                  : "red",
                            }}
                          >
                            {/* {item.domain_status_net} */}
                            <FaCircleNotch
                              title={
                                item.domain_status_net === "available"
                                  ? "Available"
                                  : "Registered"
                              }
                            />
                          </TableCell>
                          <TableCell
                            className="text-center border text-xs"
                            style={{
                              color:
                                item.domain_status_org === "available"
                                  ? "green"
                                  : item.domain_status_org === "register"
                                  ? "red"
                                  : "red",
                            }}
                          >
                            {/* {item.domain_status_org} */}
                            <FaCircleNotch
                              title={
                                item.domain_status_org === "available"
                                  ? "Available"
                                  : "Registered"
                              }
                            />
                          </TableCell>
                          <TableCell
                            className="text-right border text-xs"
                            style={{
                              color:
                                item.domain_status_biz === "available"
                                  ? "green"
                                  : item.domain_status_biz === "register"
                                  ? "red"
                                  : "red",
                            }}
                          >
                            {/* {item.domain_status_biz} */}
                            <FaCircleNotch
                              title={
                                item.domain_status_biz === "available"
                                  ? "Available"
                                  : "Registered"
                              }
                            />
                          </TableCell>
                          <TableCell
                            className="text-right border text-xs"
                            style={{
                              color:
                                item.domain_status_info === "available"
                                  ? "green"
                                  : item.domain_status_info === "register"
                                  ? "red"
                                  : "red",
                            }}
                          >
                            {/* {item.domain_status_info} */}
                            <FaCircleNotch
                              title={
                                item.domain_status_info === "available"
                                  ? "Available"
                                  : "Registered"
                              }
                            />
                          </TableCell>
                          <TableCell
                            className="text-right border text-xs"
                            style={{
                              color:
                                item.domain_status_de === "available"
                                  ? "green"
                                  : item.domain_status_de === "register"
                                  ? "red"
                                  : "red",
                            }}
                          >
                            {/* {item.domain_status_de} */}
                            <FaCircleNotch
                              title={
                                item.domain_status_de === "available"
                                  ? "Available"
                                  : "Registered"
                              }
                            />
                          </TableCell>
                          <TableCell className="text-center border text-xs">
                            {format(
                              new Date(item.domain_creationDate),
                              "dd/MM/yy"
                            )}
                          </TableCell>
                          <TableCell className="text-center border text-xs">
                            {item.domain_related_cnobi}
                          </TableCell>
                          <TableCell className="text-center border text-xs">
                            {item.domain_wikipedia_links}
                          </TableCell>
                          <TableCell className="text-center border text-xs">
                            {item.domain_dropped}
                          </TableCell>
                          <TableCell
                            className="text-center border text-xs"
                            style={{
                              color:
                                item.domain_whois_status === "available"
                                  ? "green"
                                  : "red",
                            }}
                          >
                            {item.domain_whois_status}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                  <TableFooter></TableFooter>
                </Table>
                <div className="mt-6">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          className="cursor-pointer"
                          onClick={handlePrevPage}
                        />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext
                          className="cursor-pointer"
                          onClick={handleNextPage}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
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

export default DomainTable;
