"use client";

import Image from "next/image";

// types
import { GalleryProps } from "@/lib/types";

// framer motion
import { motion } from "framer-motion";

// animation variants
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.07 * index,
      },
    };
  },
};

const Gallery = ({ data }: GalleryProps) => {
  return (
    <div className="flex flex-col flex-wrap  gap-4  px-4 mt-8 mb-8  ">
      <ul className="flex flex-wrap justify-center gap-4">
        {data.map((image, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            animate="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            key={index}
            className="h-44"
          >
            <Image
              src={image.src}
              alt="image name"
              width={320}
              className="h-full"
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
