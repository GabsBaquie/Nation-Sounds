import { Header } from "@/app/components/Header";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <Header title="404 - Page not found" />
      <div>
        <Link href="/">Return home</Link>
      </div>
    </div>
  );
};

export default NotFound;
