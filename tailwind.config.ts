import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["Arial", "Helvetica", "sans-serif"]
      },
      boxShadow: {
        editorial: "0 25px 80px rgba(66, 0, 70, 0.16)",
        paper: "0 12px 35px rgba(0,0,0,0.12)"
      }
    }
  },
  plugins: []
};
export default config;
