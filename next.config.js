const { config } = require("dotenv");
const path = require("path");
require("dotenv").config();
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
