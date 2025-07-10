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
    
    claret: '#85123B',
    black: '#010101',
    sealBrown: '#4B260F',
    wine: '#783544',
    burntOrange: '#BC5C21',
    dun: '#E3C9AE',
    brownSugar: '#B97354',
    lion: '#CD9B62',
    chocolateCosmos1: '#4D0D1E',
    chocolateCosmos2: '#3E0D19',
    blackDeep1: '#000400',
    blackDeep2: '#000200',
    roseEbony: '#604039',

   
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
  },
  backgroundImage: {
    // Fondos degradados nuevos con colores del cliente
    'gradient-claret-wine': 'linear-gradient(135deg, #85123B 0%, #783544 100%)',
    'gradient-sugar-lion': 'linear-gradient(135deg, #B97354 0%, #CD9B62 100%)',
    'gradient-dun-orange': 'linear-gradient(135deg, #E3C9AE 0%, #BC5C21 100%)',
    'gradient-cosmos-ebony': 'linear-gradient(135deg, #4D0D1E 0%, #604039 100%)',
    'gradient-dark-deep': 'linear-gradient(135deg, #000400 0%, #000200 100%)',
  },
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    serif: ['Playfair Display', 'Georgia', 'serif'],
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
