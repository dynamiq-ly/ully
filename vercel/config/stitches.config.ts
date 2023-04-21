import { createStitches } from '@stitches/react'
export const { getCssText, globalCss, styled, css } = createStitches({
  theme: {
    colors: {
      primary_0: '#fffffe',
      primary_50: '#f9fafb',
      primary_100: '#f3f4f6',
      primary_200: '#e5e7eb',
      primary_300: '#d1d5db',
      primary_400: '#9ca3af',
      primary_500: '#6b7280',
      primary_600: '#4b5563',
      primary_700: '#374151',
      primary_800: '#1f2937',
      primary_900: '#111827',
      primary_950: '#030712',
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
  },
})
