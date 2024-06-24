import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
import { TbGridDots } from "react-icons/tb";
import LogoutButton from "./logout-button";
import { auth } from "@/auth";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="w-full py-4 px-8 flex justify-between items-center">
      {/* <Image
        src="/logo.svg"
        width={40}
        height={40}
        alt="Snapchat logo"
        className="cursor-pointer"
      />
      <Input type="text" placeholder="Search..." className="rounded-full" />
      <div className="flex space-x-1">
        <Button className="bg-transparent hover:bg-primary/5 text-black">
          Stories
        </Button>
        <Button
          asChild
          className="bg-transparent hover:bg-primary/5 text-black"
        >
          <Link href={"/spotlight"}> Spotlight</Link>
        </Button>
        <Button
          asChild
          className="bg-transparent hover:bg-primary/5 text-black"
        >
          <Link href={"/chat"}> Chat</Link>
        </Button>
      </div>
      <div className="flex space-x-2">
        <Button
          size={"icon"}
          variant={"secondary"}
          className="rounded-full bg-white text-black"
        >
          <TbGridDots size={"24px"} />
        </Button>
        {!session && (
          <Button
            asChild
            className="bg-black text-white rounded-full p-3 text-xs md:text-sm"
          >
            <Link href={"/login"}>Login</Link>
          </Button>
        )}
        <Button className="rounded-full">Download</Button>
        {session?.user && <LogoutButton />}
      </div> */}
    </header>
  );
};
export default Navbar;
