import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        red: "#EE5454",
        white: "#fff",
        pink: "#A729F5",
        almost_dark: "#313E51",
        dark_gray: "#3B4D66",
        gray: "#626C7F",
        light_gray: "#ABC1E1",
        almost_white: "#F4F6FA",
        green: "#26D782",
      },
    },
  },
  plugins: [],
};
export default config;
