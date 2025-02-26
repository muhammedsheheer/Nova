import Image from "next/image";
import Link from "next/link";
import React from "react";

const Follow: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#070D0F] px-4 py-12 md:px-[50px] md:py-24 2xl:px-[100px]">
      <div className="flex flex-col gap-5">
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="w-full md:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/image1.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-full"
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-2 md:mt-16 md:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/insta.svg"}
                width={160}
                height={160}
                alt="logo"
                className="w-12"
              />
              <Link
                href={""}
                target="_blank"
                className="font-poppins text-md text-center font-[400] lowercase text-[#C9AB81] md:text-xl"
              >
                @novaparkroyal{" "}
              </Link>
            </div>
            <div className="w-full md:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/image2.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-full"
              />
            </div>
            <div className="w-full md:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/image3.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-full"
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="flex w-full items-center justify-center md:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/image5.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-full"
              />
            </div>
            <div className="w-full md:w-[50%]">
              {" "}
              <Image
                src={"/images/home/follow/image4.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-full"
              />
            </div>

            <div className="flex w-full items-center justify-center md:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/image6.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
