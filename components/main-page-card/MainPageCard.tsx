import Link from 'next/link';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

type Props = {};

const MainPageCard = (props: Props) => {
  return (
    <Card className='max-w-2xl flex flex-col justify-between gap-5 py-4 border-none  text-center bg-transparent shadow-none text-slate-600'>
      <CardHeader>
        <CardTitle className='text-8xl text-left'>Vítejte!</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='mb-4 text-left'>
          {' '}
          Vítejte v Centru Zdraví, kde se o Vaši pohodu staráme s láskou a
          odborností! Ponořte se do naší oázy klidu, kde se stírají hranice mezi
          relaxací a péčí o vaše tělo. Naše masáže šijeme na míru vašim
          potřebám, lymfodrenáž vám pomůže obnovit energii, VacuShape formuje
          vaše tělo do dokonalé harmonie a naše moderní solária vám dopřejí
          jiskřivé opálení. Vstupte do světa, kde se zdraví stává zážitkem!
        </p>
        {/* <p className='mb-4 text-left'>
          {' '}
          Naším krédem od začátku byl klid a soukromí našich zákazníků. Proto
          nabízíme spoustu služeb s omezenou kapacitou. Naše služby jsou určeny
          všem věkovým kategoriím. Všem lidem, kteří se chtějí na chvíli
          zastavit a pro sebe něco udělat.
        </p> */}

        <div className='flex gap-4'>
          <Button className='bg-slate-200 text-slate-600 hover:text-white'>
            {' '}
            <Link href='#help'>S čím Vám můžeme pomoci?</Link>
          </Button>
          <Button className='bg-slate-200 text-slate-600 hover:text-white'>
            {' '}
            <Link href='#javorska'>Kdo se o Vás bude starat?</Link>
          </Button>
        </div>
        {/* <p className='mb-4'>
          
          Věnujte péči o své tělo dostatečnou pozornost Zaslouží si to Věnovat
          svému tělu dostatečnou péči se vyplatí nejen z hlediska estetického,
          ale také z hlediska zdravotního. S některými obtížemi si sice v rámci
          domácí péče neporadíme, ale profesionální ošetření je dovede docela
          dobře řešit. Pomůžeme vám s jizvami, bradavicemi, rozšířenými žilkami,
          pigmentovými skvrnami i nadměrným pocením.
        </p>

        <p>
          To ale není všechno, máme pro vás připraveno i výživové poradenství,
          lymfodrenáže nebo zeštíhlení postavy. S výběrem ošetření vám rádi
          poradíme, tak aby byl výsledek přesně podle vašeho očekávání.
        </p> */}
      </CardContent>
    </Card>
  );
};

export default MainPageCard;
