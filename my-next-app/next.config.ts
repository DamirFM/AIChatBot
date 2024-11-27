const nextConfig = {
  webpack: (config) => {
    // Ensure compatibility with `zod` or other modules
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
    };
    return config;
  },
};

module.exports = nextConfig;
