import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <div className="text-center xl:text-left order-2 xl:order-none flex flex-col gap-2">
            <span className="text-xl">Full Stack Developer</span>
            <h1 className="h1">
              Hello I'm <br />
              <span className="text-accent">Kamohelo Mamaregane</span>
            </h1>
            <p className="max-w-[500px]  text-white/80">
              Creating digital experiences that inspire, inform, and connect -
              one pixel at a time.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-6 pt-2">
              <Button
                variant="outline"
                size="md"
                className="flex items-center justify-center"
                href="/resume"
              >
                <Link
                  href="/projects"
                  className="uppercase flex items-center gap-1"
                >
                  View resume <FiArrowRight className="text-xl ml-2" />
                </Link>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
