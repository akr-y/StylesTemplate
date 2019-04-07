import processColor from './processColor';
import type { Color } from './processColor';

export const colors = {
  BlueGray: '#F3F4F4',
  Dark: '#333',
  Primary: '#07f',
  Danger: '#f07',
  Success: '#0d7',
  White: '#fff',
};

const typeSizes = [48, 36, 24, 20, 14, 12, 11];

export const spacing = 16;

const fontFamilies = {
  display: 'Noto Sans CJK JP',
  body: 'Noto Sans CJK JP',
};

const fontWeights = {
  regular: 'regular',
  bold: 'bold',
};

export const fonts = {
  'Header-1': {
    color: colors.Dark,
    fontSize: typeSizes[0],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 48,
  },
  'Header-2': {
    color: colors.Dark,
    fontSize: typeSizes[1],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 36,
  },
  'Header-3': {
    color: colors.Dark,
    fontSize: typeSizes[2],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.bold,
    lineHeight: 24,
  },
  'Body': {
    color: colors.Dark,
    fontSize: typeSizes[4],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
    marginBottom: 24,
  },
  'Alert': {
    color: colors.Danger,
    fontSize: typeSizes[5],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.bold,
    lineHeight: 24,
    marginBottom: 24,
  },
  'Table Header': {
    color: colors.Dark,
    fontSize: typeSizes[4],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.bold,
    lineHeight: 24,
  },
  'Table Body': {
    color: colors.Dark,
    fontSize: typeSizes[4],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
  },
  'Notes': {
    color: colors.Dark,
    fontSize: typeSizes[5],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
  },
  'Navigation-Default': {
    color: colors.Dark,
    fontSize: typeSizes[4],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
  },
  'Link': {
    color: colors.Primary,
    fontSize: typeSizes[4],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
  },
  'Button': {
    color: colors.White,
    fontSize: typeSizes[4],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.bold,
    lineHeight: 24,
  },
  'Label': {
    color: colors.Dark,
    fontSize: typeSizes[5],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.bold,
    lineHeight: 24,
  },
};

export default {
  colors: Object.keys(colors).reduce(
    (acc, name) => ({
      ...acc,
      [name]: processColor(colors[name]),
    }),
    {},
  ),
  fonts,
  spacing,
};

export type DesignSystem = {
  fonts: any,
  colors: { [key: string]: Color },
};
