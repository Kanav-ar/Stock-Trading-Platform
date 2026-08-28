import { Link } from "react-router";
import BlueBtn from "../components/common/BlueBtn";

export default function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-12">
        <h1 className="text-gray-700 dark:text-white text-4xl font-bold text-center">
          Page Not Found !
        </h1>
        <Link to={"/"}>
          <BlueBtn tag="Go Home" />
        </Link>
      </div>
    </div>
  );
}
