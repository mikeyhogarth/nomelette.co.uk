import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

// schema imports
import blockContent from "./blockContent";
import recipe from "./recipe";
import book from "./book";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    // document types
    recipe,
    book,
    // object types
    blockContent,
  ]),
});
