// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '', // facultatif
        pathname: '/**', // toutes les images
      },
    ],
  },
};
