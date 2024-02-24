import { StaticImageData } from "next/image";

export type ImageGallery = {
  src: StaticImageData;
  id: string;
};

export type GalleryProps = {
  data: ImageGallery[];
};

export type NavProps = {
  handleClick: () => void;
};
