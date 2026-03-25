import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#1A3D2B",
          mid: "#2D5E42",
          light: "#4A8C6A",
        },
        sage: "#4A8C6A",
        mint: "#A8D5B5",
        pale: "#EFF7F2",
        accent: "#6BBF8E",
        rule: "#D4E8DA",
        ink: {
          DEFAULT: "#111810",
          2: "#3A4A3E",
          muted: "#7A8C80",
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
