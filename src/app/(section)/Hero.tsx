import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-40 flex h-full flex-col items-center justify-center gap-3 text-white">
        <h1 className="font-open_sans bg-gradient-to-b from-[#FEC679] to-[#635440] bg-clip-text text-4xl font-[400] uppercase text-transparent md:tracking-[15px] lg:text-7xl">
          WELCOME TO{" "}
        </h1>

        <h1
          className="font-open_sans text-5xl font-[400] uppercase md:tracking-[15px] lg:text-8xl"
          style={{
            background: "linear-gradient(180deg, #FBCC71 0%, #40382D 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          NOVA{" "}
        </h1>

        <div className="flex flex-col gap-4 pt-4 md:flex-row md:pt-8">
          <Link href={"/table-booking"}>
            <Button
              className="relative z-40 mt-4 flex items-center justify-center gap-3 px-10 py-7 uppercase"
              variant="image"
            >
              Book Table{" "}
            </Button>
          </Link>
          <Link href={"/menu"}>
            <Button
              className="relative z-40 mt-4 flex items-center justify-center gap-3 px-10 py-7 uppercase"
              variant="imageoutline"
            >
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
