"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#FFF6EB] pb-8 lg:pb-0">
      <div className="flex h-full w-full max-w-[1300px] flex-col items-start justify-center gap-4 py-12 md:py-44 md:pt-24">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 lg:gap-4">
          <h1 className="text-center font-oswald text-5xl font-[400] uppercase text-[#0D0D0D] lg:text-8xl lg:leading-[100px]">
            testimonial
          </h1>
          <Image
            src={"/images/quality/b-underline.svg"}
            width={507}
            height={12}
            alt="underline"
            className="w-[150px] object-cover lg:w-[300px]"
          />
        </div>
        <div className="flex w-full items-center justify-center p-4">
          {reviews && (
            <Carousel className="w-full px-4">
              <CarouselContent className="ml-4 flex w-full justify-center gap-4">
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className="flex w-full basis-full flex-col gap-6 rounded-none bg-[#FFF3D8] px-6 py-8 md:basis-1/2"
                  >
                    <div className="flex w-full items-center gap-2">
                      <Image
                        src={
                          review.profile_photo_url ||
                          "/images/home/reviews/pictures/anna-mathew.svg"
                        }
                        width={64}
                        height={64}
                        alt={review.author_name}
                      />
                    </div>
                    <div className="flex w-full">
                      {Array.from({ length: review.rating }).map((_, index) => (
                        <Icons.star key={index} className="text-[#dcb355]" />
                      ))}
                    </div>
                    <div className="flex flex-col gap-4">
                      <p className="line-clamp-6 font-cormorant text-sm font-[500] uppercase text-[#000] lg:leading-[120%]">
                        {review.text}
                      </p>
                      <p className="font-cormorant text-sm font-[600] uppercase leading-[120%] text-[#000]">
                        Gerrin Tom
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 transition-transform duration-300 ease-in-out">
                <CarouselPrevious className="border-[#bc995d] text-[#bc995d] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#bc995d] text-[#bc995d] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
