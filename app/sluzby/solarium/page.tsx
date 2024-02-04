import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Solarium = () => {
  const solarium = [
    {
      id: 1,
      title: 'Bezpečné umělé Slunce',
      desc: 'Naše solárium využívá moderní technologie, která simuluje přirozené sluneční záření, poskytujíc vám opálení bez rizika předávkování UV zářením.',
    },
    {
      id: 2,
      title: 'Opálení s okamžitými výsledky',
      desc: 'Začněte si užívat opálení již po první návštěvě. Naše solárium poskytuje okamžité výsledky, které zdůrazní vaši přirozenou krásu.',
    },
    {
      id: 3,
      title: 'Péče o pokožku',
      desc: 'S naším soláriem získáte nejen hezké opálení, ale také péči o pokožku. Speciální lůžko je navrženo pro minimalizaci rizika přeexponování a poskytuje hydrataci.',
    },
    {
      id: 4,
      title: 'Celoroční Slunce',
      desc: 'Bez ohledu na to, zda je venku zima nebo léto, můžete si dopřát sluníčko kdykoliv. Naše solárium vám umožní udržet si opálení po celý rok.',
    },
    {
      id: 5,
      title: 'Relaxační prostředí',
      desc: 'Pohodlné lůžko, jemné osvětlení a klidná atmosféra vám umožní relaxovat během opalování, což přináší do vašeho dne moment klidu a odpočinku.',
    },
  ];

  return (
    <section className=' min-h-screen max-w-7xl mx-auto flex flex-col pt-20 sm:pt-0 gap-8 py-10  px-4 '>
      <h2 className='font-bold text-5xl mb-4  text-center sm:mt-[12rem]'>Solárium</h2>

      <p className='text-slate-600'>
        Naše solárium vám přináší zážitek ze slunění bez nutnosti opouštět
        pohodlí našeho wellness centra. Připravte se na unikátní setkání se
        slunečním světlem a jeho mnoha přínosy pro vaši pokožku a celkový stav.
      </p>

      <Accordion type='single' collapsible>
        {solarium.map((item) => (
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

export default Solarium;
