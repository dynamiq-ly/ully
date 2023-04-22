import 'styled-components'
import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  interface DefaultTheme {
    palette: {
      accent_000: string
      accent_050: string
      accent_100: string
      accent_200: string
      accent_300: string
      accent_400: string
      accent_500: string
      accent_600: string
      accent_700: string
      accent_800: string
      accent_900: string
      accent_950: string
    }

    secondary: {
      accent_050: string
      accent_100: string
      accent_200: string
      accent_300: string
      accent_400: string
      accent_500: string
      accent_600: string
      accent_700: string
      accent_800: string
      accent_900: string
    }
  }
}

export const theme: DefaultTheme = {
  palette: {
    accent_000: '#fffffe',
    accent_050: '#f6f6f7',
    accent_100: '#e2e4e5',
    accent_200: '#c5c8ca',
    accent_300: '#a0a5a8',
    accent_400: '#7b8286',
    accent_500: '#61676b',
    accent_600: '#4c5155',
    accent_700: '#3f4346',
    accent_800: '#35373a',
    accent_900: '#2d2d2d',
    accent_950: '#121314',
  },

  secondary: {
    accent_050: '#f34335',
    accent_100: '#f34335',
    accent_200: '#f34335',
    accent_300: '#f34335',
    accent_400: '#f34335',
    accent_500: '#f34335',
    accent_600: '#f34335',
    accent_700: '#f34335',
    accent_800: '#f34335',
    accent_900: '#f34335',
  },
}
