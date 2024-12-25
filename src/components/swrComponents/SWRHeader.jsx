import { FaLink } from "react-icons/fa";
import Link from "next/link";

export const SWRHeader = () => (
  <div>
    <h1 className="text-2xl md:text-3xl font-bold">
      Data fetching using SWR library
    </h1>
    <Link
      href={"https://swr.vercel.app/docs/getting-started"}
      target="_blank"
      className="flex items-center gap-2 mt-3 mb-6"
    >
      <h4>View more about SWR</h4>
      <FaLink size={20} />
    </Link>
  </div>
);
