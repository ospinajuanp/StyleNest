import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rznkuhtjleowjbvrmztk.supabase.co",
        pathname: "/storage/v1/object/public/userSupplierImage/**",
      },
    ],
  },
};

export default nextConfig;
