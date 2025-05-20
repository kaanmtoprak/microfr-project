const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
        
module.exports = merge(commonConfig, {
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      remotes: {
        remote1: "remote-1@http://localhost:3001/remoteEntry.js",
        remote2: "remote-2@http://localhost:3002/remoteEntry.js",
      },
      shared: {
        react: { singleton: true, eager: true },
        "react-dom": { singleton: true, eager: true },
      },
    }),
  ],
});