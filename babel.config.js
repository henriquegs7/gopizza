module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    "react-native-reanimated/plugin",
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
        alias: {
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@screens": "./src/screens",
        },
      },
    ],
  ],
};
