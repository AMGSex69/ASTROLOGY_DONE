/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Добавляем app директорию для сканирования
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
      "*.{js,ts,jsx,tsx,mdx}"
],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        oldlace: "#f6f1df",
        black: "#000",
        dimgray: {
          100: "#537160",
          200: "#57635c",
          300: "#5d5b5b",
        },
        gray: "#717d6b",
        beige: {
          100: "#d5dabd",
          200: "#d1d5be",
        },
        tan: "#bdc2a3",
        darksalmon: "rgba(198, 137, 97, 0.42)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "31xl": "50px",
        "12xs-3": "0.3px",
        "5xs-5": "7.5px",
        xl: "20px",
        "6xl": "25px",
        "3xl": "22px",
        "3xl-6": "22.6px",
        lg: "18px",
      },
      spacing: {},
      fontFamily: {
        "ibm-plex-sans": ["var(--font-ibm-plex-sans)"],
        "playfair-display": ["var(--font-playfair-display)"],
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "3xs-2": "9.2px",
      "base-8": "15.8px",
      mini: "15px",
      "23xl": "42px",
      "15xl": "34px",
      "6xl": "25px",
      sm: "14px",
      mid: "17px",
      "3xs-5": "9.5px",
      inherit: "inherit",
    },
    screens: {
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq650: {
        raw: "screen and (max-width: 650px)",
      },
      mq565: {
        raw: "screen and (max-width: 565px)",
      },
      mq525: {
        raw: "screen and (max-width: 525px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require("tailwindcss-animate")],
}
