
import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window');

const COLORS = {
  primary: "#30b9b2",
  primary1: "#00fff53c",
  secondary: "#ffa44f",
  secondary1: "#ffe5db",
  tertiary: "#0078a6",

  gray: "#83829A",
  gray2: "#C1C0C8",

  offwhite: "#F3F4F8",
  white: "#FFFFFF",
  black: "#000000",
  red: "#e81e4d",
  green: " #00C135",
  lightWhite: "#FAFAFC",
};


const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 40,
  height,
  width
};


const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};


export { COLORS, SIZES , SHADOWS };



// import { Dimensions } from 'react-native';
// const { height, width } = Dimensions.get('window');
// import { configureFonts, DefaultTheme } from 'react-native-paper';

// export const customTheme = {
//  ...DefaultTheme,
//  fonts: {
//   ...DefaultTheme.fonts,
//     bodyLarge: {
//       fontSize: 40,
//       lineHeight: 24,
//       fontFamily: "Roboto-Regular",
//     },
//     bodyMedium: {
//       fontSize: 32,
//       lineHeight: 20,
//       fontFamily: "Roboto-Regular",
//     },
//     bodySmall: {
//       fontSize: 12,
//       lineHeight: 16,
//       fontFamily: "Roboto-Regular",
//     },
//     headingLarge: {
//       fontSize: 40,
//       lineHeight: 48,
//       fontFamily: "Roboto-Bold",
//     },
//     headingMedium: {
//       fontSize: 24,
//       lineHeight: 28,
//       fontFamily: "Roboto-Bold",
//     },
//     headingSmall: {
//       fontSize: 18,
//       lineHeight: 24,
//       fontFamily: "Roboto-Bold",
//     },
//     headingXSmall: {
//       fontSize: 14,
//       lineHeight: 20,
//       fontFamily: "Roboto-Bold",
//     },
//     caption: {
//       fontSize: 12,
//       lineHeight: 16,
//       fontFamily: "Roboto-Regular",
//     },
//     overline: {
//       fontSize: 10,
//       lineHeight: 12,
//       fontFamily: "Roboto-Regular",
//     },
//     button: {
//       fontSize: 14,
//       lineHeight: 20,
//       fontFamily: "Roboto-Bold",
//     },
//     fontFamily: "Roboto-Regular",

//  },
//  colors: {
//   ...DefaultTheme.colors,
//     primary: "#30b9b2",
//     primary1: "#00fff53c",
//     secondary: "#ffa44f",
//     secondary1: "#ffe5db",
//     tertiary: "#0078a6",
//     gray: "#83829A",
//     gray2: "#C1C0C8",
//     offwhite: "#F3F4F8",
//     white: "#FFFFFF",
//     black: "#000000",
//     red: "#e81e4d",
//     green: " #00C135",
//     lightWhite: "#FAFAFC",
//  },
//  SIZES: {
//   ...DefaultTheme.sizes,
//     xSmall: 10,
//     small: 12,
//     medium: 16,
//     large: 20,
//     xLarge: 24,
//     xxLarge: 40,
//     height,
//     width,
//  },
//  SHADOWS: {
//   ...DefaultTheme.shadows,
//     small: {
//       shadowColor: "#000",
//       shadowOffset: {
//         width: 0,
//         height: 2,
//       },
//       shadowOpacity: 0.25,
//       shadowRadius: 3.84,
//       elevation: 2,
//     },
//     medium: {
//       shadowColor: "#000",
//       shadowOffset: {
//         width: 0,
//         height: 2,
//       },
//       shadowOpacity: 0.25,
//       shadowRadius: 5.84,
//       elevation: 5,
//     },
//  },
// };

