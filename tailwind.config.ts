import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Deep space base
        base: {
          DEFAULT: "#07070E",
          900: "#0A0A14",
          800: "#0F0F1C",
          700: "#161628",
        },
        // Vibrant brand spectrum (violet → cyan)
        brand: {
          violet: "#8B5CF6",
          indigo: "#6366F1",
          fuchsia: "#D946EF",
          cyan: "#22D3EE",
          sky: "#38BDF8",
        },
        ink: {
          50: "#F5F5FA",
          200: "#D6D6E4",
          300: "#B4B4C8",
          400: "#8B8BA0",
          500: "#6B6B80",
        },
      },
      fontFamily: {
        sans: ["var(--font-vazir)", "system-ui", "sans-serif"],
        latin: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1160px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        floatSlow: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(0,-22px)" },
        },
        pulseGlow: {
          "0%,100%": { opacity: "0.5" },
          "50%": { opacity: "0.9" },
        },
        drift: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-20px) scale(1.08)" },
          "66%": { transform: "translate(-20px,18px) scale(0.96)" },
        },
        gradientShift: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        spinSlow: {
          to: { transform: "rotate(360deg)" },
        },
        shimmer: {
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
        float: "float 6s ease-in-out infinite",
        floatSlow: "floatSlow 9s ease-in-out infinite",
        pulseGlow: "pulseGlow 5s ease-in-out infinite",
        drift: "drift 18s ease-in-out infinite",
        gradientShift: "gradientShift 6s ease infinite",
        spinSlow: "spinSlow 14s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
