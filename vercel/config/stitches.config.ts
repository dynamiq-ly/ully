import 'styled-components'
import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  interface DefaultTheme {
    fonts: { inter: string }
    spacing: (x: number) => string
    colors: {
      white: string
      f100: string
      f200: string
      f300: string
      f400: string
      f500: string
      f600: string
      f700: string
      f800: string
      f900: string
      f925: string
      f950: string
      f975: string
      f999: string
      black: string
    }

    accents: {
      primary: {
        p100: string
        p200: string
        p300: string
        p400: string
        p500: string
        p600: string
        p700: string
        p800: string
        p900: string
      }
    }
  }
}

export const palette: DefaultTheme = {
  fonts: {
    inter: "'Inter', sans-serif",
  },

  spacing: (x: number) => `${x * 2}px`,

  colors: {
    white: '#FFFFFF',
    f100: '#fcfcfc',
    f200: '#f5f5f5',
    f300: '#efefef',
    f400: '#e1e1e1',
    f500: '#cccccc',
    f600: '#b3b3b3',
    f700: '#9e9e9e',
    f800: '#959595',
    f900: '#565656',
    f925: '#383838',
    f950: '#1d1d1d',
    f975: '#101010',
    f999: '#040404',
    black: '#010101',
  },

  accents: {
    primary: {
      p100: '#E1F0FF',
      p200: '#CEE7FE',
      p300: '#B7D9F8',
      p400: '#96C7F2',
      p500: '#5EB0EF',
      p600: '#0091FF',
      p700: '#0081F1',
      p800: '#006ADC',
      p900: '#00254D',
    },
  },
}
