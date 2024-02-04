import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

// images
import image1 from '@/public/images/image1.jpg';
import image2 from '@/public/images/image2.jpg';
import image3 from '@/public/images/image3.jpg';
import image4 from '@/public/images/image4.jpg';
import image5 from '@/public/images/image5.jpg';

import Image from 'next/image';

const MainPageCarousel = () => {
  const images = [image1, image2, image3, image4, image5];

  return (
    
      <Carousel className='w-full sm:max-w-[25rem] max-w-60 hover:cursor-grab'>
        <CarouselContent className='max-h-full'>
          {images.map((image, index) => (
            <CarouselItem key={index} >
              <Image src={image} alt='image' />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
   
  );
};

export default MainPageCarousel;
