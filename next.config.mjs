/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  env: {
    CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY, // Ensure this is accessible
    CLERK_SECRET_KEY:process.env.CLERK_SECRET_KEY
  },
};

export default nextConfig;
