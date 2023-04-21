import { createStitches } from '@stitches/react'
export const { getCssText, globalCss, styled, css } = createStitches({
  theme: {
    colors: {
      primary_0: '#fffffe',
      primary_050: '#f8fafc',
      primary_100: '#f1f5f9',
      primary_200: '#e2e8f0',
      primary_300: '#cbd5e1',
      primary_400: '#94a3b8',
      primary_500: '#64748b',
      primary_600: '#475569',
      primary_700: '#334155',
      primary_800: '#1e293b',
      primary_900: '#0f172a',
      primary_950: '#020617',
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
    fonts: {
      inter: 'Inter, sans-serif',
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
    fontSize: '$3',
    fontWeight: 400,
    fontFamily: '$inter',
    boxSizing: 'border-box',
    backgroundColor: '$primary_050',
  },
})
