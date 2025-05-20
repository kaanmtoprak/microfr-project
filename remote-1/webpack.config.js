const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = merge(commonConfig, {
  plugins: [
    new ModuleFederationPlugin({
      name: "remote-1", 
      filename: "remoteEntry.js",
      exposes: {
        './Component': './src/Component', 
      },
      shared: {
        react: { singleton: true, eager: true },
        "react-dom": { singleton: true, eager: true },
      },
    }),
  ],
});