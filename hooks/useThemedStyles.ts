import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { COLORS, TYPOGRAPHY } from '@/constants/Theme';

const baseTextStyle = {
    fontFamily: TYPOGRAPHY.fonts.primary,
    // borderWidth: 1,           
    // borderColor: 'red',
    includeFontPadding: false
};

export function useThemedStyles() {
  const { theme } = useTheme();
  const colors = COLORS[theme];
  
  return useMemo(() => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundPrimary
    },
    topSection: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    billDisplay: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    subHeader: {
        ...baseTextStyle,
        fontSize: TYPOGRAPHY.size.small,
        color: colors.textSecondary
    },
    dollarSign: {
        ...baseTextStyle,
        fontSize: TYPOGRAPHY.size.medium,
        color: colors.textSecondary
    },
    billText: {
        ...baseTextStyle,
        fontSize: TYPOGRAPHY.size.large,
        color: colors.textPrimary
    },
    percentageContainer: {
        flexDirection: 'row',
        marginTop: 28,
        gap: 10
    },
    percentButton: {
        paddingHorizontal: 32,
        paddingVertical: 8,
        borderRadius: 8,
        backgroundColor: colors.backgroundSecondary
    },
    percentText: {
        ...baseTextStyle,
        fontSize: TYPOGRAPHY.size.regular,
        color: colors.textSecondary
    },
    selectedButton: {
        backgroundColor: colors.textPrimary
    },
    selectedPercentText: {
        color: colors.backgroundPrimary
    },
    
    midSection: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    calculationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    tipDollarSign: {
        ...baseTextStyle,
        fontSize: TYPOGRAPHY.size.medium,
        color: colors.textSecondary, 
    },
    tipAmount: {
        ...baseTextStyle,
        fontSize: TYPOGRAPHY.size.large,
        color: colors.textPrimary,
    },

    bottomSection: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
    }, 

    numberPad: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
    },

    numberButton: {
        width: '30%',
        aspectRatio: 1,
        alignItems: 'center',  // Centers content horizontally     
        justifyContent: 'center',  // Centers content vertically 
        backgroundColor: colors.backgroundSecondary,
        borderRadius: 8,
    },

    numberText: {
        ...baseTextStyle,
        fontSize: TYPOGRAPHY.size.regular,
        color: colors.textSecondary,
        textAlign: 'center'
    }

  }), [theme]);
}