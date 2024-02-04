import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Cenik = () => {
  const cenik = [
    {
      id: 1,
      title: 'Masáže ',
      ceny: [
        {
          id: 6,
          title: 'Klasická relaxační masáž (60 min)',
          cena: '800 Kč',
        },
        {
          id: 7,
          title: 'Terapeutická masáž (90 min)',
          cena: '1 200 Kč',
        },
        {
          id: 8,
          title: 'Masáž zad a krku (45 min)',
          cena: ' 600 Kč',
        },
      ],
    },
    {
      id: 2,
      title: 'Vacushape ',
      ceny: [
        {
          id: 9,
          title: 'Jednotlivá seance Vacushape (30 min)',
          cena: '600 Kč',
        },
        {
          id: 10,
          title: 'Balíček 10 seancí Vacushape',
          cena: '5 500 Kč',
        },
      ],
    },
    {
      id: 3,
      title: 'Lymfodrenáže ',
      ceny: [
        {
          id: 11,
          title: 'Lymfodrenážní masáž (60 min)',
          cena: '900 Kč',
        },
        {
          id: 12,
          title: 'Lymfodrenáž na obličej (30 min)',
          cena: '500 Kč',
        },
      ],
    },
    {
      id: 4,
      title: 'Solarium ',
      ceny: [
        {
          id: 13,
          title: 'Jednotlivá návštěva solária (20 min) ',
          cena: '150 Kč',
        },
        {
          id: 14,
          title: 'Předplacený balíček 5 návštěv solária',
          cena: '600 Kč',
        },
      ],
    },
    {
      id: 5,
      title: 'Poradenství o stravě ',
      ceny: [
        {
          id: 15,
          title: 'Individuální konzultace s nutričním poradcem (60 min) ',
          cena: '1 000 Kč',
        },
        {
          id: 16,
          title: 'Personalizovaný plán stravování',
          cena: '500 Kč',
        },
      ],
    },
  ];

  return (
    <section className='min-h-screen max-w-7xl mx-auto pt-20 sm:pt-0 flex flex-col gap-8 px-4 '>
      <h2 className='font-bold text-5xl mb-4 sm:mt-[12rem] text-center'>Ceník</h2>
      <h3 className='text-slate-600'>
        V našem Vital Centru Rajnochovice vytváříme prostředí, kde péči o zdraví
        spojujeme s osobním přístupem. Jsme tu proto, abychom vám přinesli
        komplexní wellness zážitek, který poskytuje úlevu pro tělo, harmonii pro
        mysl a odpočinek pro duši. Představujeme naše hlavní nabídky:
      </h3>
      <ul>
        {cenik.map((item) => (
          <Card
            className='text-slate-600 shadow-none border-none'
            key={item.id}
          >
            <CardHeader className='sm:text-4xl text-3xl bg-slate-50 py-2'>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {item.ceny.map((item) => (
                  <li key={item.id} className='list-disc ml-4 mb-1'>
                    <CardDescription>
                      {item.title} - {item.cena}
                    </CardDescription>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </ul>

      <p className='text-slate-600 pb-11'>
        Ve Vital Centrum Rajnochovice klade každý člen našeho týmu důraz na
        odbornost a péči. Naše služby jsou navrženy tak, aby splnily vaše
        individuální potřeby a představily vám cestu k celkovému zdraví a
        pohodě. Přijďte si k nám dopřát zážitek, který podporuje vaše tělo,
        posiluje vaši duši a napomáhá zdravému životnímu stylu.
      </p>
    </section>
  );
};

export default Cenik;
