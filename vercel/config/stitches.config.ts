import { createStitches } from '@stitches/react'
export const { getCssText, globalCss, styled, css } = createStitches({
  theme: {
    colors: {
      primary_0: '#fffffe',
      primary_50: '#f6f6f7',
      primary_100: '#e2e3e5',
      primary_200: '#c4c6cb',
      primary_300: '#9fa1a9',
      primary_400: '#7b7c86',
      primary_500: '#60626c',
      primary_600: '#4c4d55',
      primary_700: '#3f3f46',
      primary_800: '#35353a',
      primary_900: '#2e2f33',
      primary_950: '#18181b',
    },
    fontSizes: {
      1: '10px',
      2: '12px',
      3: '14px',
      4: '16px',
      5: '18px',
      6: '20px',
      7: '22px',
      8: '24px',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
    },
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
    bp4: '(min-width: 1280px)',
  },
})

/* global styling */
export const globals = globalCss({
  body: {
    margin: 0,
    padding: 0,
  },
  '*': {
    boxSizing: 'border-box',
  },
})
