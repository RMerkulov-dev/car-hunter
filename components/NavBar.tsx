"use client";

import Link from "next/link";
import { CustomButton } from "@/components/index";
import Image from "next/image";

const NavBar = () => {
  return (
    <header className="w-full  absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center gap-4">
          <Image
            src="/nav_logo.png"
            alt="logo"
            width={30}
            height={18}
            className="object-contain"
          />
          <p className="text-blue-400 font-bold text-xl">CAR HUNTER</p>
        </Link>

        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default NavBar;
