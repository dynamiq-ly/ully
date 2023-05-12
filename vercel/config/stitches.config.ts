import { text } from 'stream/consumers'
import 'styled-components'
import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: {
        accent_100: string
        accent_200: string
        accent_blue: string
      }

      text: {
        accent_100: string
        accent_200: string
        accent_300: string
        accent_400: string
        accent_error: string
      }

      border: {
        accent_100: string
      }
    }
  }
}

export const theme: DefaultTheme = {
  colors: {
    background: {
      accent_100: '#fffffe',
      accent_200: '#f5f5f4',
      accent_blue: '#2080F6',
    },

    text: {
      accent_100: '#121314',
      accent_200: '#2D2B32',
      accent_300: '#4F4D56',
      accent_400: '#7F7D83',
      accent_error: '#F53535',
    },

    border: {
      accent_100: '#e6e6e6',
    },
  },
}
