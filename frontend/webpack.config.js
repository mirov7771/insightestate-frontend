const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    devtool: isProduction ? undefined : 'eval-source-map',
    entry: './src/index.tsx',
    output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@': path.resolve(__dirname, 'src'), // Алиас для папки src
      },
      fallback: {
        // add this line to resolve.fallback
        "buffer": require.resolve("buffer")
      }
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.module\.scss$/, // Обработка SCSS-модулей
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                  exportLocalsConvention: 'asIs',
                  namedExport: false,
                },
              },
            },
            'postcss-loader', // PostCSS для модульных SCSS
            'sass-loader',
          ],
        },
        {
          test: /\.scss$/,
          exclude: /\.module\.scss$/, // Обработка обычных SCSS файлов
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
          ],
        },
        {
          test: /\.svg$/,
          oneOf: [
            {
              issuer: /\.[jt]sx?$/,
              resourceQuery: /react/, // Используется при импорте с `?react`
              use: ['@svgr/webpack'],
            },
            {
              type: 'asset/resource', // Обрабатывает SVG как файл
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|webp|ico)$/i, // Поддержка форматов PNG, JPEG, GIF, WebP
          type: 'asset/resource', // Загружает файлы в папку output и возвращает URL
        },
        {
          test: /\.(svg|png|jpg|jpeg|gif|ico)$/,
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css', // Генерация CSS-файлов
        chunkFilename: '[id].css',
      }),
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      }),
    ],
    devServer: {
      static: './dist',
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
    },
  };
};
