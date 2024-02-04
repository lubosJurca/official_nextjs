'use client';

import preview1 from '@/public/images/preview/preview1.jpg';
import preview2 from '@/public/images/preview/preview2.jpg';
import preview3 from '@/public/images/preview/preview3.jpg';
import preview4 from '@/public/images/preview/preview4.jpg';
import preview5 from '@/public/images/preview/preview5.jpg';
import preview6 from '@/public/images/preview/preview6.jpg';
import preview7 from '@/public/images/preview/preview7.jpg';
import preview8 from '@/public/images/preview/preview8.jpg';
import preview9 from '@/public/images/preview/preview9.jpg';
import preview10 from '@/public/images/preview/preview10.jpg';
import preview11 from '@/public/images/preview/preview11.jpg';
import preview12 from '@/public/images/preview/preview12.jpg';
import preview13 from '@/public/images/preview/preview13.jpg';
import preview14 from '@/public/images/preview/preview14.jpg';
import preview15 from '@/public/images/preview/preview15.jpg';
import preview16 from '@/public/images/preview/preview16.jpg';
import preview17 from '@/public/images/preview/preview17.jpg';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { Suspense } from 'react';
import Loading from './loading';

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

const Galerie = () => {
  const imageGallery = [
    {
      src: preview1,
      id: 1,
    },
    {
      src: preview2,
      id: 2,
    },
    {
      src: preview3,
      id: 3,
    },
    {
      src: preview4,
      id: 4,
    },
    {
      src: preview5,
      id: 5,
    },
    {
      src: preview6,
      id: 6,
    },
    {
      src: preview7,
      id: 7,
    },
    {
      src: preview8,
      id: 8,
    },
    {
      src: preview9,
      id: 9,
    },
    {
      src: preview10,
      id: 10,
    },
    {
      src: preview11,
      id: 11,
    },
    {
      src: preview12,
      id: 12,
    },
    {
      src: preview13,
      id: 13,
    },
    {
      src: preview14,
      id: 14,
    },
    {
      src: preview15,
      id: 15,
    },
    {
      src: preview16,
      id: 16,
    },
    {
      src: preview17,
      id: 17,
    },
  ];

  return (
    <div className='flex flex-col flex-wrap  gap-4 min-h-screen px-4  '>
      <h2 className='font-bold text-5xl mb-4 sm:mt-[12rem]  text-center'>
        Galerie
      </h2>
      <Suspense fallback={<Loading />}>
        <ul className='flex flex-wrap justify-center gap-4'>
          {imageGallery.map((image) => (
            <motion.li
              variants={fadeInAnimationVariants}
              initial='initial'
              animate='animate'
              viewport={{
                once: true,
              }}
              custom={image.id}
              key={image.id}
              className='h-44'
            >
              <Image
                src={image.src}
                alt='image name'
                width={300}
                className='h-full'
              />
            </motion.li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
};

export default Galerie;
