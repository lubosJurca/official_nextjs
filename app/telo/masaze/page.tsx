// component
import Gallery from "@/components/Gallery";

// shadcn ui
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// data
import { masazeData } from "@/lib/data";

const Masaze = () => {
  return (
    <section className="min-h-screen max-w-7xl mx-auto pt-20 sm:pt-0 flex flex-col gap-8 ">
      <h2 className="font-bold text-5xl mb-4 text-center sm:mt-[12rem] ">
        Masáže
      </h2>
      <div>
        {masazeData.info.map((masaz) => {
          return (
            <Card
              key={masaz.id}
              className="flex flex-col text-slate-600 shadow-none border-none"
            >
              <CardHeader className="sm:text-4xl text-3xl bg-slate-50 py-2 ">
                <CardTitle>{masaz.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="py-4">{masaz.desc}</CardDescription>
                <h4 className="italic">Pro koho je tato masáž vhodná?</h4>
                <ul>
                  {masaz.vhodnePro.map((item, index) => {
                    return (
                      <li key={index} className="font-light list-disc ml-6">
                        {item.title}
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Gallery data={masazeData.imageGallery} />
    </section>
  );
};

export default Masaze;
