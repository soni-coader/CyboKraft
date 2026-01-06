/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    // Disable trailing slashes for better static hosting compatibility
    trailingSlash: true,
    // Optimize for production
    reactStrictMode: true,
    // Ensure proper asset paths
    assetPrefix: '',
    // Optimize images
    compress: true,
};

export default nextConfig;
