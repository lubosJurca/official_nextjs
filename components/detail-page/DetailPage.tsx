import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

type DataArrayProps = {
  title: string;
  id: string;
  desc: string;
};

type DetailProps = {
  title: string;
  descText1: string;
  descText2: string;
  accordionData: DataArrayProps[];
};

const DetailPage = (data: DetailProps) => {
  const { title, descText1, descText2, accordionData } = data;

  return (
    <section className=" min-h-screen max-w-7xl mx-auto flex flex-col pt-20 sm:pt-0 gap-8 py-10 px-4 ">
      <h2 className="font-bold text-5xl mb-4 sm:mt-[10rem] text-center">
        {title}
      </h2>

      <p className="text-slate-600">{descText1}</p>

      <Accordion type="single" collapsible>
        {}
        {accordionData.map((item) => (
          <AccordionItem value={item.title} key={item.id}>
            <AccordionTrigger className="hover:bg-slate-50 pl-4">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 pl-4">
              {item.desc}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <p className="text-slate-600">{descText2}</p>
    </section>
  );
};

export default DetailPage;
