import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';


const Lymfodrenaze = () => {
  const lymfodrenazniMasaz = [
    {
      id: 1,
      title: 'Odkud Pochází?',
      desc: 'Lymfodrenážní masáž vychází z jemných pohybů a lehkého tlaku, které podporují lymfatický systém, pomáhají odplavovat toxiny a nastartovat přirozený proces detoxikace.',
    },
    {
      id: 2,
      title: 'Proč Zvolit Lymfodrenáž?',
      desc: 'Tato masážní technika není jen o uvolnění svalů – je to o revitalizaci vašeho těla od základů. Pomáhá eliminovat otoky, bojovat s celulitidou a posilovat váš imunitní systém.',
    },
    {
      id: 3,
      title: 'Pro Koho Je To Ideální?',
      desc: 'Lymfodrenážní masáž je skvělá pro každého, kdo touží po osvěžení a podpoře pro svůj lymfatický systém. Zvláště užitečná pro ty, kteří se potýkají s otoky nebo hledají regeneraci a posílení imunity.',
    },
    {
      id: 4,
      title: 'Pocit Lehkosti a Harmonie',
      desc: 'Po lymfodrenážní masáži zažijete lehkost těla a duše, přičemž se spojí revitalizace s hlubokým pocitem harmonie.',
    },
    {
      id: 5,
      title: 'Jedinečný Přístup',
      desc: 'Naše profesionální terapeutky přistupují k lymfodrenážní masáži individuálně, poskytují péči šitou na míru vašim potřebám a garantují jedinečný zážitek.',
    },
  ];

  return (
    <section className=' min-h-screen max-w-7xl mx-auto flex flex-col pt-20 sm:pt-0 gap-8 py-10 px-4 '>
      <h2 className='font-bold text-5xl mb-4 sm:mt-[10rem] text-center'>Lymfodrenáže</h2>

      <p className='text-slate-600'>
        Lymfodrenážní masáž je jemný a účinný způsob, jak podpořit přirozený tok
        lymfy v těle, eliminovat toxiny a dosáhnout celkového pocitu lehkosti a
        vitality.
      </p>

      <Accordion type='single' collapsible>
        {lymfodrenazniMasaz.map((item) => (
          <AccordionItem value={item.title} key={item.id}>
            <AccordionTrigger className='hover:bg-slate-50 pl-4'>{item.title}</AccordionTrigger>
            <AccordionContent className='text-slate-600 pl-4'>
              {item.desc}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <p className='text-slate-600'>
        Přijďte si dopřát jedinečnou lymfodrenážní masáž a dejte svému tělu
        šanci na obnovení a harmonii. Zarezervujte si svou masáž a posunejte své
        zdraví na novou úroveň!
      </p>
    </section>
  );
};

export default Lymfodrenaze;
