const Footer = () => {
  return (
    <footer className='bg-slate-300 text-slate-600 py-10 flex flex-wrap gap-5  sm:justify-around justify-center items-center'>

      <div className="w-80 flex flex-col justify-start items-start border border-slate-600 p-6  "  >
        <h3 className='text-lg underline'>Provozní doba</h3>
        <div className='font-light flex gap-4'>
          <h5 className="font-semibold">Pondělí - Pátek</h5>
          <p>9 - 17h</p>
        </div>
        <div className='flex font-light gap-4'>
          <h5 className="font-semibold">Sobota - Nedělek</h5>
          <p>Zavřeno</p>
        </div>
      </div>

      <div className="w-80 flex flex-col  border border-slate-600 p-6 " >
        <h3 className='text-lg underline'>
          Kontaktní údaje
        </h3>
        <div className='flex flex-col justify-between '>
          <p >
            <span className='font-semibold' >Email:</span>{' '}
            zuzana.javorska@gmail.com
          </p>
          <p >
            <span className='font-semibold'>Telefon:</span> +420 606 325 561
          </p>
        </div>
      </div>
      
      <div className="w-80 flex flex-col border border-slate-600 p-6 " >
            <h3 className='text-lg underline'>Provozovatel</h3>
            <div className='flex flex-col justify-between  '>
              <h5 className='font-semibold'>Zuzana Javorská</h5>
              <p >
                <span className='font-semibold'>IČO:</span> 69735476
              </p>
              <p >
                <span className='font-semibold'>Telefon:</span> +420 606 325 561
              </p>
            </div>
          </div>
      {/*  */}
    </footer>
  );
};

export default Footer;
