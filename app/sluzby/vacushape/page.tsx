import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const VacuShape = () => {
  const vacuShape = [
    {
      id: 1,
      title: 'Tvarování Těla Bez Námahy',
      desc: 'VacuShape kombinuje silný podtlak s cvičením, aby vytvořil intenzivní trénink, který formuje a tvaruje vaše tělo bez námahy.',
    },
    {
      id: 2,
      title: 'Zvýšený Metabolismus',
      desc: 'Díky intenzivnímu cvičení pod podtlakem VacuShape může zvýšit váš metabolismus, což přispívá k efektivnějšímu spalování kalorií.',
    },
    {
      id: 3,
      title: 'Redukce Celulitidy',
      desc: 'VacuShape cíleně pracuje na oblastech, kde se často vyskytuje celulitida, pomáhá zlepšit strukturu kůže a dosáhnout hladšího vzhledu.',
    },
    {
      id: 4,
      title: 'Posílení Svalů',
      desc: 'Cvičení s VacuShape zahrnuje různé pohyby, které posilují svaly a zvyšují celkovou sílu a výdrž.',
    },
    {
      id: 5,
      title: 'Pohodlnost A Flexibilita',
      desc: 'VacuShape je navržen tak, aby byl pohodlný a vhodný pro různé typy cvičenců, umožňující flexibilitu v tréninku.',
    },
  ];

  return (
    <section className=' h-screen max-w-7xl mx-auto flex flex-col gap-8 justify-center px-4 '>
      <h2 className='font-bold text-5xl mb-4  text-center'>Solárium</h2>

      <p className='text-slate-600'>
        Naše solárium vám přináší zážitek ze slunění bez nutnosti opouštět
        pohodlí našeho wellness centra. Připravte se na unikátní setkání se
        slunečním světlem a jeho mnoha přínosy pro vaši pokožku a celkový stav.
      </p>

      <Accordion type='single' collapsible>
        {vacuShape.map((item) => (
          <AccordionItem value={item.title} key={item.id}>
            <AccordionTrigger className='hover:bg-slate-50 pl-4'>
              {item.title}
            </AccordionTrigger>
            <AccordionContent className='text-slate-600 pl-4'>
              {item.desc}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <p className='text-slate-600'>
        Zarezervujte si svůj čas na sluneční relaxaci a objevte výhody, které
        solárium může přinést vaší pokožce a duši. Vaše sluneční oáza v našem
        wellness centru čeká na vás!
      </p>
    </section>
  );
};

export default VacuShape;
