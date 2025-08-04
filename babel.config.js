module.exports = function (api) {
  api.cache(true); // Cache Babel configurations for faster builds

  return {
    presets: ['babel-preset-expo'], // Essential preset for Expo projects
    plugins: [
      // Add any additional Babel plugins here if needed
    ],
  };
};