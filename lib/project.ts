import { client } from "@/sanity/lib/client";
import { Project } from "@/types/interfaces";

export async function getProjects() {
  const query = `*[_type=="projects"]{ 
  _id,title,description,images,tags,demoLink,github,publishedAt,isResponsive
}`;

  const data = await client.fetch(query);
  return data as Project[];
}
