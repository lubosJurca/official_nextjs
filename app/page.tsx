import MainPageCard from '@/components/main-page-card/MainPageCard';
import MainPageCarousel from '@/components/main-page-carousel/MainPageCarousel';
import OurHelp from '@/components/our-help/OurHelp';
import ZuzanaJavorska from '@/components/zuzana-javorska-section/ZuzanaJavorska';

export default function Home() {
  return (
    <main>
      <section className='flex flex-col-reverse lg:flex-row justify-center items-center gap-16 min-h-screen py-44 px-5   bg-slate-50 '>
        <MainPageCard />
        <MainPageCarousel />
      </section>
      <section id='help' className='min-h-screen flex justify-center items-center bg-white px-5 py-44'>
        <OurHelp />
      </section>
      <section id='javorska' className='flex justify-end items-center min-h-screen px-5  py-44  bg-slate-50 '>
        <ZuzanaJavorska />
      </section>
    </main>
  );
}
