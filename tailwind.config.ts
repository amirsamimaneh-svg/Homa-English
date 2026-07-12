import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Navy — primary/base (trust, aviation, sky)
        navy: {
          900: "#0A1F33",
          800: "#0F2942",
          700: "#16344F",
          600: "#1F4266",
          100: "#DCE8F1",
          50: "#F5F9FC",
        },
        // Amber/Copper — secondary (CTAs, rewards, AI)
        amber: {
          700: "#8A5321",
          600: "#BD7527",
          500: "#D98E3B",
          100: "#FBEBD4",
        },
        // Semantic
        success: {
          DEFAULT: "#2F9E6B",
          bg: "#E4F5EC",
          text: "#1F7A50",
        },
        error: "#D64545",
        info: "#4FA8D8",
        // Gamified extras
        streak: "#FF7A45",
        xp: "#34B37A",
        // Text neutrals
        body: "#3A5169",
        muted: "#5B7286",
        faint: "#9DAEBB",
        // Borders
        line: {
          DEFAULT: "#ECF1F5",
          200: "#DCE4EA",
          300: "#E2E8EE",
        },
        page: "#F5F9FC",
      },
      fontFamily: {
        sans: ["var(--font-vazir)", "Vazirmatn", "sans-serif"],
        mono: ["var(--font-grotesk)", "Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        btn: "10px",
        card: "16px",
        pill: "100px",
      },
      lineHeight: {
        fa: "1.6",
        "fa-loose": "1.9",
      },
      keyframes: {
        homaFloat: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        sparklePulse: {
          "0%,100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
      },
      animation: {
        homaFloat: "homaFloat 5s ease-in-out infinite",
        sparklePulse: "sparklePulse 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
