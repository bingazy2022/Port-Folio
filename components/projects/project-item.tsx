import { Project } from "@/types/interfaces";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { FC } from "react";
import { DialogHeader } from "../ui/dialog";
import ProjectCard from "./peoject-card";
import { urlFor } from "@/sanity/lib/image";
import Carousel from "./carousel";
import InfoItem from "./info-item";
import { Separator } from "../ui/separator";
import { Calendar, Eye, Github, LayoutDashboard, Tags } from "lucide-react";
import { buttonVariants } from "../ui/button";

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ProjectCard
          imageUrl={urlFor(project.images[0]).url()}
          title={project.title}
        />
      </DialogTrigger>
      <DialogContent className="p-0  sm:max-w-4xl lg:max-w-7xl">
        <DialogHeader className="bg-muted p-4 md:p-6">
          <DialogTitle className="text-foreground capitalize text-xl font-semibold truncate">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        <div className="grid lg:grid-cols-2 gap-4 p-4 max-h-[85vh] overflow-x-hidden overflow-y-auto">
          <Carousel images={project.images} />
          <div className="space-y-4 lg:space-y-6 p-2 lg:p-4 size-full">
            <p className="text-sm">{project.description}</p>
            <Separator />
            <article className="space-y-2 lg:space-y-3">
              <InfoItem label="published" icon={Calendar}>
                <p className="font-semibold">
                  {project.publishedAt.toLocaleString()}
                </p>
              </InfoItem>
              <InfoItem label="Layout" icon={LayoutDashboard}>
                <p className="font-semibold">
                  {project.isResponsive ? "responsive" : "n/a"}
                </p>
              </InfoItem>
              <InfoItem label="Tags" icon={Tags}>
                <div className="flex flex-wrap items-center gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="border rounded-sm py-1 px-2 hover:bg-muted cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </InfoItem>
            </article>
            <Separator />
            <div className="flex items-center gap-2 ">
              <a
                href={project.demoLink}
                className={buttonVariants() + " hover:opacity-80"}
                target="_blank"
              >
                <Eye className="size-4" />
                <span>view demo</span>
              </a>
              <a
                href={project.github}
                className={buttonVariants({ variant: "outline" })}
                target="_blank"
              >
                <Github className="size-4" />
                <span>source code</span>
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectItem;
