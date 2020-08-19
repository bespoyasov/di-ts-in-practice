/* eslint-disable global-require, @typescript-eslint/no-var-requires, @typescript-eslint/explicit-function-return-type */
const path = require('path');
const {di} = require('@wessberg/di-compiler');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

function pathResolve(..._paths) {
  return path.resolve(__dirname, ..._paths);
}

/** @see: https://gist.github.com/nerdyman/2f97b24ab826623bff9202750013f99e */
function resolveTsconfigPathsToAlias() {
  const tsconfig = require('./tsconfig.json');
  const {paths, baseUrl} = tsconfig.compilerOptions;
  const aliases = {};

  Object.keys(paths).forEach((item) => {
    const key = item.replace('/*', '');
    const value = pathResolve(baseUrl + paths[item][0].replace('/*', ''));
    aliases[key] = value;
  });

  return aliases;
}

const networkSettings = {
  port: 1337,
};

const builderSettings = {
  source: 'src',
  dest: 'dist',
};

const config = {
  ...networkSettings,
  ...builderSettings,
};

const cleanPlugin = new CleanWebpackPlugin();
const htmlPlugin = new HtmlPlugin({
  template: pathResolve(config.source, 'index.html'),
});

const plugins = [htmlPlugin, cleanPlugin];

module.exports = {
  entry: [pathResolve(config.source, 'index.ts')],
  devtool: 'source-map',
  output: {
    path: pathResolve(config.dest),
    filename: 'bundle.[contenthash].js',
    sourceMapFilename: 'bundle.[contenthash].js.map',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            options: {
              reportFiles: [`${config.source}/**/*.ts`],
              getCustomTransformers: (program) => di({program}),
            },
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: resolveTsconfigPathsToAlias(),
  },
  devServer: {
    contentBase: pathResolve(config.dest),
    port: config.port,
    compress: true,
    open: true,
  },
  plugins,
};
