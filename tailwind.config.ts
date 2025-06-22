import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta inspirada en cultura Totonaca y colores naturales
        totonaca: {
          tierra: {
            50: '#fdf8f3',
            100: '#faf0e6',
            200: '#f0d7c2',
            300: '#e6bd9b',
            400: '#d49967',
            500: '#c17a40',
            600: '#a65d2f',
            700: '#8b4a25',
            800: '#703b1f',
            900: '#5a2e18'
          },
          jade: {
            50: '#f0f9f7',
            100: '#ddf2ec',
            200: '#b8e4d4',
            300: '#87d0b5',
            400: '#56b893',
            500: '#359a73',
            600: '#287c5d',
            700: '#22654c',
            800: '#1f523f',
            900: '#1c4335'
          },
          oro: {
            50: '#fffbf0',
            100: '#fef6dc',
            200: '#fde9b8',
            300: '#fbd884',
            400: '#f8c450',
            500: '#f5aa2a',
            600: '#e08f14',
            700: '#bb7313',
            800: '#985a17',
            900: '#7d4a18'
          },
          copal: {
            50: '#fefcf5',
            100: '#fdf8ea',
            200: '#f9efd0',
            300: '#f4e1ac',
            400: '#edcd80',
            500: '#e4b45c',
            600: '#d69a41',
            700: '#b37d35',
            800: '#906532',
            900: '#75532b'
          },
          obsidiana: {
            50: '#f6f6f6',
            100: '#e7e7e7',
            200: '#d1d1d1',
            300: '#b0b0b0',
            400: '#888888',
            500: '#6d6d6d',
            600: '#5d5d5d',
            700: '#4f4f4f',
            800: '#454545',
            900: '#3d3d3d'
          }
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-tierra': 'linear-gradient(135deg, #c17a40 0%, #a65d2f 100%)',
        'gradient-jade': 'linear-gradient(135deg, #56b893 0%, #287c5d 100%)',
        'gradient-oro': 'linear-gradient(135deg, #f8c450 0%, #e08f14 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(193, 122, 64, 0.9) 0%, rgba(86, 184, 147, 0.8) 100%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
