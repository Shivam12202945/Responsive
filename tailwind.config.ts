/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-blue': '#01aff4',
        'dark-gray': '#5e676b',
        'light-blue': '#d3e5ed',
        'drak-text-heading': '#333333',
        'background-light-blue': '#f8f9fa',
      },
      fontFamily: {
        "h2-text-heading": "var(--h2-text-heading-font-family)",
        "h4-16px-sub-heading": "var(--h4-16px-sub-heading-font-family)",
        "medium-heading-blue": "var(--medium-heading-blue-font-family)",
        "paragraph-text": "var(--paragraph-text-font-family)",
        "small-heading-h6": "var(--small-heading-h6-font-family)",
        "sub-heading": "var(--sub-heading-font-family)",
        'spline': ['"Spline Sans"', 'sans-serif'],
      },
      boxShadow: {
        shadow: "var(--shadow)",
      },
      keyframes: {
        colorChange: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 0%' },
        },
      },
      animation: {
        colorChange: 'colorChange 1s forwards',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      scale: {
        '115': '1.15',
      },
      screens: {
        'xs': '480px', // Custom breakpoint
      },
    },
    variants: {
      extend: {
        scale: ['hover'],
      },
    },
  },
  plugins: [],
};

export default config;
