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
        "forest-green": "#1E4D2B",
        "champ-gold": "#F2B233",
        "safety-orange": "#E9772F",
        "slate-dark": "#2E2E2E",
      },
    },
  },
  plugins: [],
};
export default config;
