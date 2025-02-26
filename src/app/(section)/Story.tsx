import Image from "next/image";
import Link from "next/link";
import React from "react";

const Story: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#070D0F] px-4 py-12 md:px-14 md:py-20">
      <div className="absolute right-[12%] hidden md:block">
        <Link
          href={"/table-booking"}
          className="font-open_sans relative rounded-[12px] border border-[#CCAD64] bg-transparent px-7 py-4 text-sm font-medium uppercase tracking-wide text-gray-300 transition-all before:absolute before:inset-0 before:rounded-[12px] before:border before:border-[#CCAD64] before:bg-transparent hover:bg-[#CCAD64] hover:text-black before:hover:bg-[#CCAD64]/30"
        >
          Book Now
        </Link>
      </div>
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-10">
          <div className="flex flex-col items-center justify-center md:gap-2">
            <span className="font-birthstone text-sm font-[400] tracking-[0.76px] text-[#C9AB81] md:text-base">
              Our Story
            </span>
            <h6 className="font-open_sans text-center text-2xl font-[400] uppercase text-[#C9AB81] md:text-3xl md:tracking-[10px]">
              What makes us unique{" "}
            </h6>
            <Link
              href={"/table-booking"}
              className="font-open_sans relative mt-2 rounded-[12px] border border-[#CCAD64] bg-transparent px-7 py-4 text-sm font-medium uppercase tracking-wide text-gray-300 transition-all before:absolute before:inset-0 before:rounded-[12px] before:border before:border-[#CCAD64] before:bg-transparent hover:bg-[#CCAD64] hover:text-black before:hover:bg-[#CCAD64]/30 md:hidden"
            >
              Book Now
            </Link>
          </div>
          <div>
            <p className="font-lora w-full max-w-[500px] text-center text-sm font-[400] lowercase leading-[150%] text-[#9C9E9F] md:text-base">
              We blend Mediterranean elegance with bold Pan-Asian flavours,
              crafting innovative sushi and premium seafood dishes using the
              finest ingredients. Every bite offers a perfect balance of
              tradition, freshness, and unforgettable taste.
            </p>
          </div>
        </div>
        <div className="mt-5 flex w-full flex-col justify-center gap-6 md:flex-row md:justify-between md:gap-8">
          <div className="w-full md:w-[25%]">
            <Image
              src={"/images/home/story/image1.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[250px] w-full object-cover md:h-[350px]"
            />
          </div>
          <div className="w-full md:w-[50%]">
            <Image
              src={"/images/home/story/image2.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[350px] w-full md:h-[550px]"
            />
          </div>
          <div className="w-full md:w-[25%]">
            <Image
              src={"/images/home/story/image3.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[250px] w-full object-cover md:h-[350px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
