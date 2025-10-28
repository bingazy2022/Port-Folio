import { client } from "@/sanity/lib/client";
import { Skill, skillCategory } from "@/types/interfaces";

export async function getSkills(category: skillCategory) {
  const query = `*[_type=="skills" && category=="${category}"]{ 
  _id,title,value,category
}[]`;

  const data = await client.fetch(query);
  return data as Skill[];
}
