"use client";

import { useEffect } from "react";

import { stagger, useAnimate, useInView } from "framer-motion";
import Link from "next/link";
import { duseSectionData } from "@/lib/data";
import CardComponent from "../our-help/card-component/page";
import { Kalam } from "next/font/google";

// font
const kalam = Kalam({ subsets: ["latin"], weight: "300" });

const staggerCards = stagger(0.2, { startDelay: 0.5 });

const DuseSection = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    animate(
      "a",
      isInView
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isInView ? staggerCards : 0,
      }
    );
  }, [isInView, animate]);

  return (
    <div ref={scope} className="h-fit flex flex-col justify-center">
      <h2
        className={`${kalam.className} text-center text-6xl text-slate-600  py-6  `}
      >
        Péče o duši
      </h2>

      <h3 className="text-2xl text-center mb-24 font-semibold font-sans text-slate-600">
        V našem centru jsme zavázáni k poskytování komplexní péče o Vaši duši a
        celkové duševní blaho. Rozumíme důležitosti péče o Vaši duševní pohodu a
        nabízíme širokou škálu služeb, které Vám pomohou dosáhnout harmonie a
        klidu ve Vašem nitru.
      </h3>

      <ul className="flex flex-wrap gap-4 justify-center">
        {duseSectionData.map((item) => {
          return (
            <Link href={item.href} key={item.id}>
              <CardComponent {...item} />
            </Link>
          );
        })}
      </ul>

      <p className="text-slate-600 py-8 lg:w-2/3 mx-auto text-center">
        S naším oddaným týmem profesionálů a podporou, kterou poskytujeme našim
        klientům, se budete cítit v bezpečí a podporováni ve své cestě k
        duševnímu blahu. Jsme tu, abychom vám pomohli objevit vaši vnitřní sílu
        a klid a dosáhli celkového duševního zdraví a štěstí.
      </p>
    </div>
  );
};

export default DuseSection;
