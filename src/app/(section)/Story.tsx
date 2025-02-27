import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Story: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#070D0F] px-4 py-12 md:px-14 md:py-20">
      <div className="absolute right-[12%] hidden md:block">
        <Link href={"/table-booking"}>
          <Button
            className="relative z-40 mt-4 flex items-center justify-center gap-3 px-10 py-7 uppercase"
            variant="imageoutline"
          >
            Book Now{" "}
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-10">
          <div className="flex flex-col items-center justify-center md:gap-2">
            <span className="font-birthstone text-2xl font-[400] tracking-[0.76px] text-[#C9AB81]">
              Our Story
            </span>
            <h6 className="text-center font-open_sans text-2xl font-[400] uppercase text-[#C9AB81] md:text-3xl md:tracking-[10px]">
              What makes us unique{" "}
            </h6>
            <Link href={"/table-booking"}>
              <Button
                className="relative z-40 mt-4 flex items-center justify-center gap-3 px-10 py-7 uppercase md:hidden"
                variant="imageoutline"
              >
                Book Now{" "}
              </Button>
            </Link>
          </div>
          <div>
            <p className="w-full max-w-[500px] text-center font-lora text-sm font-[400] lowercase leading-[150%] text-[#9C9E9F] md:text-base">
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
