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
    accent_050: '#f9fafb',
    accent_100: '#f3f4f6',
    accent_200: '#e5e7eb',
    accent_300: '#d1d5db',
    accent_400: '#9ca3af',
    accent_500: '#6b7280',
    accent_600: '#4b5563',
    accent_700: '#374151',
    accent_800: '#1f2937',
    accent_900: '#111827',
    accent_950: '#030712',
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
