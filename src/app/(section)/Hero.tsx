import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative h-[100vh] w-full bg-[rgba(0,0,0,0.65)] bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/images/home/reservation/bg.png')" }}
    >
      <div className="relative flex h-full flex-col items-center justify-center gap-3 text-white">
        <h1 className="font-open_sans bg-gradient-to-b from-[#FEC679] to-[#635440] bg-clip-text text-4xl font-[400] uppercase text-transparent md:tracking-[15px] lg:text-5xl">
          WELCOME TO{" "}
        </h1>

        <h1
          className="font-open_sans text-5xl font-[400] uppercase md:tracking-[15px] lg:text-7xl"
          style={{
            background: "linear-gradient(180deg, #FBCC71 0%, #40382D 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          NOVA{" "}
        </h1>

        <div className="flex flex-col gap-4 pt-4 md:flex-row md:pt-8">
          <Link href={"/menu"}>
            <Button className="relative z-40 rounded-none bg-white px-7 py-6 font-oswald text-lg font-[400] leading-[25px] tracking-[1px] text-[#000000] lg:mt-4">
              View Menu
            </Button>
          </Link>
          <Link href={"/menu"}>
            <Button className="relative z-40 rounded-none bg-white px-7 py-6 font-oswald text-lg font-[400] leading-[25px] tracking-[1px] text-[#000000] lg:mt-4">
              View Menu
            </Button>
          </Link>
        </div>
      </div>

      <div className="z-5 absolute left-0 top-0 h-full w-full bg-black bg-opacity-50"></div>
    </section>
  );
};

export default Hero;
