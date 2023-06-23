import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const theme = {
  COLORS: {
    PRIMARY: '#493d8a',
    PRIMARY_TEXT: '#051d5f',
    GREY: '#cccccc',
    LIGTH_DARK: '#0f0d1c',
    DARK: '#040408',
    FACEBOOK: '#395693',
    FACEBOOK_BG: '#d8dce7',
    GOOGLE: '#cf2c1f',
    WARNING: '#db9a02',
    ERROR: '#db0602',
    SUCCESS: '#1d8c01',

    white: '#fff',
    black: '#000000',
    blue: '#4096FE',
    gray: '#464646',
    lightGray: '#dedede',
    transparentBlack: 'rgba(0, 0, 0, 0.2)',
    transparentBlack1: 'rgba(0, 0, 0, 0.5)',
  },
  SIZES: {
    WIDTH: width,
    HEIGHT: height,
    PADDING: 24,
    RADIUS: 12,
    FONT: 14,
    LARGE_TITLE: 40,
    H1: 30,
    H2: 22,
    H3: 18,
    H4: 16,

    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,
  },
};

export default theme;
