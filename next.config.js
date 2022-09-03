/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'upload.wikimedia.org',
      'img.icons8.com',
      'cdn.britannica.com',
      'i.pinimg.com',
      'robohash.org',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
    ],
  },
  // async headers() {
  //   return [
  //     {
  //       source: '/api/graphql',
  //       headers: [
  //         {
  //           key: 'Access-Control-Allow-Credentials',
  //           value: 'true',
  //         },
  //         {
  //           key: 'Access-Control-Allow-Origin',
  //           value: 'https://studio.apollographql.com',
  //         },
  //         {
  //           key: 'Access-Control-Allow-Headers',
  //           value: 'Content-Type',
  //         },
  //       ],
  //     },
  //   ];
  // },
};
