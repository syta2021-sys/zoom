import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    postcss: (opts, { addPlugins }) => {
      addPlugins(tailwindcss());
    },
  },
  html: {
    title: 'Launch Meeting - Zoom',
    favicon: './src/assets/favicon.ico'
  },
});
