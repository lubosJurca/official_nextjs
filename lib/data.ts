import preview1 from "@/public/images/preview/preview13.jpg";
import preview2 from "@/public/images/preview/preview14.jpg";
import preview3 from "@/public/images/preview/preview15.jpg";
import preview4 from "@/public/images/preview/preview16.jpg";
import preview5 from "@/public/images/preview/preview5.jpg";
import preview6 from "@/public/images/preview/preview6.jpg";
import preview7 from "@/public/images/preview/preview7.jpg";
import preview8 from "@/public/images/preview/preview8.jpg";
import preview9 from "@/public/images/preview/preview9.jpg";

//  ******************** NAVIGATION DATA ***********************
export const navData = [
  {
    href: "/",
    title: "Domů",
    subMenu: false,
  },
  {
    href: "",
    title: "Tělo",
    subMenu: true,
    subMenuItems: [
      {
        href: "/telo/masaze",
        title: "Masáže",
        description:
          "Masáž je terapeutický způsob manipulace měkkých tkání těla, zaměřený na uvolnění napětí, zlepšení průtoku krve a dosažení celkové relaxace a pohody.",
      },
      {
        href: "/telo/lymfodrenaze",
        title: "Lymfodrenáže",
        description:
          "Lymfodrenáž je terapeutická technika stimulující odtok lymfy, podporující detoxikaci a snižující otoky.",
      },
      {
        href: "/telo/solarium",
        title: "Solárium",
        description:
          "Solarium je zařízení umožňující opalování pomocí umělého ultrafialového záření, často využívané k dosažení opálení nebo stimulaci tvorby vitamínu D.",
      },
      {
        href: "/telo/vacushape",
        title: "VacuShape",
        description:
          "VacuShape je zařízení pro tvarování těla, které využívá kombinaci cvičení a podtlaku k posilování svalů a redukci tukových vrstev..",
      },
    ],
  },
  {
    href: "",
    title: "Duše",
    subMenu: true,
    subMenuItems: [
      {
        href: "/duse/aroma-masaze",
        title: "Aroma masáže",
        description:
          "Ponořte se do úplného uvolnění a posílení ducha s našimi aroma masážemi, kde kombinace jemných hmatů a léčivých esenciálních olejů.",
      },
      {
        href: "/duse/bachovy-esence",
        title: "Bachovy esence",
        description:
          "Objevte sílu přírodních esencí s našimi Bachovými esencemi, které podporují rovnováhu a harmonii těla i mysli, a pomáhají vám dosáhnout celkového blahobytu a pohody.",
      },
      {
        href: "/duse/doterra",
        title: "Doterra",
        description:
          "Přírodní esenciální oleje nejvyšší kvality, které podporují vaše zdraví, vitalitu a celkový blahobyt. Objavte sílu přírody s doTERRA.",
      },
      {
        href: "/duse/kineziologie",
        title: "Kineziologie",
        description:
          "Kineziologie nabízí holistický přístup k léčbě a prevenci poruch pohybového aparátu, který se zaměřuje na harmonii mezi tělem, myslí a pohybem.",
      },
      {
        href: "/duse/metody-promeny",
        title: "Kurz Carol Ann Hontz proměny",
        description:
          "Techniky a principy Carol Ann Hontz, které vám pomohou objevit a rozvinout vaše vnitřní potenciál a dosáhnout osobního růstu a transformace.",
      },
    ],
  },
  {
    href: "/cenik",
    title: "Ceník",
    subMenu: false,
  },
  {
    href: "/galerie",
    title: "Galerie",
    subMenu: false,
  },
  {
    href: "/kontakt",
    title: "Kontakt",
    subMenu: false,
  },
];

// ************ SOLARIUM DETAIL PAGE DATA **********

