import { buttonVariants } from "@/components/ui/button";
import { Effect } from "@/components/ui/effects";
import { socialLinks } from "@/constants/social-links";
import { ArrowRightCircle, Download } from "lucide-react";
import Image from "next/image";

const HomeSection = () => {
  return (
    <section id="home" className="grid md:grid-cols-12 items-center gap-6">
      {/*Social links */}
      <ul className="flex md:flex-col gap-4 items-center size-fit mx-auto py-2 md:py-8 px-8 md:px-2 border rounded-3xl">
        {socialLinks.map((link, index) => {
          const { href, icon: Icon } = link;
          return (
            <li key={index} className=" hover:text-primary">
              <a href={href} target="_blank">
                <Icon className="size-5" />
              </a>
            </li>
          );
        })}
      </ul>
      {/*Presentation */}
      <div className="md:col-span-6 flex flex-col items-center md:items-start gap-y-4">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground capitalize">
          hi, i'm abdullah
        </h2>
        <h5 className="text-xl md:text-2xl font-semibold capitalize">
          {" "}
          frontend developer
        </h5>
        <p className="leading-7 md:text-lg md:max-w-[85%] text-center md:text-start">
          Front-End Developer with a strong understanding of HTML5, CSS3, and
          Tailwind CSS, and a basic knowledge of JavaScript and React. Recently
          completed a graduation project aimed at improving and unifying user
          interfaces using a modern, clean design tailored for educational
          platforms. Shows a strong interest in UI/UX design, responsive
          layouts, and consistency across web pages. Committed to continuous
          learning and eager to apply front-end skills in real-world
          environments that value clarity, organization, and user-focused
          experiences
        </p>
        <div className="flex items-center gap-2 py-4">
          <a href="#projects" className={buttonVariants({ size: "lg" })}>
            <span>SEE MY WORK</span>
            <ArrowRightCircle className="size-4" />
          </a>
          <a
            href="/Abdullah_BaHashwan's_CV.pdf"
            className={buttonVariants({ variant: "outline", size: "lg" })}
            target="_blank"
            download
          >
            <span>DOWNLOAD MY CV</span>
            <Download className="size-4" />
          </a>
        </div>
      </div>
      {/*Image */}
      <div className="md:col-span-5 grid place-content-center">
        <div className="relative flex items-center justify-center size-80 md:size-96">
          <Effect className="size-full " />
          <Effect
            variant="square"
            size="sm"
            className="top-[8%] left-[25%] -rotate-12"
          />
          <Effect
            variant="square"
            size="sm"
            className="top-[50%] right-[2%] rotate-12"
          />
          <Effect
            variant="square"
            size="sm"
            className="bottom-[18%] left-[12%] rotate-6"
          />
          <Image
            width={420}
            height={420}
            src="/Me1.jpg"
            alt="portfolio"
            className="object-cover size-[80%] border-2 rounded-full ring-4 ring-primary ring-offset-4 ring-offset-background"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
