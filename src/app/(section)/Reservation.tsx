import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Reservation: React.FC = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/home/reservation/bg.png')" }}
    >
      <div className="absolute bottom-0 left-4 right-4 md:left-[30%] md:right-[30%]">
        <div className="flex w-full flex-col items-center justify-center gap-4 rounded-t-[300px] bg-[#070D0F] px-8 py-16 md:gap-8 md:px-20 md:py-24 2xl:py-32">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-2">
              <span className="font-birthstone text-2xl font-[400] tracking-[0.76px] text-[#C9AB81]">
                Reservation{" "}
              </span>
            </div>
            <div className="flex flex-row items-center justify-center gap-2 md:gap-5">
              <Image
                src={"/images/home/reservation/left.svg"}
                width={281}
                height={74}
                alt="image"
                className="w-10"
              />
              <h6 className="text-center font-open_sans text-2xl font-[400] uppercase text-[#C9AB81] md:text-3xl md:tracking-[10px]">
                Reserve <br />
                Your Table
              </h6>
              <Image
                src={"/images/home/reservation/right.svg"}
                width={281}
                height={74}
                alt="image"
                className="w-10"
              />
            </div>
          </div>
          <div>
            <p className="w-full max-w-[500px] text-center font-lora text-sm font-[400] lowercase leading-[150%] text-[#9C9E9F] md:text-base">
              Lorem ipsum dolor sit amet, consectet adipisicing eli sed do eiu
              sm od tempor incididunt ut abore et dolore mag aliqua. Ut enim ad
              minm eniam quis nostrud.
            </p>
          </div>
          <div className="mt-5">
            <Link href={"/table-booking"}>
              <Button
                className="relative z-40 mt-4 flex items-center justify-center gap-3 px-10 py-7 uppercase"
                variant="imageoutline"
              >
                Book Now{" "}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
