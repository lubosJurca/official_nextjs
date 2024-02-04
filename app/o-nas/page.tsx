import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AboutUs = () => {
  const aboutUs = [
    {
      id: 1,
      title: 'Masáže - Cesta k relaxaci a uvolnění:',
      desc: 'Naši vášniví maséři přinášejí různorodou škálu masáží, od relaxačních po terapeutické. Každá masáž je navržena tak, aby vám poskytla okamžitý únik od každodenního stresu a napětí.',
    },
    {
      id: 2,
      title: 'Vacushape - revoluční fitness technologie',
      desc: 'Díky intenzivnímu cvičení pod podtlakem VacuShape může zvýšit váš metabolismus, což přispívá k efektivnějšímu spalování kalorií.',
    },
    {
      id: 3,
      title: 'Lymfodrenáže - pro zdraví a harmonii:',
      desc: 'VacuShape cíleně pracuje na oblastech, kde se často vyskytuje celulitida, pomáhá zlepšit strukturu kůže a dosáhnout hladšího vzhledu.',
    },
    {
      id: 4,
      title: 'Solarium - pro zářivé opálení:',
      desc: 'V našem soláriu si můžete užít bezpečného a efektivního opalování, které dodává pleti přirozenou a zářivou barvu po celý rok.',
    },
    {
      id: 5,
      title: 'Poradenství o stravě - pro zdravý životní styl',
      desc: 'Náš tým odborníků vám poskytne individuální poradenství o stravě, abyste mohli dosáhnout optimální výživy a podporovali celkový zdravý životní styl.',
    },
  ];

  return (
    <section className=' min-h-screen max-w-7xl mx-auto flex pt-20 sm:pt-0 flex-col gap-8 px-4'>
     
      <h2 className='font-bold text-5xl mb-4  sm:mt-[12rem]  text-center'>O nás</h2>
      <h3 className="text-slate-600">
        V našem Vital Centru Rajnochovice vytváříme prostředí, kde péči o zdraví
        spojujeme s osobním přístupem. Jsme tu proto, abychom vám přinesli
        komplexní wellness zážitek, který poskytuje úlevu pro tělo, harmonii pro
        mysl a odpočinek pro duši. Představujeme naše hlavní nabídky:
      </h3>
      <ul>
        {aboutUs.map((item) => (
          <Card className="text-slate-600 shadow-none border-none" key={item.id}>
            <CardHeader className="sm:text-4xl text-3xl bg-slate-50 py-2">
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {item.desc}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </ul>

      <p className="text-slate-600">
        Ve Vital Centrum Rajnochovice klade každý člen našeho týmu důraz na
        odbornost a péči. Naše služby jsou navrženy tak, aby splnily vaše
        individuální potřeby a představily vám cestu k celkovému zdraví a
        pohodě. Přijďte si k nám dopřát zážitek, který podporuje vaše tělo,
        posiluje vaši duši a napomáhá zdravému životnímu stylu.
      </p>
    </section>
  );
};

export default AboutUs;
