/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#0d1117',
          card: '#161b22',
          elevated: '#1c2128',
          hover: '#21262d',
          border: '#30363d',
          'border-muted': '#21262d',
        },
        accent: {
          DEFAULT: '#238636',
          hover: '#2ea043',
          muted: '#238636/20',
        },
        brand: {
          DEFAULT: '#58a6ff',
          hover: '#79b8ff',
          muted: '#388bfd',
        },
        purple: {
          DEFAULT: '#a371f7',
          muted: '#8957e5',
        },
        ink: {
          DEFAULT: '#e6edf3',
          secondary: '#c9d1d9',
          muted: '#8b949e',
          faint: '#484f58',
        },
        light: {
          bg: '#ffffff',
          card: '#ffffff',
          elevated: '#f6f8fa',
          hover: '#f3f4f6',
          border: '#d0d7de',
          'border-muted': '#e5e7eb',
          ink: '#1f2328',
          secondary: '#424a53',
          muted: '#656d76',
        },
        success: {
          DEFAULT: '#3fb950',
          muted: '#238636',
        },
        warning: {
          DEFAULT: '#d29922',
          muted: '#9e6a03',
        },
        danger: {
          DEFAULT: '#f85149',
          muted: '#da3633',
        },
      },
      boxShadow: {
        'card': '0 0 0 1px rgba(48,54,61,0.5), 0 4px 6px -1px rgba(0,0,0,0.3)',
        'card-hover': '0 0 0 1px rgba(88,166,255,0.3), 0 8px 16px -4px rgba(0,0,0,0.4)',
        'card-light': '0 0 0 1px rgba(208,215,222,0.8), 0 1px 3px rgba(27,31,36,0.04)',
        'card-light-hover': '0 0 0 1px rgba(208,215,222,1), 0 4px 8px rgba(27,31,36,0.08)',
        'glow': '0 0 20px rgba(88,166,255,0.15)',
        'glow-accent': '0 0 20px rgba(35,134,54,0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounceSubtle 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(88,166,255,0.1), transparent)',
        'hero-pattern-light': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59,130,246,0.08), transparent)',
      },
    },
  },
  plugins: [],
}
