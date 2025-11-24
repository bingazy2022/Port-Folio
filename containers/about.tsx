import SectionTitle from "@/components/section-title";
import { buttonVariants } from "@/components/ui/button";
import { Effect } from "@/components/ui/effects";
import { getStatistics } from "@/constants/statistic";
import { cn } from "@/lib/utils";
import { ArrowRightCircle } from "lucide-react";
import { it } from "node:test";
const AboutSection = () => {
  const { statistics } = getStatistics();
  return (
    <section
      id="about"
      className="relative w-full flex justify-center items-center"
    >
      <Effect className="-left-32 md:-left-44 -top-12" />
      <article className="relative max-w-[800px] max-auto bg-background/90 border rounded-lg p-6 flex flex-col gap-y-6">
        <Effect
          variant="square"
          size="default"
          className="-top-4 -right-5 -z-10 rotate-12"
        />
        <SectionTitle
          title="about me"
          description="who am i ?"
          className="items-start"
        />
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
          reprehenderit facilis, quas aspernatur repellat sint repudiandae. Esse
          fugit velit quos. Laborum, magnam! Quisquam, quidem. Quisquam, quidem.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
          reprehenderit facilis, quas aspernatur repellat sint repudiandae. Esse
          fugit velit quos. Laborum, magnam! Quisquam, quidem. Quisquam, quidem.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-end">
          {statistics.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start"
            >
              <p className="text-foreground text-2xl md:text-4xl font-bold">
                +{item.value}
              </p>
              <p className="whitespace-nowrap text-sm md:text-lg">
                {item.label}
              </p>
            </div>
          ))}
          <a
            href="#skills"
            className={cn(
              buttonVariants({ size: "lg" }),
              "col-span-2 md:col-span-1"
            )}
          >
            <span>DISCOVER SKILLS</span>
            <ArrowRightCircle className="size-4" />
          </a>
        </div>
      </article>
    </section>
  );
};

export default AboutSection;
