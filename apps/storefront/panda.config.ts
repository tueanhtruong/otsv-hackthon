import { defineConfig } from '@pandacss/dev';
import { uiPreset } from 'ui/src/preset';
import { recipes } from 'ui/src/recipes';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx,js,jsx}', './src/**.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],
  prefix: 'ui',

  // Useful for theme customization
  theme: {
    extend: {},
  },
  presets: [uiPreset],

  // The output directory for your css system
  outdir: 'styled-system',
  jsxFramework: 'react',
  outExtension: 'js',
  staticCss: {
    recipes: Object.keys({ ...recipes }).reduce(
      (obj, r) => ({ ...obj, [r]: ['*'] }),
      {},
    ),
  },
});
