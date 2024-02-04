import Map from '@/components/contact-page/map/Map';



const Kontakt = () => {
  return (
    <section className='flex flex-col gap-4 items-center pt-20 sm:pt-0  mb-10 '>
      <h2 className='font-bold text-5xl sm:mt-[12rem] mb-4'>Kontakt</h2>
      <section className='flex flex-col lg:flex-row  w-screen justify-evenly gap-14  items-center '>
        <div className='flex flex-col gap-14  justify-between lg:w-3/5 w-full px-4'>
          <div >
            <h3 className='sm:text-4xl text-3xl mb-2 bg-slate-50'>
              Provozní doba
            </h3>
            <div className='flex justify-between border-b py-2'>
              <h5>Pondělí - Pátek</h5>
              <p>9 - 17h</p>
            </div>
            <div className='flex justify-between border-b py-2'>
              <h5>Sobota - Nedělek</h5>
              <p>Zavřeno</p>
            </div>
          </div>

          <div>
            <h3 className='sm:text-4xl text-3xl mb-2 bg-slate-50'>
              Kontaktní údaje
            </h3>
            <div className='flex flex-col justify-between '>
              <p className='border-b py-2'>
                <span className='font-semibold'>Email:</span>{' '}
                zuzana.javorska@gmail.com
              </p>
              <p className='border-b py-2'>
                <span className='font-semibold'>Telefon:</span> +420 606 325 561
              </p>
            </div>
          </div>

          <div>
            <h3 className='sm:text-4xl text-3xl mb-2 bg-slate-50'>
              Provozovatel
            </h3>
            <div className='flex flex-col justify-between '>
              <h5 className='border-b py-2 font-semibold'>Zuzana Javorská</h5>
              <p className='border-b py-2'>
                <span className='font-semibold'>IČO:</span> 69735476
              </p>
              <p className='border-b py-2'>
                <span className='font-semibold'>Telefon:</span> +420 606 325 561
              </p>
            </div>
          </div>
        </div>     
          <Map /> 
      </section>
    </section>
  );
};

export default Kontakt;
