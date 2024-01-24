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

const GET_DATA = gql`
  query GetDomains($input: paginationInput) {
    getDomains(input: $input) {
      limit
      result {
        domain_link
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
        limit: 20,
      },
    },
  });

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0)); // Ensure the page doesn't go below 1
  };

  console.log(data?.getDomains, "-->data");

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />

        <div className="w-full h-[1100px] bg-[#f5f7fa]">
          <div className="w-[98%] h-[1050px] mt-5 border-blue-950 bg-white items-center m-auto p-5 shadow-blue-800">
            <div className="w-full h-full border">
              <div className="w-full h-12  border">
                <Select>
                  <SelectTrigger className="w-[180px] mt-1 ml-2">
                    <SelectValue placeholder="Select Domain" />
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
                        Source
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        TF
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        CF
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        MAY BL
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        MAY RD
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        MAY Topics
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        Maj lang
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        Site lang
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        MOZ DA
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        MOZ PA
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        Age
                      </TableHead>
                      <TableHead className="text-center  text-white from-slate-200 bg-[#1f2937] text-xs">
                        WS Score
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        WS Redirect
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        WS Parked
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        WS A/History
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
                        Date Aded
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        Price
                      </TableHead>
                      <TableHead className="text-center  border bg-gradient-to-b from-slate-200 text-xs text-blue-900">
                        Expires
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="border">
                    {data?.getDomains?.result.map((item: any, key: number) => {
                      return (
                        <TableRow className="border" key={key}>
                          <TableCell className="font-medium">
                            {/* {invoice.invoice} */}
                            <Checkbox id="terms" />
                          </TableCell>
                          <TableCell className="border">
                            {item.domain_link}
                          </TableCell>
                          {/* <TableCell>{item.paymentMethod}</TableCell> */}
                          <TableCell className="text-right">
                            {/* {invoice.totalAmount} */}
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
