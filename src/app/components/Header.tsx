import "@/css/index.css";
import Link from "next/link";

interface Props {
  title: string;
  tags?: boolean;
}

export const Header = ({ title = "", tags = false }: Props) => {
  return (
    <header className="py-14 px-4 mb-12 text-center border-b-2 border-purple-900">
      <h2 className=" uppercase text-2xl font-bold mx-auto max-w-2xl">
        {title}
      </h2>
      {tags && (
        <div className="text-xs mt-2 hover:text-purple-500">
          <Link href="/tag">#tags</Link>
        </div>
      )}
    </header>
  );
};
