import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;

export const scale = (size:number) => (width / guidelineBaseWidth) * size;

export const moderateScale = (size:number, factor = 0.25) =>
  size + (scale(size) - size) * factor;
