"use client";
import ClientSideLoginComponent from "@/components/next-auth/ClientSideLoginComponent";
import { SessionProvider } from "next-auth/react";
const NextAuthComponentPage = () => {
  return (
    <SessionProvider>
      <ClientSideLoginComponent />
    </SessionProvider>
  );
};

export default NextAuthComponentPage;
