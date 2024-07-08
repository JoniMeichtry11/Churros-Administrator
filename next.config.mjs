/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
});

const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com, churros-administrator.web.app"],
  },
  images: {
    unoptimized: true,
  },
};

export default withPWA(nextConfig);
