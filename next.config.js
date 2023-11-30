const withNextIntl = require("next-intl/plugin")("./src/i18n/config.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {};

const configWithI18n = withNextIntl(nextConfig);

module.exports = configWithI18n;
