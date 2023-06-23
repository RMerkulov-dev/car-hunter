"use client";

import Link from "next/link";
import { CustomButton } from "@/components/index";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

const NavBar = () => {
  //check auth
  const session = useSession();

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
        <div>
          {session?.data ? (
            // <CustomButton
            //   title="Sign in"
            //   btnType="button"
            //   containerStyles="text-white rounded-full bg-orange-400 min-w-[130px] font bold"
            // />
            <div className="flex gap-3 items-center justify-center">
              <Link href="#">
                <Image
                  src={`${session?.data?.user?.image}`}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Link>
              <Link href="#" onClick={() => signOut()}>
                <CustomButton
                  title="Log Out"
                  btnType="button"
                  containerStyles="text-white rounded-full bg-orange-400 min-w-[130px] font bold"
                />
              </Link>
            </div>
          ) : (
            <Link href="#" onClick={() => signIn()}>
              <CustomButton
                title="Sign in"
                btnType="button"
                containerStyles="text-white rounded-full bg-orange-400 min-w-[130px] font bold"
              />
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
