import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textGlow: {
        sm: '0 0 2px var(--tw-shadow-color)',
        md: '0 0 4px var(--tw-shadow-color)',
        lg: '0 0 6px var(--tw-shadow-color)',
        xl: '0 0 8px var(--tw-shadow-color)',
      },
      textShadow: {
        sm: '1px 1px 2px var(--tw-shadow-color)',
        DEFAULT: '2px 2px 4px var(--tw-shadow-color)',
        lg: '4px 4px 8px var(--tw-shadow-color)',
        xl: '4px 4px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    }),
    plugin(function ({ addUtilities, theme, e }) {
      const values = theme('textGlow');
      if (typeof values === 'object' && values !== null) {
        const textShadowUtilities = Object.entries(values).map(([key, value]) => {
          return {
            [`.${e(`text-glow-${key}`)}`]: { textShadow: `${value}` },
          };
        });
        addUtilities(textShadowUtilities);

        const boxShadowUtilities = Object.entries(values).map(([key, value]) => {
          return {
            [`.${e(`box-glow-${key}`)}`]: { boxShadow: `${value}` },
          };
        });
        addUtilities(boxShadowUtilities);
      }
    }),
  ],
};
export default config;
