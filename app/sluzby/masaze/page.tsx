import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Masaze = () => {
  const typyMasazi = [
    {
      id: 1,
      title: 'Masáže zad a šíje',
      desc: ' Masáž zad a šíje je terapeutický proces, který se zaměřuje na uvolnění svalového napětí v oblasti horní části těla.  Během této masáže masér používá různé techniky, včetně hlazení, tření a tlaku, k dosažení relaxace svalů a zlepšení průtoku krve. Cílem masáže je snížit bolest a nepohodlí spojené s napětím v zadní a krční oblasti, často způsobenými špatným držením, stresovými faktory nebo dlouhým sezením u počítače.Masáž může zvýšit flexibilitu svalů a zlepšit pohyblivost v krční páteři, což má příznivý vliv na celkovou pohodu a postavení těla.Tato terapeutická procedura je oblíbená pro své schopnosti poskytnout okamžitou úlevu a relaxaci, a to jak fyzicky, tak i psychicky.',
      vhodnePro: [
        {
          id: 7,
          title: 'Osoby s bolestmi a napětím v oblasti zad a krku',
        },
        {
          id: 8,
          title: 'Osoby se sedavým způsobem života',
        },
        {
          id: 9,
          title: 'Osoby v neustálém stresu',
        },
        {
          id: 10,
          title: 'Sportovce',
        },
        {
          id: 11,
          title: 'Osoby hledající celkovou relaxaci',
        },
      ],
    },
    {
      id: 2,
      title: 'Sportovní',
      desc: ' Sportovní masáž je specifický typ masáže navržený pro sportovce a aktivní jednotlivce. Tato masážní technika se zaměřuje na potřeby svalů používaných během konkrétních sportů nebo fyzických aktivit.',
      vhodnePro: [
        {
          id: 12,
          title: 'Sportovce',
        },
        {
          id: 13,
          title: 'Rekreační Sportovce',
        },
        {
          id: 14,
          title: 'Osoby Po Intenzivním Tréninku',
        },
        {
          id: 15,
          title: 'Osoby S Chronickým Napětím',
        },
        {
          id: 16,
          title: 'Osoby Se Zraněními',
        },
      ],
    },
    {
      id: 3,
      title: 'Baňkování',
      desc: ' Baňková masáž, známá také jako baňkování, je tradiční čínská léčebná technika, při které jsou skleněné nebo plastové baňky (často vyrobené z bambusu) přiloženy na tělo a vytvoří se podtlak. Tato technika využívá odsávání vzduchu z baňek, což způsobuje přitahování kůže a tkání směrem nahoru do baňky. Baňky se poté ponechávají na těle po určitou dobu nebo se posouvají po povrchu kůže, což má stimulovat cirkulaci krve, uvolňovat svalové napětí a podporovat léčbu různých onemocnění.',
      vhodnePro: [
        {
          id: 17,
          title: 'Osoby se svalovým napětím a bolestí',
        },
        {
          id: 18,
          title: 'Sportovce',
        },
        {
          id: 19,
          title: 'Lidi s problémy s cirkulací krve',
        },
        {
          id: 20,
          title: 'Osoby hledající relaxaci',
        },
        {
          id: 21,
          title: 'Lidi trpící chronickými bolestmi',
        },
      ],
    },
  ];

  return (
    <section className=' h-screen max-w-7xl mx-auto flex flex-col gap-8 justify-center'>
      <h2 className='font-bold text-5xl mb-4 text-center mt-[30rem]'>Masáže</h2>
      {typyMasazi.map((masaz) => {
        return (
          <Card key={masaz.id} className='flex flex-col text-slate-600 shadow-none border-none'>
            <CardHeader className='sm:text-4xl text-3xl bg-slate-50 py-2 '>
              <CardTitle>{masaz.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className='py-4'>{masaz.desc}</CardDescription>
              <h4 className='italic'>Pro koho je tato masáž vhodná?</h4>
              <ul >
                {masaz.vhodnePro.map((item) => {
                  return (
                    <li className='font-light list-disc ml-6'>{item.title}</li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
};

export default Masaze;
