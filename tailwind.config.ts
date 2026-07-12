import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Ink — near-black neutral scale (text + surfaces)
        ink: {
          950: "#0A0A0A",
          900: "#171717",
          800: "#262626",
          700: "#404040",
          500: "#737373",
          400: "#A3A3A3",
          300: "#D4D4D4",
        },
        // Surfaces & hairlines
        surface: "#FAFAFA",
        line: "#EAEAEA",
        // Single restrained accent — emerald (growth / learning)
        accent: {
          700: "#047857",
          600: "#059669",
          500: "#10B981",
          100: "#D1FAE5",
          50: "#ECFDF5",
        },
      },
      fontFamily: {
        sans: ["var(--font-vazir)", "system-ui", "sans-serif"],
        latin: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
      },
      maxWidth: {
        content: "1120px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
