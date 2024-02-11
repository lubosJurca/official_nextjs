import DuseSection from '@/components/home-page/duse-section/page';
import MainPageCard from '@/components/home-page/main-page-card/MainPageCard';
import MainPageCarousel from '@/components/home-page/main-page-carousel/MainPageCarousel';
import OurHelp from '@/components/home-page/our-help/OurHelp';


export default function Home() {
  return (
    <main>
      <section className='flex relative flex-col lg:flex-row justify-center sm:py-40 pb-10 pt-10 items-center gap-16 min-h-  '>
        <div className='absolute top-0 z-[-2] min-h-full w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(180,204,237,.5)_100%)]'></div>
        <MainPageCard />
        <MainPageCarousel />
      </section>
      <section
        id='telo'
        className='h-fit flex px-5 py-28 sm:scroll-mt-10   relative'
      >
        <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'></div>
        <OurHelp />
      </section>
      <section
        id='duse'
        className='h-fit flex px-5 py-28 sm:scroll-mt-10   relative'
      >
        <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'></div>
        <DuseSection />
      </section>
      
    </main>
  );
}
