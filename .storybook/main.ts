import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

const config: StorybookConfig = {
   stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
   addons: [
      '@chromatic-com/storybook',
      '@storybook/addon-vitest',
      '@storybook/addon-a11y',
      '@storybook/addon-docs',
   ],
   framework: '@storybook/react-vite',
   staticDirs: ['../public'],

   async viteFinal(config) {
      config.plugins = config.plugins || [];
      config.plugins.push(svgr());
      return mergeConfig(config, {
         //  css: {
         //     preprocessorOptions: {
         //        scss: {
         //           additionalData: `@use "@/styles/abstracts" as *;`,
         //        },
         //     },
         //  },
      });
   },
};
export default config;
