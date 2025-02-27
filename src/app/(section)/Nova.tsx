import Image from "next/image";
import React from "react";

const Nova: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#070D0F] px-4 py-12 md:px-20 md:py-20">
      <div className="flex flex-col gap-6 md:gap-12">
        <div>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="font-birthstone text-2xl font-[400] tracking-[0.76px] text-[#C9AB81]">
              Guests{" "}
            </span>
            <h6 className="text-center font-open_sans text-2xl font-[400] uppercase text-[#C9AB81] md:text-3xl md:tracking-[10px]">
              NOVA <br /> SUPREMACY
            </h6>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-2">
          <div className="flex w-full flex-col gap-4 md:flex-row md:gap-2">
            <div className="w-full md:w-[25%]">
              <Image
                src={"/images/home/nova/image1.png"}
                width={281}
                height={74}
                alt="image"
                className="h-[300px] w-full object-cover md:h-[400px]"
              />
            </div>
            <div className="w-full md:w-[25%]">
              <Image
                src={"/images/home/nova/image2.png"}
                width={281}
                height={74}
                alt="image"
                className="h-[300px] w-full object-cover md:h-[400px]"
              />
            </div>
            <div className="w-full md:w-[50%]">
              <Image
                src={"/images/home/nova/image3.png"}
                width={281}
                height={74}
                alt="image"
                className="h-[300px] w-full object-cover md:h-[400px]"
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 md:flex-row md:gap-2">
            <div className="w-full md:w-[50%]">
              <Image
                src={"/images/home/nova/image4.png"}
                width={281}
                height={74}
                alt="image"
                className="h-[300px] w-full object-cover md:h-[400px]"
              />
            </div>
            <div className="relative w-full md:w-[25%]">
              <div className="absolute bottom-12 left-24 md:bottom-28">
                <Image
                  src={"/images/home/nova/N.png"}
                  width={281}
                  height={74}
                  alt="image"
                  className="h-[200px] w-full"
                />
              </div>
              <Image
                src={"/images/home/nova/image5.png"}
                width={281}
                height={74}
                alt="image"
                className="h-[300px] w-full object-cover md:h-[400px]"
              />
            </div>
            <div className="w-full md:w-[25%]">
              <Image
                src={"/images/home/nova/image6.png"}
                width={281}
                height={74}
                alt="image"
                className="h-[300px] w-full object-cover md:h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nova;
