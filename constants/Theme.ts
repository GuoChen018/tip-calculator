import { Dimensions } from 'react-native';
const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const COLORS = {
    light: {
        textPrimary: '#555555',
        textSecondary: '#696969',
        backgroundPrimary: '#FFFFFF',
        backgroundSecondary: '#EEEEEE',
    },
    dark: {
        textPrimary: '#E8E8E8',
        textSecondary: '#B0B0B0',
        backgroundPrimary: '#252525',
        backgroundSecondary: '#1A1A1A',
    }
};
  
export const TYPOGRAPHY = {
    fonts: {
        primary: 'CherryBomb',
    },
    size: {
        large: SCREEN_WIDTH * 0.2,
        medium: SCREEN_WIDTH * 0.08,
        regular: SCREEN_WIDTH * 0.05,
        small: SCREEN_WIDTH * 0.035,
    }
};