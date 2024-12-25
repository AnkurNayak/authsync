import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";

const ClientSideLoginComponent = () => {
  const { data: session } = useSession();
  // console.log(session);
  return (
    <div className="container mx-auto flex justify-center">
      <div className="p-4 md:p-6">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col rounded-2xl bg-card max-w-5xl w-full">
            <div className="rounded-t-2xl bg-gray-700 text-white p-4 font-bold">
              Session Data
            </div>
            <div className="whitespace-pre-wrap break-all px-4 py-6">
              {JSON.stringify(session, null, 2)}
            </div>
          </div>
          <div className="flex mt-6 gap-6 text-xs sm:text-base">
            <button
              onClick={() => signIn("google")}
              className="px-4 bg-card rounded-md h-10 flex items-center space-x-2 justify-center"
            >
              <FcGoogle />
              <span>Login with Google</span>
            </button>
            <button
              onClick={() => signIn("github")}
              className="px-4 bg-card rounded-md h-10 flex items-center space-x-2 justify-center"
            >
              <FaGithub />
              <span>Login with GitHub</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSideLoginComponent;
