const Color = require('color');

export const makeAccentColor = (hexColor: string):string => {
   return new Color(hexColor).darken(0.8).saturate(10).hex();
};