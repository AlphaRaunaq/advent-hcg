import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#6B0F1A", 
          mid: "#8B1A27",  
          light: "#A52030", 
        },
        sage: "#8B1A27",  
        mint: "#D4A0A7",  
        pale: "#F7F0F1",
        surface: "#f3e8e9",
        accent: "#cc3f3fff",  
        rule: "#E8D0D3",  
        ink: {
          DEFAULT: "#111010",
          2: "#3A2A2E",
          muted: "#8C7A7E",
        },
      },
      fontFamily: {
        serif: ["Libre Baskerville", "Georgia", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.03em",
        tighter: "-0.02em",
        tight: "-0.01em",
      },
    },
  },
  plugins: [],
};

export default config;
