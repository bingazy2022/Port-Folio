import { defineField, defineType } from "sanity";

export default defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(3)
          .error("A title of minimum 3 characters is required")
          .max(100)
          .error("Title max 100 characters"),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required().min(10).max(1000),
    }),
    defineField({
      name: "images",
      title: "Project Images",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "link",
      title: "Project Link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({ scheme: ["http", "https"] }).error(
          "Please enter a valid URL"
        ),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "github",
      title: "Github Repository Link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({ scheme: ["http", "https"] }).error(
          "Please enter a valid URL"
        ),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "date",
      validation: (Rule) =>
        Rule.min(new Date(2020, 0, 1).toISOString()).max(
          new Date().toISOString()
        ),
    }),
    defineField({
      name: "isResponsive",
      title: "Is Responsive",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
