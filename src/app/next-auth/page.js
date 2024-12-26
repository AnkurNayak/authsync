"use client";
import ClientSideLoginComponent from "@/components/next-auth/ClientSideLoginComponent";
import { SessionProvider } from "next-auth/react";

const NextAuthComponentPage = () => {
  console.log(process.env.NEXTAUTH_URL);
  console.log(process.env.NEXTAUTH_SECRET);
  console.log(process.env.GITHUB_CLIENT_ID);
  console.log(process.env.GITHUB_CLIENT_SECRET);
  console.log(process.env.GOOGLE_CLIENT_ID);
  console.log(process.env.GOOGLE_CLIENT_SECRET);
  return (
    <SessionProvider>
      <ClientSideLoginComponent />
    </SessionProvider>
  );
};

export default NextAuthComponentPage;
