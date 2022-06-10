export default {
  name: "recipe",
  title: "Recipe",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "serves",
      title: "Serves",
      type: "string",
    },
    {
      name: "cooking_time",
      title: "Cooking Time",
      type: "string",
    },
    {
      name: "preparation_time",
      title: "Preparation Time",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
      validation: (Rule) =>
        Rule.required().custom((tags) => {
          const upperCaseTags = tags.reduce(
            (acc, tag) => acc + (tag.toLowerCase() !== tag ? 1 : 0),
            0
          );

          return upperCaseTags === 0
            ? true
            : `${upperCaseTags} tag(s) contain upper case characters. Tags should all be lower case.`;
        }),
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "ingredients",
      title: "Ingredients",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "method",
      title: "Method",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "footnote",
      title: "Footnote",
      type: "blockContent",
    },
    {
      title: "Book",
      name: "book",
      type: "reference",
      to: [{ type: "book" }],
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
