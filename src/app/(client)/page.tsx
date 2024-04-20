import { client } from "../../../sanity/lib/client";
import "../../css/index.css";
import { Header } from "../components/Header";
import PostComponent from "../components/PostComponent";
import { Post } from "../utils/interface";

async function getPost() {
  const query = `
  *[_type == "post"] {
    title,
      slug,
      publishedAt,
      excerpt,
      _id,
      tags[]-> {
        name,
        slug,
        _id
      }
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const posts: Post[] = await getPost();
  return (
    <div>
      <Header title="Welcome to the blog" />
      <div>
        {posts?.length > 0 &&
          posts.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </div>
  );
}
