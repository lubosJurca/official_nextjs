import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MainNavigation from '@/components/header/main-navigation/MainNavigation';
import Footer from '@/components/footer/page';
import MobileNavigation from '@/components/header/mobile-navigation/MobileNavigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Centrum Zdraví Rajnochovice',
  description: 'Created by Lubos Jurca',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(180,204,237,0.3),rgba(255,255,255,0))]"></div>
        <MainNavigation />
        <MobileNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
