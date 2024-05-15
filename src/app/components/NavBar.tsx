import Link from "next/link";

const navBar = () => {
  return (
    <div className="mx-auto max-w-5xl px6">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href="/">
          <div className="text-2xl font-bold">
            Gabs<span className=" text-purple-500">Book</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default navBar;