export const solariumData = {
  title: "Solárium",
  descText1:
    " Naše solárium vám přináší zážitek ze slunění bez nutnosti opouštět pohodlí našeho wellness centra. Připravte se na unikátní setkání se slunečním světlem a jeho mnoha přínosy pro vaši pokožku a celkový stav.",
  descText2:
    " Zarezervujte si svůj čas na sluneční relaxaci a objevte výhody, které solárium může přinést vaší pokožce a duši. Vaše sluneční oáza v našem wellness centru čeká na vás!",
  accordionData: [
    {
      id: 1,
      title: "Bezpečné umělé Slunce",
      desc: "Naše solárium využívá moderní technologie, která simuluje přirozené sluneční záření, poskytujíc vám opálení bez rizika předávkování UV zářením.",
    },
    {
      id: 2,
      title: "Opálení s okamžitými výsledky",
      desc: "Začněte si užívat opálení již po první návštěvě. Naše solárium poskytuje okamžité výsledky, které zdůrazní vaši přirozenou krásu.",
    },
    {
      id: 3,
      title: "Péče o pokožku",
      desc: "S naším soláriem získáte nejen hezké opálení, ale také péči o pokožku. Speciální lůžko je navrženo pro minimalizaci rizika přeexponování a poskytuje hydrataci.",
    },
    {
      id: 4,
      title: "Celoroční Slunce",
      desc: "Bez ohledu na to, zda je venku zima nebo léto, můžete si dopřát sluníčko kdykoliv. Naše solárium vám umožní udržet si opálení po celý rok.",
    },
    {
      id: 5,
      title: "Relaxační prostředí",
      desc: "Pohodlné lůžko, jemné osvětlení a klidná atmosféra vám umožní relaxovat během opalování, což přináší do vašeho dne moment klidu a odpočinku.",
    },
  ],
};

// ************** LYMFODRENAZE DETAIL PAGE DATA ****************

export const lymfodrenazeData = {
  title: "Lymfodrenáže",
  descText1:
    "Lymfodrenážní masáž je jemný a účinný způsob, jak podpořit přirozený tok lymfy v těle, eliminovat toxiny a dosáhnout celkového pocitu lehkosti a vitality.",
  descText2:
    "Přijďte si dopřát jedinečnou lymfodrenážní masáž a dejte svému tělu šanci na obnovení a harmonii. Zarezervujte si svou masáž a posunejte své zdraví na novou úroveň!",
  accordionData: [
    {
      id: 1,
      title: "Odkud Pochází?",
      desc: "Lymfodrenážní masáž vychází z jemných pohybů a lehkého tlaku, které podporují lymfatický systém, pomáhají odplavovat toxiny a nastartovat přirozený proces detoxikace.",
    },
    {
      id: 2,
      title: "Proč Zvolit Lymfodrenáž?",
      desc: "Tato masážní technika není jen o uvolnění svalů – je to o revitalizaci vašeho těla od základů. Pomáhá eliminovat otoky, bojovat s celulitidou a posilovat váš imunitní systém.",
    },
    {
      id: 3,
      title: "Pro Koho Je To Ideální?",
      desc: "Lymfodrenážní masáž je skvělá pro každého, kdo touží po osvěžení a podpoře pro svůj lymfatický systém. Zvláště užitečná pro ty, kteří se potýkají s otoky nebo hledají regeneraci a posílení imunity.",
    },
    {
      id: 4,
      title: "Pocit Lehkosti a Harmonie",
      desc: "Po lymfodrenážní masáži zažijete lehkost těla a duše, přičemž se spojí revitalizace s hlubokým pocitem harmonie.",
    },
    {
      id: 5,
      title: "Jedinečný Přístup",
      desc: "Naše profesionální terapeutky přistupují k lymfodrenážní masáži individuálně, poskytují péči šitou na míru vašim potřebám a garantují jedinečný zážitek.",
    },
  ],
};

// ************** VACUSHAPE DETAIL PAGE DATA ********************

export const vacushapeData = {
  title: "VacuShape",
  descText1:
    "Naše solárium vám přináší zážitek ze slunění bez nutnosti opouštět pohodlí našeho wellness centra. Připravte se na unikátní setkání se slunečním světlem a jeho mnoha přínosy pro vaši pokožku a celkový stav.",
  descText2:
    " Zarezervujte si svůj čas na sluneční relaxaci a objevte výhody, které solárium může přinést vaší pokožce a duši. Vaše sluneční oáza v našem wellness centru čeká na vás!",
  accordionData: [
    {
      id: 1,
      title: "Tvarování Těla Bez Námahy",
      desc: "VacuShape kombinuje silný podtlak s cvičením, aby vytvořil intenzivní trénink, který formuje a tvaruje vaše tělo bez námahy.",
    },
    {
      id: 2,
      title: "Zvýšený Metabolismus",
      desc: "Díky intenzivnímu cvičení pod podtlakem VacuShape může zvýšit váš metabolismus, což přispívá k efektivnějšímu spalování kalorií.",
    },
    {
      id: 3,
      title: "Redukce Celulitidy",
      desc: "VacuShape cíleně pracuje na oblastech, kde se často vyskytuje celulitida, pomáhá zlepšit strukturu kůže a dosáhnout hladšího vzhledu.",
    },
    {
      id: 4,
      title: "Posílení Svalů",
      desc: "Cvičení s VacuShape zahrnuje různé pohyby, které posilují svaly a zvyšují celkovou sílu a výdrž.",
    },
    {
      id: 5,
      title: "Pohodlnost A Flexibilita",
      desc: "VacuShape je navržen tak, aby byl pohodlný a vhodný pro různé typy cvičenců, umožňující flexibilitu v tréninku.",
    },
  ],
};

