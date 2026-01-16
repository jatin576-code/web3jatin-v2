import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#01F2FB", 
        "primary-hover": "#00dbe3",
        "secondary": "#013E48", 
        "body-text": "#6C7A89", 
        "background-light": "#E6F5FC", 
        "background-dark": "#0d1a21",
        "surface": "#ffffff",
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(14, 26, 34, 0.05)',
        'glow': '0 10px 30px -5px rgba(1, 242, 251, 0.15)',
        'card': '0 0 0 1px rgba(205, 233, 234, 0.5), 0 2px 8px rgba(0,0,0,0.02)',
      },
    },
  },
  plugins: [],
};
export default config;