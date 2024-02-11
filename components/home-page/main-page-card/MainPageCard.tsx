import Link from 'next/link';
import { Button } from '../../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';



const MainPageCard = () => {
  return (
    <Card className='max-w-2xl flex flex-col justify-between gap-5 border-none pt-10 text-center bg-transparent shadow-none text-slate-600'>
      <CardHeader className='p-0'>
        <CardTitle className='text-8xl lg:text-left text-center lg:mt-28'>Vítejte!</CardTitle>
      </CardHeader>
      <CardContent className='p-0'>
        <p className='sm:mb-4 mb-8 lg:text-left text-center px-4'>
          {' '}
          Vítejte v Centru Zdraví, kde se o Vaši pohodu staráme s láskou a
          odborností! Ponořte se do naší oázy klidu, kde se stírají hranice mezi
          relaxací a péčí o vaše tělo. Naše masáže šijeme na míru vašim
          potřebám, lymfodrenáž vám pomůže obnovit energii, VacuShape formuje
          vaše tělo do dokonalé harmonie a naše moderní solária vám dopřejí
          jiskřivé opálení. Vstupte do světa, kde se zdraví stává zážitkem!
        </p>

        <div className='flex justify-center gap-4'>
          <Button className='bg-slate-200 text-slate-600 hover:text-white p-2'>
            {' '}
            <Link href='#telo'>Péče o tělo</Link>
          </Button>
          <Button className='bg-slate-200 text-slate-600 hover:text-white p-2'>
            {' '}
            <Link href='#duse'>Péče o duši</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MainPageCard;
