/** @type {import('next').NextConfig} */
const nextConfig = {
    target: 'server',
    output: 'standalone',
    env: {
        target: 'server',
        output: "standalone",
        API_HOST_URL: process.env.API_HOST_URL
    }
}

export default nextConfig;
