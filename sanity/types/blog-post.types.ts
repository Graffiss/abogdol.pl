import { type PortableTextBlock } from "sanity";

export interface BlogPost {
  _id: string;
  _type: "project";
  _createdAt: Date;
  name: string;
  slug: string;
  content: PortableTextBlock[];
}
