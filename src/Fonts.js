const getFontByCode = (code) => {
    return Fonts.find(font => font.fontCode === code);
}

class Font {
    fontCode;
    fontName;
    getFontHeight;
}

const createFont = (fontCode, fontName, getFontHeight) => {
    const font = new Font();
    font.fontCode = fontCode;
    font.fontName = fontName;
    font.getFontHeight = getFontHeight;
    return font;
}

const fontHeightCalculator = {
    proportionOneToOne: (width) => (width * 1)
}

const Fonts =  [
    createFont('ARIAL', 'Arial', fontHeightCalculator.proportionOneToOne)
];



export default {
    Fonts: Fonts,
    getFontByCode: getFontByCode
};