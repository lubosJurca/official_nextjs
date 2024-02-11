import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../ui/card";

type CardComponentProps = {
  title: string;
  desc: string;
  id: number;
  image: StaticImageData;
};

const CardComponent = (item: CardComponentProps) => {
  return (
    <Card
      key={item.id}
      className=" lg:max-w-96 bg-slate-50 hover:scale-105 hover:bg-slate-200 transition-all "
    >
      <CardHeader>
        <CardTitle className="text-center">{item.title}</CardTitle>
        <Image src={item.image} alt={item.title} className="py-4" />
      </CardHeader>
      <CardContent>
        <CardDescription>{item.desc}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
