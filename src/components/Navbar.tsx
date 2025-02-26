"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Sidebar from "./SideBar";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`${position} top-5 z-50 h-[10vh] w-full px-4 pt-0 lg:px-20`}
    >
      {/*big screen */}
      <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-between">
          <div></div>
          <div className="flex flex-row items-center justify-center gap-14">
            <Link
              href={"/"}
              className="font-open_sans text-sm font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
            >
              Home<span className="text-xl text-[#FEC679]">+</span>
            </Link>
            <Link
              href={"/menu"}
              className="font-open_sans text-sm font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
            >
              Menu<span className="text-xl text-[#FEC679]">+</span>
            </Link>
            <Link
              href={""}
              className="font-open_sans text-sm font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
            >
              Food & Drinks<span className="text-xl text-[#FEC679]">+</span>
            </Link>
            <Link
              href={"/table-booking"}
              className="font-open_sans text-sm font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
            >
              Reservation<span className="text-xl text-[#FEC679]">+</span>
            </Link>

            <Link
              href={"/contact"}
              className="font-open_sans text-sm font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
            >
              Contact Us<span className="text-xl text-[#FEC679]">+</span>
            </Link>
          </div>
          <div className="flex items-end justify-end">
            <Sidebar>
              <Button
                variant="ghost"
                className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
              >
                <div className="flex flex-row gap-2">
                  <EqualizerIcon />
                </div>
              </Button>
            </Sidebar>{" "}
          </div>
        </div>
      </div>

      {/*mobile screen */}
      <div className="block lg:hidden">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Link href={"/"}>
              <Image
                src={"/images/home/hero/logo.png"}
                width={281}
                height={74}
                alt="logo"
                className="w-20"
              />
            </Link>
          </div>
          <div>
            <Sidebar>
              <Button
                variant="ghost"
                className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
              >
                <div className="flex flex-row gap-2">
                  <EqualizerIcon />
                </div>
              </Button>
            </Sidebar>{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  return (
    <div className="equalizer-icon rotate text-[#FEC679]">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};
