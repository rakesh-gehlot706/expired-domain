"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import wsLogo from "../../app/assets/rbimg.png";

export default function Login() {
  return (
    <>
      <div className="bg-[#26313c] w-full h-16 flex items-center justify-center">
        <Image src={wsLogo} alt="Logo" className="h-10 w-20 m-2" />
        <h1 className="text-2xl font-semibold text-white ">
          WS-Expired Domain
        </h1>
      </div>
      <main className="bg-[#26313c] h-[670px] flex items-center justify-center p-10">
        <div className="grid w-full h-full grid-cols-1 bg-white ">
          <div className="bg-[#16202a] text-white flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-semibold mb-4">Login Form</h1>
            <p className="text-xs text-slate-400 mb-8">
              {/* any  description  */}
            </p>
            <form className="flex flex-col items-center w-full">
              <Button
                className="w-[250px] px-12 py-2 bg-transparent rounded-full mb-4"
                variant="outline"
              >
                Sign in with Google
              </Button>
              <Label className="text-l" htmlFor="email">
                {" "}
                Email
              </Label>
              <Input
                className="w-[250px] mt-2 mb-4 px-4 py-2 bg-transparent rounded-full"
                type="email"
                id="email"
                placeholder="Email"
              />
              <Label className="text-l" htmlFor="password">
                {" "}
                Password
              </Label>
              <Input
                className="w-[250px] mt-2 mb-4 px-4 py-2 bg-transparent rounded-full"
                type="password"
                id="password"
                placeholder="Password"
              />
              <Button
                type="submit"
                className="w-[250px] bg-indigo-600 py-2 rounded-full"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}