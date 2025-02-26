"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full bg-[#000] px-4 pt-12 lg:px-10 lg:pt-24">
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-1">
          <div className="w-full border-b-[1px] border-b-[rgba(201,171,129,0.40)] md:w-[45%]" />
          <Link href={"/"}>
            <Image
              src={"/images/home/hero/logo.png"}
              width={281}
              height={74}
              alt="logo"
              className="w-20 md:w-32"
            />
          </Link>
          <div className="w-full border-b-[1px] border-b-[rgba(201,171,129,0.40)] md:w-[45%]" />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start">
          <div className="flex w-full flex-col items-center justify-center gap-4 md:ml-16 md:w-[48%] md:flex-row md:justify-start md:gap-8">
            <div className="flex flex-col gap-3">
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#C9AB81]"
              >
                Our Food
              </Link>
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#C9AB81]"
              >
                Drinks menu{" "}
              </Link>
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#C9AB81]"
              >
                Private DINING{" "}
              </Link>
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#C9AB81]"
              >
                What’s on{" "}
              </Link>
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#C9AB81]"
              >
                Our policy{" "}
              </Link>
            </div>
          </div>
          <div className="hidden h-[100px] w-full border-r-[1px] border-r-[rgba(201,171,129,0.40)] md:block md:w-[1%]" />
          <div></div>
        </div>
        <div></div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
