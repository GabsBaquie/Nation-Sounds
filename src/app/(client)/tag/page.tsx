import { Header } from "@/app/components/Header";
import { Tag } from "@/app/utils/interface";
import Link from "next/link";
import { client } from "../../../../sanity/lib/client";

async function getAllTags() {
  const query = ` 
  *[_type == "tag"]{
    name, 
    slug,
    _id,
    "postCount": count(*[_type == "post" && references("tags", ^._id)])
  }`;

  const tags = client.fetch(query);
  return tags;
}

export const revalidate = 60;

const page = async () => {
  const tags: Tag[] = await getAllTags();

  return (
    <div>
      <Header title="Tags" />

      <div>
        {tags?.length > 0 &&
          tags.map((tag) => (
            <div
              key={tag._id}
              className="mb-2 p-2 text-sm lowercase bg-gray-950 border border-gray-800 hover:text-purple-900">
              <Link href={`/tag/${tag.slug.current}`}>
                <div>
                  #{tag.name} ({tag?.postCount})
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default page;
