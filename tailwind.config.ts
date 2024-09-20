import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		keyframes: {
			floatInCircle1: {
			  '0%': { transform: 'translate(0, -50px)' },
			  '25%': { transform: 'translate(50px, 0)' },
			  '50%': { transform: 'translate(0, 50px)' },
			  '75%': { transform: 'translate(-50px, 0)' },
			  '100%': { transform: 'translate(0, -50px)' },
			},
			floatInCircle2: {
			  '0%': { transform: 'translate(0, -40px)' },
			  '25%': { transform: 'translate(40px, 0)' },
			  '50%': { transform: 'translate(0, 40px)' },
			  '75%': { transform: 'translate(-40px, 0)' },
			  '100%': { transform: 'translate(0, -40px)' },
			},
			floatInCircle3: {
			  '0%': { transform: 'translate(0, -30px)' },
			  '25%': { transform: 'translate(30px, 0)' },
			  '50%': { transform: 'translate(0, 30px)' },
			  '75%': { transform: 'translate(-30px, 0)' },
			  '100%': { transform: 'translate(0, -30px)' },
			},
		  },
		  animation: {
			floatInCircle1: 'floatInCircle1 5s linear infinite',
			floatInCircle2: 'floatInCircle2 6s linear infinite',
			floatInCircle3: 'floatInCircle3 7s linear infinite',
		  },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
        red: {
          DEFAULT: '#BC4A4A', // Use the hex color code
        },
        blue: {
          DEFAULT: '#1E699E', // Use the hex color code
        },
        gray: {
          DEFAULT: '#D9D9D9', // Use the hex color code
        },
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
