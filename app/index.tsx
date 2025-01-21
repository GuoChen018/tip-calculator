import { Text, View, StyleSheet, Pressable} from "react-native";
import {useState, useEffect} from 'react';
import { useTheme } from "@/context/ThemeContext";
import { useThemedStyles } from '@/hooks/useThemedStyles';
import { Animated} from 'react-native';
import { DeleteIcon } from "@/components/DeleteIcon";
import { COLORS } from "@/constants/Theme"; 
import { SunIcon } from "@/components/SunIcon";
import { MoonIcon } from "@/components/MoonIcon";
import * as Haptics from 'expo-haptics';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {

  const { theme, toggleTheme } = useTheme();
  const styles = useThemedStyles();
  const colors = COLORS[theme]; 

  const [billAmount, setBillAmount] = useState("0");
  const [selectedTip, setSelectedTip] = useState(15); //15% as default

  const tipPercentages = [15, 18, 20];

  const [tipAmount, setTipAmount] = useState(0);

  const numberPadButtons = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '.', '0', '⌫'
  ];

  const MAX_DIGITS = 7;
  const MAX_DECIMALS = 2;

  useEffect(() => {
    const bill = parseFloat(billAmount) || 0;
    const tip = (bill * selectedTip) / 100;
    setTipAmount(tip);
    
  }, [billAmount, selectedTip]);

  const handleNumberPress = (value: string) => {
    Haptics.selectionAsync();
    
    // Handle backspace
    if (value === '⌫') {
      setBillAmount(prev => prev.slice(0, -1) || '0');
      return;
    }
  
    // Handle decimal point
    if (value === '.') {
      if (billAmount.includes('.')) return;
      setBillAmount(prev => prev + '.');
      return;
    }
  
    // Handle numbers
    setBillAmount(prev => {
      // Replace initial zero
      if (prev === '0' && value !== '.') {
        return value;
      }
  
      const newValue = prev + value;
      const [whole, decimal] = newValue.split('.');
  
      // Check total length without decimal point
      if (whole.length > MAX_DIGITS) return prev;
  
      // Check decimal places
      if (decimal && decimal.length > MAX_DECIMALS) return prev;
  
      return newValue;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
      <View style={styles.header}>
          <View style={styles.logoSpace} />
          <Pressable onPress={toggleTheme} style={styles.themeToggle}>
            {theme === 'light' ? (
              <MoonIcon color={colors.textSecondary} size={24} />
            ) : (
              <SunIcon color={colors.textSecondary} size={24} />
            )}
          </Pressable>
        </View>

        <Text style={styles.subHeader}>Bill Total</Text>

        <View style={styles.billDisplay}>
          <Text style={styles.dollarSign}>$</Text>
          <Text style={styles.billText}>{billAmount}</Text>
        </View>

        <View style={styles.percentageContainer}>

          {/* Turn each percentage number into a button */}
          {tipPercentages.map((percentage) => (
            <Pressable
            key={percentage} // React needs this to keep track of each button
            onPress={() => setSelectedTip(percentage)}
            style={[
              styles.percentButton, 
              selectedTip === percentage && styles.selectedButton
            ]}
          >
            <Text style={[
              styles.percentText, 
              selectedTip === percentage && styles.selectedPercentText
            ]}>
              {percentage}%
            </Text>
          </Pressable>
          ))}
          
        </View>
      </View>
      <View style={styles.midSection}>
        <Text style={styles.subHeader}>Tip Amount</Text>
        <View style={styles.calculationRow}>
          <Text style={[styles.tipDollarSign, { opacity: billAmount === '0' ? 0.1 : 1 }]}>$</Text>
          <Text style={[styles.tipAmount, { opacity: billAmount === '0' ? 0.1 : 1 }]}>
            {tipAmount.toFixed(2)}
          </Text>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.numberPad}>
          {numberPadButtons.map((button) => (
            <Pressable
            key={button}
            style={styles.numberButton}
            onPress={() => handleNumberPress(button)}
          >
            {button === '⌫' ? (
              <DeleteIcon color={colors.textSecondary} size={24} />
            ) : (
              <Text style={styles.numberText}>{button}</Text>  // Ensure this is wrapped in <Text>
            )}
          </Pressable>
          ))}
        </View>
      </View>
    </View>

  );
}
