"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const d = localStorage.getItem("positiond");
    if (d !== null) {
      setPositiond(d);
    }
  }, []);
  const [positiond, setPositiond] = useState<string>("");
  useEffect(() => {
    if (positiond) {
      localStorage.setItem("positiond", positiond);
    }
  }, [positiond]);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={cn(
        pathname === "/"
          ? `${position} top-5 z-50 h-[10vh] w-full pt-0`
          : `${position} top-0 z-50 h-[10vh] w-full bg-menubackground py-4`,
      )}
    >
      {/*big screen */}
      <div className="hidden px-4 lg:block lg:px-20">
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
              href={"/about-us"}
              className="font-open_sans text-sm font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
            >
              About<span className="text-xl text-[#FEC679]">+</span>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="cursor-pointer">
                <div className="font-open_sans text-sm font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]">
                  Food<span className="text-xl text-[#FEC679]">+</span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 rounded-none bg-[#070d0f]">
                <DropdownMenuRadioGroup
                  value={positiond}
                  onValueChange={setPositiond}
                >
                  <Link href="/a-la-carte">
                    <DropdownMenuRadioItem value="carte">
                      A La Carte
                    </DropdownMenuRadioItem>
                  </Link>
                  <Link href="/breakfast-lunch">
                    <DropdownMenuRadioItem value="lunch">
                      Breakfast & Lunch
                    </DropdownMenuRadioItem>
                  </Link>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/drinks"
              className="font-open_sans text-sm font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
            >
              Drinks<span className="text-xl text-[#FEC679]">+</span>
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
      <div className="block px-4 lg:hidden lg:px-20">
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
      <div className="w-full border-b-[1px] border-b-[rgba(254,198,121,0.38)] pt-4 md:pt-6" />
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
