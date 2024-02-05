import { useState } from 'react';
import Link from 'next/link';

// shadcnUI
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// framer motion
import { motion } from 'framer-motion';

// data
import { navData } from '@/lib/data';

interface NavProps {
  handleClick: () => void;
}


// ******************** Nav component*******************
const Nav = ({ handleClick }: NavProps) => {
  const [isTriggered, setIsTriggered] = useState(false);

  const handleTrigger = () => {
    setIsTriggered(prevstate => !prevstate);
  };

  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className='text-center flex flex-col justify-evenly h-full '
    >
      {navData.map((item, index) => {
        if (item.subMenu) {
          return (
            <Accordion
              type='single'
              className='flex justify-center items-center'
              collapsible
              key={index}
            >
              <AccordionItem
                value='item-1'
                className='flex flex-col justify-center'
              >
                <AccordionTrigger
                  onClick={handleTrigger}
                  className={`${
                    isTriggered ? 'bg-slate-800 text-white ' : 'null'
                  } font-bold rounded hover:bg-slate-800 hover:text-white hover:no-underline  p-2`}
                >
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className='flex flex-col'>
                  {item.subMenuItems?.map((item, index) => (
                    <li
                      key={index}
                      onClick={handleClick}
                      className=' inline-block hover:scale-110 transition-all font-bold p-2  rounded'
                    >
                      <Link href={item.href}>{item.title}</Link>
                    </li>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        } else {
          return (
            <li
              key={index}
              onClick={handleClick}
              className='border-b inline-block hover:scale-110 transition-all font-bold p-2 hover:bg-slate-800 rounded hover:text-white'
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          );
        }
      })}
    </motion.ul>
  );
};

export default Nav;