// ******************** MASAZE DATA ************
export const masazeData = [
  {
    id: 1,
    title: "Masáže zad a šíje",
    desc: " Masáž zad a šíje je terapeutický proces, který se zaměřuje na uvolnění svalového napětí v oblasti horní části těla.  Během této masáže masér používá různé techniky, včetně hlazení, tření a tlaku, k dosažení relaxace svalů a zlepšení průtoku krve. Cílem masáže je snížit bolest a nepohodlí spojené s napětím v zadní a krční oblasti, často způsobenými špatným držením, stresovými faktory nebo dlouhým sezením u počítače.Masáž může zvýšit flexibilitu svalů a zlepšit pohyblivost v krční páteři, což má příznivý vliv na celkovou pohodu a postavení těla.Tato terapeutická procedura je oblíbená pro své schopnosti poskytnout okamžitou úlevu a relaxaci, a to jak fyzicky, tak i psychicky.",
    vhodnePro: [
      {
        id: 7,
        title: "Osoby s bolestmi a napětím v oblasti zad a krku",
      },
      {
        id: 8,
        title: "Osoby se sedavým způsobem života",
      },
      {
        id: 9,
        title: "Osoby v neustálém stresu",
      },
      {
        id: 10,
        title: "Sportovce",
      },
      {
        id: 11,
        title: "Osoby hledající celkovou relaxaci",
      },
    ],
  },
  {
    id: 2,
    title: "Sportovní",
    desc: " Sportovní masáž je specifický typ masáže navržený pro sportovce a aktivní jednotlivce. Tato masážní technika se zaměřuje na potřeby svalů používaných během konkrétních sportů nebo fyzických aktivit.",
    vhodnePro: [
      {
        id: 12,
        title: "Sportovce",
      },
      {
        id: 13,
        title: "Rekreační Sportovce",
      },
      {
        id: 14,
        title: "Osoby Po Intenzivním Tréninku",
      },
      {
        id: 15,
        title: "Osoby S Chronickým Napětím",
      },
      {
        id: 16,
        title: "Osoby Se Zraněními",
      },
    ],
  },
  {
    id: 3,
    title: "Baňkování",
    desc: " Baňková masáž, známá také jako baňkování, je tradiční čínská léčebná technika, při které jsou skleněné nebo plastové baňky (často vyrobené z bambusu) přiloženy na tělo a vytvoří se podtlak. Tato technika využívá odsávání vzduchu z baňek, což způsobuje přitahování kůže a tkání směrem nahoru do baňky. Baňky se poté ponechávají na těle po určitou dobu nebo se posouvají po povrchu kůže, což má stimulovat cirkulaci krve, uvolňovat svalové napětí a podporovat léčbu různých onemocnění.",
    vhodnePro: [
      {
        id: 17,
        title: "Osoby se svalovým napětím a bolestí",
      },
      {
        id: 18,
        title: "Sportovce",
      },
      {
        id: 19,
        title: "Lidi s problémy s cirkulací krve",
      },
      {
        id: 20,
        title: "Osoby hledající relaxaci",
      },
      {
        id: 21,
        title: "Lidi trpící chronickými bolestmi",
      },
    ],
  },
];

