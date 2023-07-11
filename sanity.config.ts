import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas/index";

const config = defineConfig({
  name: "default",
  title: "My personal website - abogdol.pl",
  projectId: "rd94jtll",
  dataset: "production",
  apiVersion: "2023-06-04",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
