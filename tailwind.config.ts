import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        luxury: {
          gold: "#f5d48b",
          softGold: "#f7e3b5",
          dark: "#050816",
          ink: "#0b1020",
        },
      },
      boxShadow: {
        luxury: "0 24px 80px rgba(0, 0, 0, 0.85)",
      },
      backgroundImage: {
        "hero-luxury":
          "url('https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1600&q=80')",
        "section-texture":
          "url('https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80')",
      },
    },
  },
  plugins: [],
};

export default config;

