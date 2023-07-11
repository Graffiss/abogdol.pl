const BlogPage = () => {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
};

export default BlogPage;

// TODO: Fix this
export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export function getStaticProps() {
  return {
    props: {
      title: "Blog",
      blogPosts: [],
    },
  };
}
