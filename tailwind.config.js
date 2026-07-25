/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lyon: {
          dark: '#0a0d14',
          card: '#111726',
          border: '#1e293b',
          cyan: '#00f2fe',
          purple: '#9d4edd',
          magenta: '#e0aaff',
          silver: '#94a3b8',
        }
      },
      backgroundImage: {
        'lyon-gradient': 'linear-gradient(135deg, #00f2fe 0%, #9d4edd 100%)',
        'lyon-card-glow': 'radial-gradient(circle at top, rgba(0, 242, 254, 0.12) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
