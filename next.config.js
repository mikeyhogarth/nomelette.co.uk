const withPWA = require("next-pwa")({
  disable: process.env.NODE_ENV === "development",
  dest: "public",
});

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  swcMinify: false,
});