// **************** AROMA MASAZE DETAIL PAGE DATA ******************
export const aromaMasazeData = {
  title: "Aroma masáže",
  descText1:
    "Podlehněte svému smyslům a dopřejte si úplnou relaxaci s našimi exkluzivními aroma masážemi, které jsou osvěžující kombinací jemných hmatů a terapeutických esenciálních olejů. Ponořte se do světa vůní, které nejenom uvolňují napětí v těle, ale také osvěžují vaši mysl a obnovují vaši energii.",
  descText2:
    "Od uklidňující levandule po osvěžující citrusy a exotické jasmínové květy, naše aroma masáže nabízejí širokou škálu vůní, které jsou přizpůsobeny vašim individuálním potřebám a preferencím. Každý pohyb maséra je pečlivě synchronizován s vůními, abyste se cítili jako v oáze klidu a relaxace. Přijďte si užít tento jedinečný zážitek a nechte se unést do světa vůní a relaxace s našimi aroma masážemi.",
  accordionData: [
    {
      id: 1,
      title: "Pro ty, kdo hledají relaxaci",
      desc: "Aroma masáže jsou skvělou volbou pro každého, kdo potřebuje uniknout od stresu a napětí každodenního života a najít okamžik klidu a relaxace.",
    },
    {
      id: 2,
      title: "Pro ty, kdo trpí stresem",
      desc: "Esenciální oleje používané při aroma masážích mají přirozené antistresové vlastnosti, které pomáhají uvolňovat napětí a snižovat úzkost.",
    },
    {
      id: 3,
      title: "Pro ty, kteří chtějí posílit svou mysl a tělo",
      desc: "Aroma masáže nejen uvolňují svalové napětí, ale také stimulují smysly a pomáhají udržovat rovnováhu mezi tělem a myslí.",
    },
    {
      id: 4,
      title: "Pro ty, kdo hledají přirozenou léčbu",
      desc: " Esenciální oleje používané při aroma masážích mají léčivé vlastnosti, které mohou pomoci při různých problémech, jako jsou bolesti hlavy, zažívací potíže nebo nespavost.",
    },
    {
      id: 5,
      title: "Pro ty, kteří chtějí prohloubit svou meditační praxi",
      desc: "Aroma masáže jsou skvělým způsobem, jak se ponořit do meditativního stavu, protože kombinují terapeutické účinky doteku s relaxačními vlastnostmi esenciálních olejů, což pomáhá dosáhnout hlubšího stavu klidu a soustředění.",
    },
  ],
};

// **************** BACHOVY ESENCE DETAIL PAGE DATA ******************
export const bachovyEsenceData = {
  title: "Bachovy esence",
  descText1:
    "Bachovy esence jsou přírodní esenciální oleje vytvořené Dr. Edwardem Bachem v první polovině 20. století. Tyto esence jsou získávány z květů, stromů a rostlin pomocí sluneční metody nebo vroucí metody, a jsou navrženy tak, aby pomáhaly vyrovnat emocionální nerovnováhu a podpořily psychické a fyzické zdraví. Každá esence odpovídá určitému emocionálnímu stavu nebo duševnímu vzoru a je určena k harmonizaci a vyrovnání těchto stavů. Existuje celá řada Bachových esencí, které se používají k léčbě různých emocionálních stavů, jako je úzkost, strach, deprese, nejistota nebo podrážděnost.",
  descText2:
    "Bachovy esence jsou populární formou alternativní léčby a jsou často používány jako doplněk k tradiční medicíně. Jsou bezpečné pro použití a mohou být užívány samostatně nebo ve spojení s jinými léčebnými metodami. Těchto 38 esencí se často používá individuálně nebo v kombinaci podle potřeb každého jednotlivce. Bachovy esence jsou dostupné v kapkách, které se obvykle aplikují pod jazykem, a mohou být také použity externě ve formě sprejů nebo krémů.",
  accordionData: [
    {
      id: 1,
      title: "Pro ty, kteří hledají emocionální harmonii",
      desc: "Bachovy esence jsou navrženy tak, aby pomohly vyrovnat a harmonizovat emocionální stav, což je ideální pro ty, kteří chtějí dosáhnout vnitřního klidu a vyváženosti.",
    },
    {
      id: 2,
      title: "Pro ty, kteří hledají přírodní alternativu",
      desc: "Bachovy esence jsou vyrobeny z květů divoce rostoucích rostlin a jsou považovány za přírodní a holistický způsob léčby emocionálních a duševních problémů.",
    },
    {
      id: 3,
      title: "Pro lidi s psychickými výzvami",
      desc: "Bachovy esence jsou vhodné pro ty, kteří bojují s psychickými obtížemi, jako jsou úzkost, stres, deprese nebo strach, a hledají jemnou a efektivní formu podpory.",
    },
    {
      id: 4,
      title: "Pro ty, kteří chtějí podporovat své osobní a duchovní růst",
      desc: "Bachovy esence mohou být užitečné pro ty, kteří chtějí prozkoumat svou vnitřní podstatu, pracovat na svém osobním rozvoji a dosáhnout většího porozumění sobě samým.",
    },
    {
      id: 5,
      title: "Pro každého, kdo hledá celkový pocit blahobytu",
      desc: "Používání Bachových esencí může přispět k celkovému duševnímu a emocionálnímu blahobytu a poskytnout podporu při hledání rovnováhy a štěstí v životě.",
    },
  ],
};

