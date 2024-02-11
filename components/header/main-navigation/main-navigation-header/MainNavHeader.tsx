import { motion } from 'framer-motion';
import { Kalam } from 'next/font/google';

import { Phone,MapPin } from 'lucide-react';

const variants = {
  hidden: { y: -200 },
  enter: { y: 0 },
};

const kalam = Kalam({ subsets: ['latin'], weight: '300' });

const MainNavHeader = () => {
  return (
    <div className='flex w-full justify-between items-center px-4 border-b text-slate-600'>
        <h5 className='flex gap-2'><MapPin />Rajnochovice 181</h5>
      <motion.h1
        variants={variants}
        initial='hidden'
        animate='enter'
        transition={{ type: 'linear' }}
        className={`${kalam.className} text-center text-4xl py-6  `}
        viewport={{ once: true }}
      >
        Vital Centrum Rajnochovice
      </motion.h1>
      <h5 className='flex gap-2'><Phone />+420 606 325 561</h5>
    </div>
  );
};

export default MainNavHeader;
