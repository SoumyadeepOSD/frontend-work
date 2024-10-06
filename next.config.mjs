/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 's3-alpha-sig.figma.com',
          port: '', // Leave empty if there's no specific port
          pathname: '/**', // This allows all image paths under this domain
        },
      ],
    },
  };
  
  export default nextConfig;
  