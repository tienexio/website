/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderWidth: {
        '1': '1px',
      }
    },
    screens: {
      dash: {'max': '1490px'},
      xl: {'max': '1199px'},
      lg: {'max': '1029px'},
      md: {'max': '899px'},
      md2: {'max': '799px'},
      sm: {'max': '575px'},
      xm: {'max': '375px'},
    },
  },
  plugins: [],
}
