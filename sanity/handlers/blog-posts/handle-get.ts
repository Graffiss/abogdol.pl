import { createClient, groq } from "next-sanity";
import { type BlogPost } from "sanity/types/blog-post.types";
import clientConfig from "../../config/client-config";

export async function getBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "blogPost"]{
    _id,
    _type,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    content
  }`;

  return createClient(clientConfig).fetch(groq`${query}`);
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  const query = `*[_type == "blogPost" && slug.current == $slug][0]{
      _id,
      _type,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      content
    }`;

  return createClient(clientConfig).fetch(groq`${query}`, { slug });
}
