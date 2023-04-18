import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#661AE6",
      secondary: "#D926AA",
      accent: "#fcceb5",
      neutral: "#211424",
      base: {
        "50": "#f2f4fc",
        "100": "#e2e6f7",
        "200": "#ccd4f1",
        "300": "#a9b8e7",
        "400": "#8093da",
        "500": "#6272cf",
        "600": "#4e57c2",
        "700": "#4447b1",
        "800": "#3c3c91",
        "900": "#343674",
        "950": "#222244",
      },
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
      black: "#000000",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          white: "#ffffff",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
} satisfies Config;
