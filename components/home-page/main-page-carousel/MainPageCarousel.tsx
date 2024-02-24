"use client";

import Image from "next/image";

// shadcn
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// images
import preview9 from "@/public/images/preview/preview9.jpg";
import preview13 from "@/public/images/preview/preview13.jpg";
import preview10 from "@/public/images/preview/preview10.jpg";

// framer motion
import { motion } from "framer-motion";

const MainPageCarousel = () => {
  const images = [preview9, preview13, preview10];

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 1 }}
      viewport={{ once: true }}
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        orientation="vertical"
        className="w-full sm:max-w-[25rem] max-w-60 hover:cursor-grab "
      >
        <CarouselContent className="h-96 ">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center items-center pt-1 "
            >
              <Image src={image} alt="image" className="h-[300px]" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </motion.div>
  );
};

export default MainPageCarousel;
