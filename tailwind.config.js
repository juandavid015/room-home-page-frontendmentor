/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        "mobile": '375px',
        "desktop": '1440px'
      },
      colors: {
        "primary-dark-gray": 'hsl(0, 0%, 63%)',
        "primary-black": 'hsl(0, 0%, 0%)',
        "primary-white": 'hsl(0, 0%, 100%)',
        "primary-very-dark-gray": 'hsl(0, 0%, 27%)'
      },
      fontFamily:{
        'league': ['League Spartan', 'sans-serif']
      },
      gridTemplateColumns: {
        'headerLayout': 
        `auto minmax(auto, 600px)`,
        'homePageLayout': 
        `1fr`,
        'aboutLayout': 
        `auto minmax(180px, auto) auto`,
        'tabletAboutLayout': 
        `1fr 1fr`
      },
      gridTemplateRows: {
        'homePageLayout': 
        `60vh 40vh`,
        'homePageLayoutMobile':
        `100vh 100vh`,

        'headerLayout':
        `60vh 40vh`,
        'tabletHeaderLayout':
        `1fr`,
        'mobileHeaderLayout': 
        `minmax(0, 360px) auto`,

        'aboutLayout': 
        `minmax(auto, 266px) auto minmax(auto, 266px)`,
        'tabletAboutLayout': 
        `auto 266px`,
        'mobileAboutLayout': 
        `minmax(20%, 266px) auto minmax(20%, 266px)`
        
      },
      animation: {
        'expand-right': 'expand .3s ease-in 0s 1 forwards',
        'expand-bottom': 'expandToBottom .3s ease-in 0s 1 forwards',

      },
      keyframes: {
        'expand': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'expandToBottom': {
          '0%': { height: '0px', opacity: 0 },
          '100%': { height: '100px', opacity: 1 },
        }
      },
      backgroundImage: {
        'desktop-hero-1': 'url("../public/images/desktop-image-hero-1.jpg")',
        'desktop-hero-2': 'url("../public/images/desktop-image-hero-2.jpg")',
        'desktop-hero-3': 'url("../public/images/desktop-image-hero-3.jpg")',
        'mobile-hero-1': 'url("../public/images/mobile-image-hero-1.jpg")',
        'mobile-hero-2': 'url("../public/images/mobile-image-hero-2.jpg")',
        'mobile-hero-3': 'url("../public/images/mobile-image-hero-3.jpg")'
      }
    },
    
  },
  plugins: [],
}
