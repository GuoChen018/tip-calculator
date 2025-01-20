import { Stack } from "expo-router";
import { ThemeProvider } from "@/context/ThemeContext";
import { StatusBar } from 'expo-status-bar';
import { useTheme } from "@/context/ThemeContext";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
  const { theme } = useTheme();
  return (
    <>
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'CherryBomb': require('../assets/fonts/Cherry-Bomb-One.ttf'),
    'Inter': require('../assets/fonts/Inter.ttf')
  });

  useEffect(() => {
    if (error) console.log('Font loading error:', error);
    if (loaded) console.log('Font loaded successfully');
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider>
      <RootLayoutNav />
    </ThemeProvider>
  );
}
