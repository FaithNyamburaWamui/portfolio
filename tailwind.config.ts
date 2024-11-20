import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      fontFamily: {
        sans: ['Jost', 'sans-serif'], // Set Jost as the default sans font
        jost: ['Jost', 'sans-serif'], // Define a custom font alias
      },
    },
  },
  plugins: [],
};
export default config;