// **************** DOTERRA DETAIL PAGE DATA ******************
export const doterraData = {
  title: "Doterra",
  descText1:
    "Doterra je společnost specializující se na výrobu a distribuci esenciálních olejů nejvyšší kvality. Tato společnost se zaměřuje na poskytování čistých a terapeutických esenciálních olejů, které mají širokou škálu aplikací pro podporu zdraví a blahobytu. Doterra nabízí širokou škálu esenciálních olejů jednotlivě i ve směsích, které jsou získávány z rostlin a bylin po celém světě. Tyto oleje jsou extrahovány z rostlin pomocí páry, stlačování nebo extrakce, a jsou navrženy tak, aby zachovaly co nejvíce terapeutických vlastností.",
  descText2:
    "Doterra dále poskytuje školení a podporu pro své zákazníky, aby jim pomohli porozumět použití esenciálních olejů a integrovat je do svého každodenního života pro podporu fyzického, emočního a duševního zdraví. Společnost Doterra je známá svým důrazem na kvalitu, transparentnost a etické obchodování s komunitami po celém světě, odkud získává své suroviny. Jejich produkty jsou často používány jak jednotlivci doma, tak i profesionálními terapeuty v oblasti aromaterapie a holistické péče o zdraví.",
  accordionData: [
    {
      id: 1,
      title: "Přírodní a čisté produkty",
      desc: "Doterra se zaměřuje na výrobu esenciálních olejů nejvyšší kvality, které jsou extrahovány z rostlin a bylin pomocí přírodních metod. Tyto produkty jsou čisté a bez přídavku chemických látek, což z nich činí ideální volbu pro ty, kdo hledají přírodní způsob podpory zdraví.",
    },
    {
      id: 2,
      title: "Terapeutické účinky",
      desc: "Esenciální oleje doTERRA jsou známé svými terapeutickými vlastnostmi a mají širokou škálu použití pro podporu fyzického, emočního a duševního zdraví. Mohou být použity k podpoře relaxace, zlepšení nálady, posílení imunitního systému a mnoha dalším účelům.",
    },
    {
      id: 3,
      title: "Široká nabídka produktů",
      desc: "doTERRA nabízí širokou škálu esenciálních olejů jednotlivě i ve směsích, stejně jako další produkty, jako jsou doplňky stravy, tělová péče a produkty pro domácnost. To umožňuje jednotlivcům najít produkty, které nejlépe vyhovují jejich potřebám a preferencím.",
    },
    {
      id: 4,
      title: "Školení a podpora",
      desc: "Společnost doTERRA poskytuje školení a podporu pro své zákazníky, aby jim pomohla porozumět použití esenciálních olejů a integrovat je do svého každodenního života. Tato podpora zahrnuje širokou škálu zdrojů, včetně webových stránek, knih, videí a osobní konzultace s odborníky.",
    },
    {
      id: 5,
      title: "Etické obchodování",
      desc: "doTERRA je známá svým důrazem na etické obchodování a udržitelnost. Společnost se angažuje v projektech zlepšení životních podmínek pro farmáře a komunity, odkud získává své suroviny, a podporuje projekty na ochranu životního prostředí a udržitelné zemědělství. To znamená, že při nákupu produktů doTERRA můžete mít jistotu, že podporujete společnost s pozitivním dopadem na svět.",
    },
  ],
};

