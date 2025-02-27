import {Dimensions} from 'react-native';

export enum FONTS {
  regular = 'System',
}

const {height, width} = Dimensions.get('window');

export const COLORS = {
  PRIMARY: '#000',
};

export const FONT_SIZE = {
  SM: 12,
  MD: 16,
  LG: 20,
};

export const SCREEN_PADDING = 20;

export const SCREEN = {
  HEIGHT: height,
  WIDTH: width,
};
