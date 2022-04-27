export default {
  name: "recipe",
  title: "Recipe",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
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
    },
    {
      name: "method",
      title: "Method",
      type: "text",
    },
    {
      name: "footnote",
      title: "Footnote",
      type: "blockContent",
    },
    {
      name: "vegetarian",
      title: "Vegetarian",
      type: "boolean",
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
