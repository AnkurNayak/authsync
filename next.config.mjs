/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // images: {
  //   unoptimized: true,
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: "/formik",
  //       destination: "/formik/sign-in",
  //       permanent: true,
  //     },
  //   ];
  // },

  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  },
};

export default nextConfig;
