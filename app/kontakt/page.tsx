import Map from '@/components/map/Map';

const Kontakt = () => {
  return (
    <main className='flex flex-col gap-4 items-center justify-center h-screen '>
      <h2 className='font-bold text-5xl mb-4'>Kontakt</h2>
      <section className='flex flex-col lg:flex-row lg:w-3/5 w-screen gap-14 justify-around items-center '>
        <div className='flex flex-col gap-14 justify-between w-full px-4'>
          <div>
            <h3 className='sm:text-4xl text-3xl mb-2 bg-slate-50'>Provozní doba</h3>
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
            <h3 className='sm:text-4xl text-3xl mb-2 bg-slate-50'>Kontaktní údaje</h3>
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
            <h3 className='sm:text-4xl text-3xl mb-2 bg-slate-50'>Provozovatel</h3>
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
    </main>
  );
};

export default Kontakt;
