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
          "@assets": "./src/assets/index.ts",
          "@components": "./src/components/index.ts",
          "@screens": "./src/screens/index.ts",
          "@hooks": "./src/hooks/auth.tsx",
        },
      },
    ],
  ],
};
