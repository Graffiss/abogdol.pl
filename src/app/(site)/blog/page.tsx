import { getBlogPosts } from "../../../../sanity/handlers/blog-posts/handle-get";

const BlogPage = async () => {
  const blogPosts = await getBlogPosts();

  return (
    <div>
      <h1>Blog</h1>
      {blogPosts.length > 0 &&
        blogPosts.map((post) => {
          return (
            <div key={post.slug}>
              <h2>{post.name}</h2>
            </div>
          );
        })}
    </div>
  );
};

export default BlogPage;
