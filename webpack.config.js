const path = require("path");

const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";

  return {
    mode: isProd ? "production" : "development",

    // Three independent bundles (no shared runtime chunk for extensions).
    entry: {
      content: path.resolve(__dirname, "src/content/index.tsx"),   // or .ts/.js
      options: path.resolve(__dirname, "src/options/index.tsx"),
      background: path.resolve(__dirname, "src/background/worker.ts"),
    },

    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
      // Prevent code-splitting and chunk loading paths from sneaking in
      chunkFilename: "[name].js",
      publicPath: "",
    },

    // Don’t generate extra chunks; keep one file per entry (Chrome extensions prefer this).
    optimization: {
      splitChunks: false,
      runtimeChunk: false,
      minimize: isProd,
    },

    // Avoid devtool modes that use `eval` (disallowed by the Chrome Web Store).
    devtool: isProd ? "source-map" : "source-map",

    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },

    module: {
      rules: [
        // TypeScript / JavaScript
        {
          test: /\.[tj]sx?$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader",
            options: {
              transpileOnly: true, // speed; rely on your editor/CI for type checks
            },
          },
        },

        // CSS (import "./styles.css")
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },

        // Static assets (images, fonts)
        {
          test: /\.(png|jpe?g|gif|svg|webp|ico|eot|ttf|woff2?)$/i,
          type: "asset/resource",
          generator: {
            filename: "assets/[name][ext]",
          },
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin(),

      // Make NODE_ENV available in your code
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(isProd ? "production" : "development"),
      }),

      // Copy manifest.json and icons verbatim into /dist
      new CopyWebpackPlugin({
        patterns: [
          { from: "manifest.json", to: "manifest.json" },
          { from: "public/icons", to: "icons", noErrorOnMissing: true },
          // You can add static HTML pages too:
          // { from: "public/help.html", to: "help.html" },
        ],
      }),

      // Generate options.html that loads options.js
      new HtmlWebpackPlugin({
        filename: "options.html",
        chunks: ["options"],
        templateContent: ({ htmlWebpackPlugin }) => `
          <!doctype html>
          <html>
            <head>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <title>Extension Options</title>
            </head>
            <body>
              <div id="root"></div>
            </body>
          </html>
        `,
        inject: "body",
        scriptLoading: "defer",
        minify: isProd,
      }),
    ],

    // For background service worker, target webworker semantics.
    // (This applies to *all* entries; fine here since we avoid DOM APIs in background.)
    target: "webworker",

    // Keep builds quiet; extension code doesn’t need noisy logs.
    infrastructureLogging: { level: "warn" },
    stats: "minimal",
  };
};
