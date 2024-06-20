import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'interest-background': "url('public/images/interest-background.svg')",
      },
      colors: {
        "surface-50": "#FFFFFF",
        "surface-100": "#F7F9FD",
        "surface-200": "#ECEDEE",
        "surface-300": "#CBCFD2",
        "surface-400": "#A7AEB4",
        "surface-500": "#8E979F",
        "surface-600": "#6B767F",
        "surface-709": "#4F575E",
        "surface-800": "#33383D",
        "surface-900": "#202327",
        "oranges-50": "#FFEDD5",
        "oranges-100": "#FED7AA",
        "oranges-200": "#F2994A",
        "oranges-300": "#F57A00",
        "oranges-400": "#F56700",
        "warning-50": "#FFFDFA",
        "warning-100": "#F9DBB5",
        "warning-200": "#F2AB53",
        "warning-300": "#EE9322",
        "warning-400": "#EAB308",
        "dark-50": "#121212",
        "dark-100": "#161616",
        "dark-200": "#1A1A1A",
        "dark-300": "#1C1C1C",
        "dark-400": "#1E1E1E",
      },
      fontFamily: {
        glancyr: ["var(--font-glancyr)"],
      },
    },
  },
  plugins: [],
};
export default config;
