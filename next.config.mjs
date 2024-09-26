/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, { dev }) {
      // Disable source maps in production
      if (!dev) {
        config.devtool = false;
      }
  
      // Add ignore-loader for .css.map files to suppress missing source map warnings
      config.module.rules.push({
        test: /\.css\.map$/,
        loader: 'ignore-loader',
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  