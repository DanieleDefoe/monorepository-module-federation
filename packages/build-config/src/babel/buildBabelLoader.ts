import { ModuleOptions } from 'webpack';
import { BuildOptions } from '../types/types';
import { removeDataTestIdBabelPlugin } from './removeDataTestIdBabelPlugin';

export function buildBabelLoader({
  mode,
}: BuildOptions): ModuleOptions['rules'][0] {
  const isDev = mode === 'development';
  const isProd = mode === 'production';

  const plugins = [];

  if (isProd) {
    plugins.push([
      removeDataTestIdBabelPlugin,
      {
        props: ['data-testid'],
      },
    ]);
  }

  return {
    test: /\.(js|jsx|ts|tsx)$/i,
    exclude: '/node_modules/',
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
          [
            '@babel/preset-react',
            {
              runtime: isDev ? 'automatic' : 'classic',
            },
          ],
        ],
        plugins: plugins.length ? plugins : undefined,
      },
    },
  };
}
