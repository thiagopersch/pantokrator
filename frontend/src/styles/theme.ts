export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  shadow: {
    elevateCardShadow: '0rem 0rem 0.2rem #D0D0D0',
    default: '0rem 0.3rem 0.8rem rgba(0, 0, 0, 0.25)',
    elevateShadowDefault: '0rem 0.5rem 1rem rgba(0, 0, 0, 0.35)'
  },
  border: {
    radius: '3rem',
    radiusRounded: '10rem'
  },
  font: {
    poppins:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    inter:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    titanOne:
      "Titan One, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",

    light: 300,
    normal: 400,
    medium: 500,
    bold: 600,
    sizes: {
      xsmall: '1.0rem',
      small: '1.2rem',
      medium: '1.4rem',
      large: '1.6rem',
      xlarge: '1.8rem',
      xxlarge: '2.0rem',
      xlargeMedium: '2.4rem',
      xxlargeMedium: '3.0rem',
      huge: '3.5rem',
      xhuge: '4.0rem'
    },
    style: {
      normal: 'normal',
      italic: 'italic',
      oblique: 'oblique'
    }
  },
  colors: {
    primary: '#2A3A77',
    secondary: '#0DBF87',
    mainBg: '#F8FAFA',
    white: '#ffffff',
    whiteGray: '#F0F0F0',
    black: '#13110C',
    lightGray: '#BFC1C2',
    gray: '#717273',
    yellow: '#F4DA85',
    red: '#EE4C4C',
    silver: '#556365',
    weakGray: '#DADEEC',
    lightSilver: '#97AEB1'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
} as const;
