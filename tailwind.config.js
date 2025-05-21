/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'Primary-900': 'var(--Primary-900)',
        'Primary-800': 'var(--Primary-800)',
        'Primary-700': 'var(--Primary-700)',
        'Primary-500': 'var(--Primary-500)',
        'Primary-400': 'var(--Primary-400)',
        'Primary-300': 'var(--Primary-300)',
        'Primary-200': 'var(--Primary-200)',
        'Primary-100': 'var(--Primary-100)',
        'Purple-900': 'var(--Purple-900)',
        'Purple-800': 'var(--Purple-800)',
        'Purple-700': 'var(--Purple-700)',
        'Purple-600': 'var(--Purple-600)',
        'Purple-500': 'var(--Purple-500)',
        'Purple-400': 'var(--Purple-400)',
        'Purple-300': 'var(--Purple-300)',
        'Purple-200': 'var(--Purple-200)',
        'Purple-100': 'var(--Purple-100)',
        'Gray-900': 'var(--Gray-900)',
        'Gray-800': 'var(--Gray-800)',
        'Gray-700': 'var(--Gray-700)',
        'Gray-600': 'var(--Gray-600)',
        'Gray-500': 'var(--Gray-500)',
        'Gray-400': 'var(--Gray-400)',
        'Gray-300': 'var(--Gray-300)',
        'Gray-200': 'var(--Gray-200)',
        'Gray-100': 'var(--Gray-100)',
        Gray: 'var(--Gray)',
        GrayLight: 'var(--GrayLight)',
        GrayDarkLight: 'var(--GrayDarkLight)',
        'Red-900': 'var(--Red-900)',
        'Red-800': 'var(--Red-800)',
        'Red-700': 'var(--Red-700)',
        'Red-600': 'var(--Red-600)',
        'Red-500': 'var(--Red-500)',
        'Red-400': 'var(--Red-400)',
        'Red-300': 'var(--Red-300)',
        'Red-200': 'var(--Red-200)',
        'Red-100': 'var(--Red-100)',
        'Yellow-900': 'var(--Yellow-900)',
        'Yellow-800': 'var(--Yellow-800)',
        'Yellow-700': 'var(--Yellow-700)',
        'Yellow-600': 'var(--Yellow-600)',
        'Yellow-500': 'var(--Yellow-500)',
        'Yellow-400': 'var(--Yellow-400)',
        'Yellow-300': 'var(--Yellow-300)',
        'Yellow-200': 'var(--Yellow-200)',
        'Yellow-100': 'var(--Yellow-100)',
        'Yellow-Dark': 'var(--Yellow-Dark)',
        'Green-900': 'var(--Green-900)',
        'Green-800': 'var(--Green-800)',
        'Green-700': 'var(--Green-700)',
        'Green-600': 'var(--Green-600)',
        'Green-500': 'var(--Green-500)',
        'Green-400': 'var(--Green-400)',
        'Green-300': 'var(--Green-300)',
        'Green-200': 'var(--Green-200)',
        'Green-100': 'var(--Green-100)',
        'Green-Light': 'var(--Green-Light)',
        Sapphire: 'var(--Sapphire)',
        Ocean: 'var(--Ocean)',
        OceanLight: 'var(--OceanLight)',
        ScrollBar: 'var(--ScrollBar)',
        BlackLight: 'var(--BlackLight)',
        BlackDark: 'var(--BlackDark)',
        EyeIconColor: 'var(--EyeIconColor)',
        'Primary-900-opacity-80': 'var(--Primary-900-opacity-80)',
        'Primary-900-opacity-50': 'var(--Primary-900-opacity-50)',
        'Primary-900-opacity-40': 'var(--Primary-900-opacity-40)',
        'Primary-900-opacity-20': 'var(--Primary-900-opacity-20)',
        'Primary-900-opacity-10': 'var(--Primary-900-opacity-10)',
        'Primary-500-opacity-80': 'var(--Primary-500-opacity-80)',
        'Primary-300-opacity-30': 'var(--Primary-300-opacity-30)',
        'Primary-200-opacity-50': 'var(--Primary-200-opacity-50)',
        'Primary-100-opacity-90': 'var(--Primary-100-opacity-90)',
        'Gray-900-opacity-70': 'var(--Gray-900-opacity-70)',
        'Gray-900-opacity-60': 'var(--Gray-900-opacity-60)',
        'Gray-700-opacity-80': 'var(--Gray-700-opacity-80)',
        'Gray-700-opacity-70': 'var(--Gray-700-opacity-70)',
        'Gray-700-opacity-40': 'var(--Gray-700-opacity-40)',
        'Gray-600-opacity-80': 'var(--Gray-600-opacity-80)',
        'Gray-400-opacity-10': 'var(--Gray-400-opacity-10)',
        'Gray-300-opacity-50': 'var(--Gray-300-opacity-50)',
        'Gray-200-opacity-10': 'var(--Gray-200-opacity-10)',
        'Green-900-opacity-80': 'var(--Green-900-opacity-80)',
        'Green-900-opacity-10': 'var(--Green-900-opacity-10)',
        'Green-500-opacity-80': 'var(--Green-500-opacity-80)',
        'Green-100-opacity-90': 'var(--Green-100-opacity-90)',
        'OceanLight-opacity-25': 'var(--OceanLight-opacity-25)',
        'BlackLight-opacity-90': 'var(--BlackLight-opacity-90)',
        'BlackLight-opacity-54': 'var(--BlackLight-opacity-54)',
        'Black-opacity-05': 'var( --Black-opacity-05)',
        'Sapphire-opacity-25': 'var(--Sapphire-opacity-25)',
        'Purple-300-opacity-25': 'var(--Purple-300-opacity-25)'
      },
      screens: {
        '4xl': '1810px',
        '3xl': '1665px',
        xl: '1200px',
        sml: '700px',
        'max-xl': { max: '1535px' }, // Applies when the screen width is < 1535px
        'max-lg': { max: '1199px' }, // Applies when the screen width is < 1199px
        'max-md': { max: '1023px' }, // Applies when the screen width is < 1023px
        'max-md-mini': { max: '819px' }, // Applies when the screen width is < 819px
        'max-sm': { max: '767px' }, // Applies when the screen width is < 767px
        'max-xs': { max: '639px' }, // Applies when the screen width is < 639px
        'max-xsm': { max: '389px' } // Applies when the screen width is < 389px
      },
      animation: {
        skeleton: 'skeleton 1s linear 2s infinite'
      },
      keyframes: {
        skeleton: {
          '0%': { left: '-20%' },
          '100%': { left: '120%' }
        }
      },
      fontFamily: {
        Roboto: ['Roboto']
      },
      maxWidth: {
        '600px': '600px',
        '742px': '742px',
        '500px': '500px',
        '450px': '450px',
        '850px': '850px',
        '358px': '358px'
      },
      maxHeight: {
        '670px': '670px',
        '660px': '660px',
        '640px': '640px',
        '610px': '610px',
        '540px': '540px',
        '520px': '520px',
        '500px': '500px',
        '476px': '476px',
        '440px': '440px',
        '350px': '350px',
        '330px': '330px',
        '240px': '240px'
      },
      minWidth: {
        '228px': '228px',
        '276px': '276px',
        '332px': '332px',
        '620px': '620px',
        '550px': '550px'
      },
      padding: {
        '9px': '9px',
        '30px': '30px',
        '58px': '58px',
        '18px' :'18px'
      },
      borderWidth: {
        '3px': '3px'
      },
      gap: {
        '25px': '25px'
      },
      width: {
        '400px': '400px',
        '180px': '180px',
        '120px': '120px',
        '18px': '18px',
        '255px': '255px',
        '270px': '270px',
        '22px': '22px',
        '50px': '50px',
        '30px': '30px'
      },
      height: {
        '180px': '180px',
        '18px': '18px',
        '600px': '600px',
        '22px': '22px',
        '42px': '42px',
        '30px': '30px'
      },
      minHeight: {
        '50px': '50px'
      },
      fontSize: {
        '17px': '17px',
        '15px': '15px',
        '13px': '13px',
        '11px': '11px',
        '10px': '10px'
      },
      lineHeight: {
        '21px': '21.09px',
        '14px': '14.06px',
        '60px': '60px',
        '93px': '93px',
        '37px': '37px'
      },
      letterSpacing: {
        '3px': '3px'
      },
      zIndex: {
        60: '60'
      },
      boxShadow: {
        BlueShadow: '0px 5px 20px 0px #0066BD40',
        HeaderShadow: '0px 5px 20px 5px #b9bcbf40',
        profile_dropdown: '0px 0px 10px 1px #d9d9d9',
        dropdown_shadow: '0px 4px 54px 0px #0000001C',
        content: '0px 2px 20px 0px #0000000D',
        filterbox: '0px 4px 20px 0px #1111111A',
        Chatday: '0px 1px 8px 0px #00000012',
        message: '5px 4px 20px 0px #00000021',
        schedulerdatepicker: '0px 6px 30px 0px #00000026',
        rulershadow: '4px 4px 25px 0px #0000000D'
      },
      borderRadius: {
        '10px': '10px'
      }
    }
  },
  plugins: []
};
