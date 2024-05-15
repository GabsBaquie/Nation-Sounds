import { Header } from "@/app/components/Header";
import PostComponent from "@/app/components/PostComponent";
import { Post } from "@/app/utils/interface";
import { client } from "../../../../../sanity/lib/client";

async function getPostbyTag(tag: string) {
  const query = `*[_type == "post" && references(*[_type == "tag" && slug.current == "${tag}"]._id)]{
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

  const posts = client.fetch(query);
  return posts;
}

interface Params {
  params: {
    slug: string;
  };
}

export const revalidate = 60;

const page = async ({ params }: Params) => {
  const posts: Array<Post> = await getPostbyTag(params.slug);
  return (
    <div>
      <Header title={`#${params?.slug}`} tags />
      <div>
        {posts?.length > 0 &&
          posts.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </div>
  );
};

export default page;
