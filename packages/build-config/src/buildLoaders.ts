import { ModuleOptions } from 'webpack';
import { BuildOptions } from './types/types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypescript from 'react-refresh-typescript';
import { buildBabelLoader } from './babel/buildBabelLoader';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const { mode } = options;
  const isDev = mode === 'development';

  const assetLoader: ModuleOptions['rules'][0] = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const svgLoader: ModuleOptions['rules'][0] = {
    test: /\.svg$/i,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          svgConfig: {
            plugins: [
              { name: 'convertColors', params: { currentColor: true } },
            ],
          },
        },
      },
    ],
  };

  const cssLoaderWithModules: ModuleOptions['rules'][0] = {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
      },
    },
  };

  const scssLoader: ModuleOptions['rules'][0] = {
    test: /\.s[ac]ss$/i,
    // order is important
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
      'sass-loader',
    ],
  };

  const tsLoader: ModuleOptions['rules'][0] = {
    // ts-loader works with JSX too!!!
    // otherwise we had to use babel!!
    test: /\.tsx?$/i,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: isDev,
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypescript()].filter(Boolean),
          }),
        },
      },
    ],
    exclude: '/node_modules/',
  };

  const babelLoader = buildBabelLoader(options);

  return [assetLoader, scssLoader, tsLoader, svgLoader];
}
