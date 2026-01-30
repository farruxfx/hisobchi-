import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f7ff",
          100: "#e5eaff",
          500: "#4f46e5",
          700: "#3730a3"
        }
      }
    }
  },
  plugins: []
};

export default config;
