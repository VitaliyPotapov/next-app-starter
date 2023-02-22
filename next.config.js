const configureModuleTranspilation = require('next-transpile-modules');

// todo: remove after upgrade to next 13 as it's built-in
const withTM = configureModuleTranspilation(['@takeda/ui', '@takeda-digital/indexer']);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withTM(nextConfig);
