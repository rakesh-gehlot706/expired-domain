import Navbar from '@/components/navbar/Navbar'
import Sidebar from '@/components/sidebar/Sidebar'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
// import { Table } from '@/components/ui/table'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import SideDemo from '@/components/sidedemo/SideDemo'


const invoices = [
  {
    invoice: ".com",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: ".org",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: ".net",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
 
]

function RegistrarCompare() {
  return (
  <>
  <Navbar/>
  <div className='flex'>
  <SideDemo/>

  <div className='w-full bg-[#f5f7fa]'>
    <div className='ml-6 mt-4 border-b-2 p-5' >
    <h1 className='text-xl ml-2 mt-2 '>
      Registrar Compare
    </h1>
    </div>
    <div className='w-[300px] m-auto mt-4 flex'>
    <Input className='rounded-none rounded-l-md bg-white' type="email" placeholder="Type a Domain Name..." />
    <Button className='rounded-none rounded-r-md'>Search</Button>
    </div>
    <div>
    <Table className='border mt-4 text-center'>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader className='border text-center'>
        <TableRow className='border text-center'>
          <TableHead className="w-[100px] border text-center"></TableHead>
          <TableHead className='border text-center'>New</TableHead>
          <TableHead className='border text-center'>Renew </TableHead>
          <TableHead className="text-center border">Transfer</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow className='text-center' key={invoice.invoice}>
            <TableCell className="font-medium border text-center">{invoice.invoice}</TableCell>
            <TableCell className='text-left border'>{invoice.paymentStatus}</TableCell>
            <TableCell className='text-center border'>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-center border">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        {/* <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-center">$2,500.00</TableCell>
        </TableRow> */}
      </TableFooter>
    </Table>
    </div>
  

  </div>
  </div>

  <div className="w-full h-20  bg-[#1f2937]">
        <h1 className="text-white pt-4 pl-20">@ WS-Expired Domain</h1>
      </div>
 
  </>
  )
}

export default RegistrarCompare
