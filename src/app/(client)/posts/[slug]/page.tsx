import { Header } from "@/app/components/Header";
import { Post } from "@/app/utils/interface";
import { PortableText } from "@portabletext/react";
import { VT323 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client, urlFor } from "../../../../../sanity/lib/client";

interface Params {
  params: {
    slug: string;
  };
}

// font
const dataFont = VT323({ weight: "400", subsets: ["latin"] });

async function getPost(slug: string) {
  const query = `
  *[_type == "post" && slug.current == "${slug}"] [0]{
    title,
      slug,
      publishedAt,
      excerpt,
      _id,
      tags[]-> {
        name,
        slug,
        _id        
      },
      body[],
  }`;

  const post = await client.fetch(query);
  return post;
}

export const revalidate = 60;

const page = async ({ params }: Params) => {
  const post: Post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <Header title={post?.title} />
      <div className="text-center">
        <span className={` ${dataFont?.className} text-purple-500`}>
          {new Date(post?.publishedAt).toLocaleDateString("fr-FR")}
        </span>

        <div className="mt-5">
          {post?.tags?.map((tag) => (
            <Link key={tag?._id} href={`/tag/${tag?.slug?.current}`}>
              <span className="mr-2 p-1 rounded-sm lowercase border border-gray-900">
                #{tag?.name}
              </span>
            </Link>
          ))}
        </div>

        <div className={`${bodyTextStyle} `}>
          <PortableText
            value={post?.body}
            components={myPortableTextComponents}
          />
        </div>
      </div>
    </div>
  );
};

export default page;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlFor(value).url()}
        alt="post"
        width={700}
        height={700}
        className="my-4"
      />
    ),
  },
};

const bodyTextStyle = `
      mt-14
      py-4
      text-justify
      max-w-2xl
      mx-auto
      prose-headings:my-5
      prose-heading:text-2xl
      prose-p:mb-5
      prose-p:leading-7
      prose-code:my-5
      prose-code:text-sm
      prose-code:leading-7
      prose-code:bg-purple-950
      prose-code:rounded-md
      prose-code:p-2
    
      `;
