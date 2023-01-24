import { Colors } from './types'

export const baseColors = {
  failure: '#ED4B9E',
  primary: '#A5C437',
  primaryBright: '#53DEE9',
  primaryDark: '#0098A1',
  secondary: '#88D949',
  success: '#31D0AA',
  warning: '#FFB237',
  info: '#17a2b8',
}

export const additionalColors = {
  binance: '#F0B90B',
  overlay: '#ae91a5',
  gold: '#FFC700',
  silver: '#B2B2B2',
  bronze: '#E7974D',
}

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: '#FFFDD0',
  backgroundDisabled: '#E9EAEB',
  backgroundAlt: '#fffeeb',
  cardBorder: 'rgba(165, 195, 55, .7)',
  tabBack: 'rgba(200, 200, 200, .4)',
  contrast: '#191326',
  dropdown: '#F6F6F6',
  dropdownDeep: '#EEEEEE',
  invertedContrast: '#FFFFFF',
  input: '#eeeaf4',
  inputSecondary: '#A5C437',
  tertiary: '#EFF4F5',
  text: '#333915',
  textDisabled: '#BDC2C4',
  textSubtle: '#A5C437',
  disabled: '#E9EAEB',
  gradients: {
    bubblegum: 'linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)',
    inverseBubblegum: 'linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)',
    cardHeader: 'linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)',
    blue: 'linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)',
    violet: 'linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)',
    violetAlt: 'linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)',
    gold: 'linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)',
  },
  btnPrimaryBk: 'rgba(165, 196, 55, .77)',
  btnPrimaryTxt: '#000000',
  btnSecondaryBk: '#A5C437',
  btnSecondaryTxt: '#000000',
  icontext: '#88D949',
}

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: '#A5C437',
  background: '#212416',
  backgroundDisabled: '#3c3742',
  backgroundAlt: '#464f26',
  cardBorder: 'rgba(165, 195, 55, .7)',
  tabBack: 'rgba(0, 0, 0, .4)',
  contrast: '#FFFFFF',
  dropdown: '#1E1D20',
  dropdownDeep: '#100C18',
  invertedContrast: '#191326',
  input: '#3B3F2B',
  inputSecondary: '#A5C437',
  primaryDark: '#0098A1',
  tertiary: '#EFF4DA',
  text: '#FFFFFF',
  textDisabled: '#a3a59b',
  textSubtle: '#A5C437',
  disabled: '#686868',
  gradients: {
    bubblegum: 'linear-gradient(139.73deg, #6b903b 30%, #8840de 100%)',
    inverseBubblegum: 'linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)',
    cardHeader: 'linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)',
    blue: 'linear-gradient(180deg, #00707F 0%, #19778C 100%)',
    violet: 'linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)',
    violetAlt: 'linear-gradient(180deg, #434575 0%, #66578D 100%)',
    gold: 'linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)',
  },
  btnPrimaryBk: 'rgba(165, 196, 55, .77)',
  btnPrimaryTxt: '#FFFFFF',
  btnSecondaryBk: '#A5C437',
  btnSecondaryTxt: '#FFFFFF',
  icontext: '#FFFFFF',
}
