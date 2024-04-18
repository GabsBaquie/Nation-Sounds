import "@/css/index.css";

interface Props {
  title: string;
}

export const Header = ({ title = "" }: Props) => {
  return (
    <header className="py-14 px-4 mb-12 text-center border-b-2 border-purple-900">
      <h2 className=" uppercase text-2xl font-bold mx-auto max-w-2xl">
        {title}
      </h2>
    </header>
  );
};
