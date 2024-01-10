import path from "path";
import { Configuration } from "webpack";
import HTMLWebpackPlugin from 'html-webpack-plugin'

const config: Configuration = {
    mode:
      (process.env.NODE_ENV as "production" | "development" | undefined) ??
      "development",
    entry: "./src/index.tsx",
    module: {
      rules: [
        {
          test: /.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HTMLWebpackPlugin({
       template: 'public/index.html'
      }),
    ],
  };
  
  export default config;