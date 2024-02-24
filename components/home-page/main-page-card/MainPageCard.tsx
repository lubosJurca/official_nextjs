"use client";

// next
import Link from "next/link";

// shadcn
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

// components
import AnimatedTitle from "./AnimatedTitle";

// framer motion
import { motion } from "framer-motion";

const MainPageCard = () => {
  return (
    <Card className="max-w-4xl flex flex-col h-full justify-between gap-5 border-none pt-20 sm:pt-0 text-center bg-transparent shadow-none text-slate-600 ">
      <CardHeader className="p-0">
        <CardTitle className="sm:text-7xl text-6xl lg:text-left text-center ">
          {/* Komplexní péče o tělo i duši pod jednou střechou v srdci hor.. */}
          <AnimatedTitle />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <motion.p
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="sm:mb-4 mb-8 mt-8 lg:text-left text-center px-4"
        >
          {" "}
          Vítejte v Centru Zdraví, kde se o Vaši pohodu staráme s láskou a
          odborností! Ponořte se do naší oázy klidu, kde se stírají hranice mezi
          relaxací a péčí o vaše tělo. Naše masáže šijeme na míru vašim
          potřebám, lymfodrenáž vám pomůže obnovit energii, VacuShape formuje
          vaše tělo do dokonalé harmonie a naše moderní solária vám dopřejí
          jiskřivé opálení. Vstupte do světa, kde se zdraví stává zážitkem!
        </motion.p>

        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex justify-center sm:justify-start gap-4 px-4"
        >
          <Button className="bg-slate-200 text-slate-600 hover:text-white p-2">
            {" "}
            <Link href="#telo">Péče o tělo</Link>
          </Button>
          <Button className="bg-slate-200 text-slate-600 hover:text-white p-2">
            {" "}
            <Link href="#duse">Péče o duši</Link>
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default MainPageCard;
