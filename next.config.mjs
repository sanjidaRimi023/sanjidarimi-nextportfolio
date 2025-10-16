/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                port: "",        
                pathname: "/**" 
            },
            {
                protocol: "https",
                hostname: "i.ibb.co",
                pathname: "/**"
            },
            {
                protocol: "https",
                hostname: "i.imgur.com",
                pathname: "/**"
            }
        ]
    }
};

export default nextConfig;