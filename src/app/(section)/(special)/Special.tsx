"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import Link from "next/link";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
  const { modelData } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#000] py-12">
      <div className="absolute bottom-[200px] right-[15%] z-50 hidden md:block">
        <Link
          href={"/table-booking"}
          className="font-open_sans relative z-50 rounded-[12px] border border-[#CCAD64] bg-transparent px-7 py-4 text-sm font-medium uppercase tracking-wide text-gray-300 transition-all before:absolute before:inset-0 before:rounded-[12px] before:border before:border-[#CCAD64] before:bg-transparent hover:bg-[#CCAD64] hover:text-black before:hover:bg-[#CCAD64]/30"
        >
          Book Now
        </Link>
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden"></div>
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        <div className="flex w-full flex-col items-center justify-center gap-3 md:flex-row">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="font-birthstone text-sm font-[400] tracking-[0.76px] text-[#C9AB81] md:text-base">
                highlights{" "}
              </span>
              <h6 className="font-open_sans text-center text-2xl font-[400] uppercase text-[#C9AB81] md:text-3xl md:tracking-[10px]">
                What’s special for <br /> you{" "}
              </h6>
              <Link
                href={"/table-booking"}
                className="font-open_sans relative rounded-[12px] border border-[#CCAD64] bg-transparent px-7 py-4 text-sm font-medium uppercase tracking-wide text-gray-300 transition-all before:absolute before:inset-0 before:rounded-[12px] before:border before:border-[#CCAD64] before:bg-transparent hover:bg-[#CCAD64] hover:text-black before:hover:bg-[#CCAD64]/30 md:hidden"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
        <div className="relative z-50 flex min-h-[400px] w-full flex-col justify-center px-2">
          {modelData && <EmblaCarousel slides={modelData} options={OPTIONS} />}
        </div>
      </div>
    </section>
  );
};

export default Special;
