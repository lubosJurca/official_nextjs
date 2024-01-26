import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

type Props = {};

const ZuzanaJavorska = (props: Props) => {
  return (
    <div className='m-auto'>
      <h2 className='text-3xl mb-24 text-center font-semibold font-sans text-slate-600'>
        Kdo se o Vás bude starat?
      </h2>
      <Card className='max-w-2xl  text-center text-slate-600'>
        <CardHeader>
          <CardTitle>Zuzana Javorská</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            {' '}
            Zkušená fyzioterapeutka s dlouholetou praxí. Diagnostika je na
            začátku naprosto zásadní. Klienta se při první návštěvě vždy zeptám
            na vše potřebné – co mu je i co mu kdy bylo – protože je to mnohem
            rychlejší postup, než abych to zjišťoval podle hmatu, některé věci
            navíc pohmatem vůbec nepoznáte. Potřebuji vědět, zda měl například
            problémy s ledvinami nebo s játry, zda byl na operaci nebo měl úraz,
            protože podle toho je často nutné upravit masážní proceduru. Po
            provedení této diagnostiky nejenže mohu doporučit a provést typ
            masáže, která je pro klienta optimální, ale také je možné do vybrané
            procedury zakomponovat prospěšné postupy z jiných masáží, třeba
            měkké techniky, reflexní terapii, uvolňování kloubních blokád a
            podobně. Není to tak, že bych klientovi při jedné návštěvě provedl
            klasickou masáž, při druhé návštěvě reflexní terapii, lze to vhodně
            zkombinovat z různých technik. Ale vždy klientovi během masáže
            říkám, co budu dělat. Aby se nebál, že s ním například nečekaně
            trhnu…
          </p>

          <p className='mb-4'>
            Věnujte péči o své tělo dostatečnou pozornost Zaslouží si to Věnovat
            svému tělu dostatečnou péči se vyplatí nejen z hlediska estetického,
            ale také z hlediska zdravotního. S některými obtížemi si sice v
            rámci domácí péče neporadíme, ale profesionální ošetření je dovede
            docela dobře řešit. Pomůžeme vám s jizvami, bradavicemi, rozšířenými
            žilkami, pigmentovými skvrnami i nadměrným pocením.
          </p>

          <p>
            To ale není všechno, máme pro vás připraveno i výživové poradenství,
            lymfodrenáže nebo zeštíhlení postavy. S výběrem ošetření vám rádi
            poradíme, tak aby byl výsledek přesně podle vašeho očekávání.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ZuzanaJavorska;
