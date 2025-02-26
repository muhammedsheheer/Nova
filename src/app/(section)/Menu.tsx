import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Menu: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] px-4 py-12 md:px-24 md:py-20 2xl:px-40">
      <div className="absolute inset-0 hidden items-center justify-center md:flex">
        <Image
          src={"/images/home/about/bg.png"}
          width={281}
          height={74}
          alt="logo"
          className="h-[700px] w-[600px]"
        />
      </div>
      <div className="flex h-full w-full flex-col items-center gap-4">
        <div className="flex flex-col items-center justify-center gap-1 md:pb-8">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="font-birthstone text-sm font-[400] tracking-[0.76px] text-[#C9AB81] md:text-base">
              Menu{" "}
            </span>
            <h6 className="font-open_sans text-center text-2xl font-[400] uppercase text-[#C9AB81] md:text-3xl md:tracking-[10px]">
              WHat’s in the menu{" "}
            </h6>
          </div>
        </div>

        <div className="mt-6 grid w-full gap-8 md:grid-cols-2 md:gap-20 2xl:gap-40">
          <div className="flex flex-col gap-6 md:gap-14">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={`left-item-${item}`}
                className="flex w-full flex-row items-center justify-center gap-0"
              >
                <div className="flex w-auto flex-col md:w-[488px]">
                  <p className="font-inter text-base font-[600] uppercase text-[#C9AB81] md:text-lg md:tracking-[3px]">
                    NOVA MEZE PLATTER (V){" "}
                  </p>
                  <p className="font-inter text-sm font-[300] text-[rgba(255,255,255,0.60)] md:text-base">
                    Homemade Hummus, Baba Ghanoush, Cacik, Couscous With
                    Caponata & Bread{" "}
                  </p>
                </div>
                <div className="flex items-center gap-1 md:mb-12">
                  <div className="*: flex flex-col gap-0">
                    <div className="h-1 w-[150px] border-b-[1px] border-b-[#715B3E]" />
                    <div className="h-1 w-[150px] border-b-[1px] border-b-[#715B3E]" />
                  </div>
                  <p className="flex font-inter text-lg font-[500] uppercase tracking-[0.57px] text-[#C9AB81]">
                    £16{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6 md:gap-14">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={`left-item-${item}`}
                className="flex w-full flex-row items-center justify-center gap-0"
              >
                <div className="flex w-auto flex-col md:w-[488px]">
                  <p className="font-inter text-base font-[600] uppercase text-[#C9AB81] md:text-lg md:tracking-[3px]">
                    NOVA MEZE PLATTER (V){" "}
                  </p>
                  <p className="font-inter text-sm font-[300] text-[rgba(255,255,255,0.60)] md:text-base">
                    Homemade Hummus, Baba Ghanoush, Cacik, Couscous With
                    Caponata & Bread{" "}
                  </p>
                </div>
                <div className="flex items-center gap-1 md:mb-12">
                  <div className="*: flex flex-col gap-0">
                    <div className="h-1 w-[150px] border-b-[1px] border-b-[#715B3E]" />
                    <div className="h-1 w-[150px] border-b-[1px] border-b-[#715B3E]" />
                  </div>
                  <p className="flex font-inter text-lg font-[500] uppercase tracking-[0.57px] text-[#C9AB81]">
                    £16{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Button className="font-poppins mt-5 rounded-none bg-[#896E47] px-10 py-6 text-sm font-[500] tracking-[0.65px] text-white hover:text-black md:mt-8">
            View Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
