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
    f100: 'rgba(56, 56, 56, 0.01)',
    f200: 'rgba(56, 56, 56, 0.03)',
    f300: 'rgba(22, 22, 22, 0.06)',
    f400: 'rgba(17, 17, 28, 0.08)',
    f500: 'rgba(5, 5, 5, 0.1)',
    f600: 'rgba(5, 5, 20, 0.14)',
    f700: 'rgba(15, 11, 18, 0.17)',
    f800: 'rgba(7, 3, 17, 0.33)',
    f900: 'rgba(6, 0, 11, 0.48)',
    f925: 'rgba(4, 0, 11, 0.68)',
    f950: 'rgba(5, 3, 11, 0.83)',
    f975: 'rgba(3, 2, 6, 0.89)',
    f999: 'rgba(3, 2, 4, 0.97)',
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
