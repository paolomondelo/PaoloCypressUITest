const config = {
  resolve: {
    extensions: [".ts", ".js", ".json", ".feature"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
};

export default config;
