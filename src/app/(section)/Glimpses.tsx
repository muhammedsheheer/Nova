"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import React from "react";
import { Pause, Play } from "lucide-react";

const Glimpses: React.FC = () => {
  const videoRefs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ];
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRefs.forEach((videoRef) => videoRef.current?.pause());
    } else {
      videoRefs.forEach((videoRef) => videoRef.current?.play());
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="h-full w-full bg-[#070D0F] px-4 py-12 md:px-0">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative h-[300px] w-full md:h-[400px] md:w-[33%]">
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <h3 className="bg-gradient-to-b from-[#FFF500] to-[#635440] bg-clip-text font-open_sans text-3xl font-[400] uppercase text-transparent md:text-7xl">
              NOVA
            </h3>
          </div>

          <video
            ref={videoRefs[0]}
            muted={isMuted}
            className="h-full w-full object-cover"
          >
            <source src="/video/bg.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative flex h-[300px] w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-t-full md:h-[400px] md:w-[33%]">
          <button
            onClick={togglePlayPause}
            className="absolute z-10 flex items-center justify-center"
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#fec679] bg-[#fec679] transition-transform duration-300 hover:scale-110">
              {isPlaying ? (
                <Pause size={32} color="#000" />
              ) : (
                <Play size={32} color="#000" />
              )}
            </div>
          </button>

          <video
            ref={videoRefs[1]}
            muted={isMuted}
            className="h-full w-full rounded-t-full object-cover"
          >
            <source src="/video/video1.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative h-[300px] w-full md:h-[400px] md:w-[33%]">
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <h3 className="bg-gradient-to-b from-[#FFF500] to-[#635440] bg-clip-text font-open_sans text-3xl font-[400] uppercase text-transparent md:text-7xl">
              GLIMPSES
            </h3>
          </div>
          <video
            ref={videoRefs[2]}
            muted={isMuted}
            className="h-full w-full object-cover"
          >
            <source src="/video/video3.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Glimpses;
