import * as path from 'path';
import {Configuration} from 'webpack';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import {TsconfigPathsPlugin} from 'tsconfig-paths-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';

export default (env: Record<string, any>, args: Record<string, any>): Configuration => {
  const isProduction = args.mode === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'source-map',
    entry: ['./src/index.tsx', './src/scss/style.scss'],
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'index.js',
    },
    resolve: {
      alias: {
        fs: 'memfs',
      },
      extensions: [".ts", ".tsx", "..."],
      plugins: [new TsconfigPathsPlugin()]
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(sa|sc|c)ss$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: {
                  auto: true,
                  localIdentName: '[local]--[hash:base64:5]',
                },
              },
            },
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.html$/i,
          exclude: /node_modules/,
          loader: 'html-loader',
          options: {
            esModule: true,
          },
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/img/[hash][ext][query]',
          },
        },
        {
          test: /\.(mp3|wav)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/audio/[hash][ext][query]',
          },
        },
        {
          test: /\.(ico)$/,
          type: 'asset/resource',
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          type: 'asset/resource',
          generator: {
            filename: 'assets/fonts/[hash][ext][query]',
          },
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'index.html',
        favicon: './favicon.ico',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
      new ESLintWebpackPlugin(),
    ],
  };
};
