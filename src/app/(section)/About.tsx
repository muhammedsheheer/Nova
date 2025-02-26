import Image from "next/image";
import React from "react";

const About: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#070D0F] py-12 md:h-screen">
      <div className="absolute right-[26%] top-[100px] hidden md:block">
        <div className="flex flex-col items-start justify-center gap-2">
          <span className="font-birthstone text-sm font-[400] tracking-[0.76px] text-[#C9AB81] md:text-base">
            Our Story
          </span>
          <p className="font-lora w-full max-w-[300px] text-sm font-[400] lowercase leading-[150%] text-[#9C9E9F] md:text-base">
            Welcome to Nova, where gastronomy meets entertainment for an
            unparalleled experience in Park Royal! At Nova, we invite you to
            enjoy the finest steaks and sushi whilst you enjoy the lively
            atmosphere as we host live music and DJ nights, ensuring that your
            dining experience is not just a meal but a celebration. Nova is your
            ultimate destination for those seeking a perfect blend of exquisite
            cuisine and vibrant entertainment. Join us, and let Nova in Park
            Royal redefine your expectations of gastronomic delight and
            nightlife.
          </p>
        </div>
      </div>
      <div className="absolute left-[18%] top-[110px] hidden md:block">
        <h6 className="font-open_sans text-center text-2xl font-[400] uppercase text-[#C9AB81] md:text-3xl md:tracking-[10px]">
          ABOUT US
        </h6>
      </div>
      <div className="absolute left-[20%] top-[200px] hidden md:block">
        <div className="relative">
          <div className="absolute left-[280px]">
            <div className="relative">
              <div className="absolute bottom-0 right-0">
                <Image
                  src={"/images/home/about/n2.png"}
                  width={281}
                  height={74}
                  alt="logo"
                  className="h-[470px] w-full"
                />
              </div>
              <Image
                src={"/images/home/about/n1.png"}
                width={281}
                height={74}
                alt="logo"
                className="h-[350px] w-[300px]"
              />
            </div>
          </div>
          <Image
            src={"/images/home/about/bg.png"}
            width={281}
            height={74}
            alt="logo"
            className="h-[500px] w-[500px]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:hidden md:flex-row md:gap-0">
        <div className="flex w-full flex-col items-center justify-center gap-4 md:w-[60%]">
          <h6 className="font-open_sans text-center text-2xl font-[400] uppercase text-[#C9AB81] md:text-4xl md:tracking-[10px]">
            ABOUT US
          </h6>

          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute right-0">
                  <Image
                    src={"/images/home/about/n2.png"}
                    width={281}
                    height={74}
                    alt="logo"
                    className="h-[200px] w-full"
                  />
                </div>
                <Image
                  src={"/images/home/about/n1.png"}
                  width={281}
                  height={74}
                  alt="logo"
                  className="h-[200px] w-[200px]"
                />
              </div>
            </div>

            <Image
              src={"/images/home/about/bg.png"}
              width={281}
              height={74}
              alt="logo"
              className="h-[350px] w-[350px]"
            />
          </div>
        </div>
        <div className="w-full md:w-[40%]">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="font-birthstone text-sm font-[400] tracking-[0.76px] text-[#C9AB81] md:text-base">
              Our Story
            </span>
            <p className="font-lora w-full max-w-[300px] text-sm font-[400] lowercase leading-[150%] text-[#9C9E9F] md:text-base">
              Welcome to Nova, where gastronomy meets entertainment for an
              unparalleled experience in Park Royal! At Nova, we invite you to
              enjoy the finest steaks and sushi whilst you enjoy the lively
              atmosphere as we host live music and DJ nights, ensuring that your
              dining experience is not just a meal but a celebration. Nova is
              your ultimate destination for those seeking a perfect blend of
              exquisite cuisine and vibrant entertainment. Join us, and let Nova
              in Park Royal redefine your expectations of gastronomic delight
              and nightlife.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
