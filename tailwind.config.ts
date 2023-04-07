import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#af2b62",
      secondary: "#fff8b5",
      accent: "#fcceb5",
      neutral: "#211424",
      "base-100": "#222244",
      info: "#44A0D5",
      success: "#6EE7AD",
      warning: "#F4C415",
      error: "#FA3D5D",
      gray: {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827",
        "950": "#030712",
      },
      white: "#ffffff",
    },
  },
  plugins: [],
} satisfies Config;
