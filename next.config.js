/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        // temporary until I make something here
        destination: "https://www.github.com/justinoboyle",
        permanent: false,
      },
    ];
  },
}
