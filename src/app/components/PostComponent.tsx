import { Lilita_One, VT323 } from "next/font/google";
import Link from "next/link";
import { Post } from "../utils/interface";

interface Props {
  post: Post;
}

// font
const font = Lilita_One({ weight: "400", subsets: ["latin"] });
const dataFont = VT323({ weight: "400", subsets: ["latin"] });

const PostComponent = ({ post }: Props) => {
  return (
    <div className={CardStyle}>
      <Link href={`/posts/${post?.slug?.current}`}>
        <h2 className={`${font.className}, text-2xl `}>{post?.title}</h2>
        <p className={`${dataFont.className}, text-purple-500 my-2`}>
          {new Date(post?.publishedAt).toDateString()}
        </p>
        <p>{post?.excerpt}</p>
      </Link>

      {/* TAGS */}
      <div className="pt-8">
        {post?.tags?.map((tag) => (
          <span
            key={tag?._id}
            className="mr-2 p-1 rounded-sm lowercase border border-gray-900">
            #{tag?.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PostComponent;

const CardStyle = `
  p-4
  m-8
  border 
  border-gray-900 
  rounded-md 
  shadow-sm 
  shadow-purple-950 
  hover:bg-purple-950
  hover:bg-opacity-10
  max-h-48
  `;
