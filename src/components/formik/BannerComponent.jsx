import Link from "next/link";
import { FaLink } from "react-icons/fa";

const BannerComponent = () => {
  return (
    <div className="relative hidden h-full flex-auto items-center justify-center overflow-hidden bg-[#171717] p-16 dark:border-l border-border md:flex lg:px-28">
      <svg
        viewBox="0 0 960 540"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMax slice"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 pointer-events-none ng-tns-c3974067089-80"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="100"
          className="text-gray-700 opacity-25 ng-tns-c3974067089-80"
        >
          <circle r="234" cx="196" cy="23"></circle>
          <circle r="234" cx="790" cy="491"></circle>
        </g>
      </svg>
      <svg
        viewBox="0 0 220 192"
        width="220"
        height="192"
        fill="none"
        className="absolute -top-16 -right-16 text-gray-700 ng-tns-c3974067089-80"
      >
        <defs>
          <pattern
            id="837c3e70-6c3a-44e6-8854-cc48c737b659"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect width="220" height="192"></rect>
      </svg>
      <div className="relative z-10 w-full max-w-2xl ">
        <div className="text-7xl font-bold leading-none text-gray-100">
          <div className="">Welcome to</div>
          <div className="">creative community</div>
        </div>
        <div className="mt-6 text-lg leading-6 tracking-tight text-gray-400 flex items-center">
          This form is built using Formik.
          <Link
            href={"https://formik.org/"}
            target="_blank"
            className="flex items-center gap-2 ml-2"
          >
            <h4 className="text-indigo-500 font-medium hover:underline">
              View more about Formik
            </h4>
            <FaLink size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
