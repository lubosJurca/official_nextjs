'use client';

import { useEffect, useRef } from 'react';
import CardComponent from '../our-help-card/page';

import { stagger, useAnimate, useInView } from 'framer-motion';

const staggerCards = stagger(0.2, { startDelay: 0.5 });

const OurHelp = () => {
  const nabidka = [
    {
      title: 'Relaxací a Stresovým Odpoutáním',
      desc: 'Masáže a lymfodrenáž jsou účinnými prostředky ke snížení stresu, uvolnění napětí a obnově psychické pohody.',
      id: 1,
    },
    {
      title: 'Formováním Těla',
      desc: 'Masáže a lymfodrenáž jsou účinnými prostředky ke snížení stresu, uvolnění napětí a obnově psychické pohody.',
      id: 2,
    },
    {
      title: 'Omlazením Pleti',
      desc: 'Sluneční studia a solária poskytují jemné opálení a podporují tvorbu vitamínu D, což může přispět k zářivější pleti.',
      id: 3,
    },
    {
      title: 'Podporou Obezřetného Životního Stylu',
      desc: 'S celostním přístupem ke zdraví nabízíme také rady a informace pro udržení vyváženého životního stylu.',
      id: 4,
    },
    {
      title: 'Zlepšením Krevního Oběhu',
      desc: 'Masáže mohou podporovat lepší průtok krve, což může mít pozitivní vliv na celkové zdraví.',
      id: 5,
    },
    {
      title: 'Odbouráním Toxických Látek',
      desc: 'Lymfodrenáž může podporovat odbourání toxických látek z těla, přispívající k jeho detoxikaci.',
      id: 6,
    },
  ];

  const [scope,animate] = useAnimate()
  const isInView = useInView(scope, { once: true });


  useEffect(() => {
    animate(
      "li",
      isInView
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isInView ? staggerCards : 0,
      }
    );
  },[isInView])


  return (
    <div ref={scope} className='h-full flex flex-col justify-center'>
      <h2 className='text-3xl text-center mb-24 font-semibold font-sans text-slate-600'>
        Centrum Zdraví je vaším spolehlivým průvodcem na cestě k optimálnímu
        zdraví a pohodě. Naši odborníci vám mohou pomoci:
      </h2>

      <ul className='flex flex-wrap gap-4 justify-center'>
        {nabidka.map((item) => {
          return (
            <li key={item.id}>
              <CardComponent {...item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OurHelp;