// **************** DOTERRA DETAIL PAGE DATA ******************
export const kineziologieData = {
  title: "Kineziologie",
  descText1:
    "Kineziologie je terapeutická metoda, která se zaměřuje na studium pohybu a svalového tonusu a využívá se k diagnostice a léčbě různých poruch pohybového aparátu a motorických funkcí. Zde jsou 5 důvodů, proč by kineziologie mohla být pro vás vhodnou volbou:",
  descText2:
    "Kineziologie představuje komplexní terapeutickou metodu, která se zaměřuje na pohyb a svalovou koordinaci a využívá se k diagnostice, léčbě a prevenci různých poruch pohybového aparátu. Tato holistická přístup k péči o zdraví poskytuje individuální podporu a cvičební programy, které pomáhají obnovit pohybovou funkci, posílit svaly a dosáhnout celkového zlepšení tělesného a duševního blahobytu.",
  accordionData: [
    {
      id: 1,
      title: "Diagnostika a léčba poruch pohybového aparátu",
      desc: "Kineziologie může pomoci identifikovat a léčit různé poruchy a dysfunkce spojené s pohybovým aparátem, jako jsou bolesti zad, krční a bederní problémy, poruchy držení těla a další.",
    },
    {
      id: 2,
      title: "Zlepšení pohyblivosti a flexibility",
      desc: "Terapeuti kineziologie pracují na zlepšení pohyblivosti a flexibility svalů a kloubů pomocí specifických cvičení a technik, což může vést k většímu rozsahu pohybu a snížení rizika zranění.",
    },
    {
      id: 3,
      title: "Prevence zranění",
      desc: "Kineziologie může být také použita k prevenci zranění tím, že pomáhá identifikovat a opravit biomechanické nerovnováhy a dysfunkce, které mohou vést k opakovaným zraněním.",
    },
    {
      id: 4,
      title: "Posílení svalů a stabilizace těla",
      desc: "Terapeuti kineziologie pracují na posílení svalů a stabilizaci těla pomocí specifických cvičení a technik, což může vést k lepšímu držení těla a prevenci bolestí zad a dalších poruch spojených s pohybovým aparátem.",
    },
    {
      id: 5,
      title: "Celková pohybová efektivita",
      desc: "Kineziologie se také zaměřuje na zlepšení celkové pohybové efektivity a výkonnosti, což může přinést prospěch nejen sportovcům a aktivním jedincům, ale i těm, kteří chtějí zlepšit svou kondici a kvalitu života.",
    },
  ],
};
// **************** DOTERRA DETAIL PAGE DATA ******************
export const metodyPromenyData = {
  title: "Kurz Carol Ann Hontz proměny",
  descText1:
    "Kurz Proměny Carol Ann Hontz je intenzivní program zaměřený na osobní rozvoj a transformaci, který vychází z principů a technik vyvinutých Carol Ann Hontz. Účastníci kurzu se učí identifikovat a překonávat blokády a omezující vzorce chování, které brání jejich růstu a osobnímu rozvoji. Kurz poskytuje prostor pro hlubokou introspekci, sebepoznání a transformaci, a pomáhá účastníkům nalézt svou vnitřní sílu a autenticitu. S pomocí různých technik, cvičení a diskuzí účastníci získávají nástroje potřebné k tomu, aby dosáhli svých cílů a naplnili svůj potenciál. Kurz Proměny Carol Ann Hontz je určen pro každého, kdo touží po osobním růstu a změně a je otevřený prozkoumání svého vnitřního světa a transformaci svého života. Kurz Proměny Carol Ann Hontz je určen pro:",
  descText2:
    "Kineziologie představuje komplexní terapeutickou metodu, která se zaměřuje na pohyb a svalovou koordinaci a využívá se k diagnostice, léčbě a prevenci různých poruch pohybového aparátu. Tato holistická přístup k péči o zdraví poskytuje individuální podporu a cvičební programy, které pomáhají obnovit pohybovou funkci, posílit svaly a dosáhnout celkového zlepšení tělesného a duševního blahobytu.",
  accordionData: [
    {
      id: 1,
      title: "Ty, kteří touží po osobním růstu",
      desc: "Kurz je ideální pro jedince, kteří chtějí prozkoumat své vnitřní potenciál, objevit své skryté schopnosti a dosáhnout vyšší úrovně osobního růstu.",
    },
    {
      id: 2,
      title: "Ty, kteří hledají změnu",
      desc: "Je vhodný pro ty, kteří se cítí uvězněni v omezujících vzorcích chování nebo myšlení a hledají nástroje a podporu k tomu, aby tyto vzorce překonali a dosáhli pozitivní změny ve svém životě.",
    },
    {
      id: 3,
      title: "Ty, kteří potřebují podporu",
      desc: "Kurz je pro ty, kteří chtějí pracovat na sobě, ale potřebují podporu a navigaci, aby dosáhli svých cílů a překonali překážky.",
    },
    {
      id: 4,
      title: "Ty, kteří hledají hlubší porozumění sobě",
      desc: "Je vhodný pro jedince, kteří se zajímají o osobní rozvoj a chtějí lépe porozumět svým emocím, myšlenkám a chování a objevit, co je motivuje a co je omezuje.",
    },
    {
      id: 5,
      title: "Ty, kteří chtějí žít autenticky",
      desc: "Kurz je pro ty, kteří touží žít autentický život, který je v souladu s jejich hodnotami, vášněmi a cíli. Poskytuje prostor pro sebepoznání a objevení své pravé podstaty, aby mohli žít naplněně a radostně.",
    },
  ],
};

