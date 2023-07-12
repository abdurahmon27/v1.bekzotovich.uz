module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Raleway',
      secondary: 'Fira Sans',
      tertiary: 'Lato',
      tortinchi: 'Cascadia Code',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: 'rbga(255, 255, 255, 0.5)',
        accent: 'rbga(255, 255, 255, 0.5)',
      },
      backgroundImage: {
        site: "url('./assets/bg5.jpg')",
        about: "url('./assets/about.png')",
        services: "url('./assets/laptop3.jpg')",
      },
    },
  },
  plugins: [],
};