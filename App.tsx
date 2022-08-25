import React, { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { ThemeProvider } from 'styled-components'
import theme from './src/global/styles/theme'
import { Routes } from './src/routes'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import {
  useFonts,
  Lato_400Regular,
  Lato_900Black,
  Lato_700Bold
} from '@expo-google-fonts/lato'

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_900Black,
    Lato_700Bold
  })
  useEffect(() => {
    const showSplashScreen = async () => {
      await SplashScreen.preventAutoHideAsync()
    }

    showSplashScreen()
  }, [])

  useEffect(() => {
    const hideSplashScreen = async () => {
      await SplashScreen.hideAsync()
    }

    if (fontsLoaded) hideSplashScreen()
  }, [fontsLoaded])

  if (!fontsLoaded) return null

  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <Toast />
    </ThemeProvider>
  )
}