// *************** OUR HELP SECTION DATA **************
export const teloSectionData = [
  {
    title: "Masáže",
    href: "/telo/masaze",
    desc: "Naši zkušení maséři vám poskytnou relaxační a terapeutické masáže, které pomáhají uvolnit napětí, zlepšit cirkulaci krve a zmírnit bolesti svalů. Od tradičních švédských masáží po hluboké tkáňové terapie, najdete u nás masáž, která vyhovuje vašim potřebám.",
    image: preview1,
    id: 1,
  },
  {
    title: "Lymfodrenáže",
    href: "/telo/lymfodrenaze",
    desc: "Lymfodrenážní masáže jsou účinnou metodou odstraňování nadbytečného tělního tekutinu, podporují lymfatický systém a pomáhají odstraňovat toxiny z těla. Naši certifikovaní terapeuti vám poskytnou lymfatickou drenáž šetrnou a účinnou technikou.",
    image: preview2,
    id: 2,
  },
  {
    title: "Solárium",
    href: "/telo/solarium",
    desc: "Nabízíme moderní solária s vysokým výkonem, která vám umožní dosáhnout přirozeného opálení bez rizika škodlivých účinků UV záření. Navštivte naše solárium a zažijte jiskřivě zlatou barvu pokožky po krátké relaci.",
    image: preview3,
    id: 3,
  },
  {
    title: "Vacushape",
    href: "/telo/vacushape",
    desc: "Pokud hledáte inovativní způsob, jak formovat svou postavu a zlepšit tvar těla, je vacushape ideální volbou. Tato moderní technologie kombinuje vakuumovou terapii s masážními technikami, které pomáhají redukovat tukové buňky a zlepšit tonus kůže.",
    image: preview4,
    id: 4,
  },
];

// ************** DUSE Section data **************
export const duseSectionData = [
  {
    title: "Aroma masáže",
    href: "/duse/aroma-masaze",
    desc: "Aroma masáže jsou jedinečným způsobem, jak spojit sílu doteku s léčivými vlastnostmi esenciálních olejů, které nejenom hýčkají vaše smysly, ale také poskytují řadu zdravotních benefitů. Připravte se na relaxační a obnovující zážitek, který posílí váš duch i tělo.",
    image: preview5,
    id: 1,
  },
  {
    title: "Bachovy esence",
    href: "/duse/bachovy-esence",
    desc: "Bachovy esence jsou přírodní esenciální oleje získávané z květů, stromů a rostlin. Jsou často používány jako součást alternativní léčby pro podporu duševního zdraví, zlepšení nálady a dosažení vnitřního klidu.",
    image: preview6,
    id: 2,
  },
  {
    title: "doTerra",
    href: "/duse/doterra",
    desc: "doTERRA je společnost specializující se na výrobu a distribuci esenciálních olejů nejvyšší kvality. Jejich produkty jsou často používány v aromaterapii, masážích, domácí péči o zdraví a dalších wellness aplikacích.",
    image: preview7,
    id: 3,
  },
  {
    title: "Kineziologie",
    href: "/duse/kineziologie",
    desc: "Kineziologie je studium pohybu lidského těla a jeho interakce s okolím, které zkoumá anatomii, fyziologii a biomechaniku s cílem porozumět pohybovým vzorcům, výkonnosti a zdraví. Tento obor se využívá v různých kontextech, včetně sportovního výcviku, rehabilitace a ergonomie.",
    image: preview8,
    id: 4,
  },
  {
    title: "Carol Ann Hantz proměna ",
    href: "/duse/metody-promeny",
    desc: "Kurz Proměny Carol Ann Hontz je intenzivní program zaměřený na osobní rozvoj a transformaci, který vychází z principů a technik vyvinutých Carol Ann Hontz. ",
    image: preview9,
    id: 5,
  },
];
