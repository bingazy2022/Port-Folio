import SectionTitle from "@/components/section-title";
import { buttonVariants } from "@/components/ui/button";
import { Effect } from "@/components/ui/effects";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative bg-card/50 backdrop-blur-md border rounded-xl p-6 flex flex-col gap-y-6 md:gap-y-12"
    >
      <Effect variant="ball" size="default" className="-top-4 -end-4" />
      <SectionTitle title="Get in Touch" description="Contact Me" />
      <a
        href="mailto:bingazya@gmail.com"
        className={buttonVariants({ size: "lg" }) + " hover:opacity-80  "}
      >
        <Mail className="size-4" />
        <span>Say Hello</span>
      </a>
    </section>
  );
};

export default ContactSection;
