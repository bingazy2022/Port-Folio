import { defineField, defineType } from "sanity";

export default defineType({
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: "value",
      title: "Percentage Value",
      type: "number",
      validation: (Rule) =>
        Rule.required()
          .min(0)
          .error("Value must be between 1 and 100")
          .max(100)
          .error("Value must be between 1 and 100"),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      initialValue: "frontend",
      options: {
        list: [
          { title: "Front End", value: "frontend" },
          { title: "Back End", value: "backend" },
          { title: "Tools", value: "tools" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
