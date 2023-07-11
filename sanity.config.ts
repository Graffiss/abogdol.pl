import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { documentInternationalization } from "@sanity/document-internationalization";
import schemas from "./sanity/schemas/index";

const config = defineConfig({
  name: "default",
  title: "My personal website - abogdol.pl",
  projectId: "rd94jtll",
  dataset: "production",
  apiVersion: "2023-06-04",
  basePath: "/admin",
  plugins: [
    deskTool(),
    documentInternationalization({
      supportedLanguages: [
        { id: "en", title: "English" },
        { id: "pl", title: "Polish" },
        { id: "es", title: "Spanish" },
      ],
      schemaTypes: [...schemas.map((schema) => schema.name)],
    }),
  ],
  schema: { types: schemas },
});

export default config;
