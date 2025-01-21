import { useMemo } from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { COLORS, TYPOGRAPHY } from '@/constants/Theme';
import { Dimensions } from 'react-native';

const baseTextStyle = {
    fontFamily: TYPOGRAPHY.fonts.primary,
    // borderWidth: 1,           
    // borderColor: 'red',
    includeFontPadding: false
};

// const { height } = Dimensions.get('window'); // Screen height
// const buttonHeight = height * 0.08; // 10% of the screen height

export function useThemedStyles() {
  const { theme } = useTheme();
  const colors = COLORS[theme];
  
  return useMemo(() => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundPrimary
    },
    topSection: {
        flex: 0.35,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginBottom: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 16,
    },
    logoSpace: {
        width: 24, // Placeholder for logo
    },
    themeToggle: {
        padding: 8,
    },
    billDisplay: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 10, 
        marginBottom: 12
    },
    subHeader: {
        ...baseTextStyle,
        fontSize: TYPOGRAPHY.size.small,
        color: colors.textSecondary, 
        marginBottom: 20
    },
    dollarSign: {
        ...baseTextStyle,
        fontSize: TYPOGRAPHY.size.medium,
        lineHeight: TYPOGRAPHY.size.medium,
        color: colors.textSecondary
    },
    billText: {
        ...baseTextStyle,
        fontSize: TYPOGRAPHY.size.large,
        lineHeight: TYPOGRAPHY.size.large,
        color: colors.textPrimary
    },
    percentageContainer: {
        flexDirection: 'row',
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
        flex: 0.25,
        alignItems: 'center',
        justifyContent: 'center',
    },

    calculationRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 10,
        marginBottom: 16
    },
    tipDollarSign: {
        ...baseTextStyle,
        fontSize: TYPOGRAPHY.size.medium,
        lineHeight: TYPOGRAPHY.size.medium,
        color: colors.textSecondary, 
    },
    tipAmount: {
        ...baseTextStyle,
        fontSize: TYPOGRAPHY.size.large,
        lineHeight: TYPOGRAPHY.size.large,
        color: colors.textPrimary,
    },

    bottomSection: {
        flex: 0.4,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 16,
       
    }, 

    numberPad: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        paddingHorizontal: 8,
    },

    numberButton: {
        width: '30%',
        height: '26%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.backgroundSecondary,
        borderRadius: 8,
        margin: 4,
    },

    numberText: {
        ...baseTextStyle,
        fontSize: TYPOGRAPHY.size.regular,
        color: colors.textSecondary,
        textAlign: 'center',
        textAlignVertical: 'center', // Android-specific vertical alignment
        padding: 0,
        margin: 0,
    }

  }), [theme]);
}