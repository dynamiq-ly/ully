import { styled } from '@/config/stitches.config'

export const InputContainer = styled('div', {
  gap: '6px',
  display: 'grid',
  gridTemplateRows: 'auto auto',

  '& label': {
    fontWeight: '500',
    color: '$primary_500',
    textTransform: 'capitalize',
  },
})

export const InputField = styled('div', {
  padding: '$1',
  height: '42px',
  display: 'flex',
  maxHeight: '42px',
  alignItems: 'center',
  overflow: 'hidden',
  background: '$primary_0',
  border: '2.4px solid $primary_200',
  borderRadius: 'calc(1rem - 8px)',

  variants: {
    size: {
      small: {
        height: '38px',
        maxHeight: '38px',
      },
      large: {
        height: '48px',
        maxHeight: '48px',
      },
    },
  },

  '&:focus-within': {
    color: '$primary_950',
    border: '2.4px solid $primary_950',

    '& svg': {
      color: '$primary_950',
    },
  },
})

export const InputBoxIcon = styled('div', {
  width: '38px',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  color: '$primary_500',
  justifyContent: 'center',

  variants: {
    size: {
      small: {
        '& svg': {
          fontSize: '$5',
        },
      },
      large: {
        '& svg': {
          fontSize: '$7',
        },
      },
    },
  },

  '& svg': {
    fontSize: '$6',
  },
})

export const InputStyled = styled('input', {
  width: '100%',
  fontSize: '$3',
  height: '100%',
  border: 'none',
  outline: 'none',
  padding: '0 $2',
  fontWeight: '500',

  '&:placeholder': {
    color: '$primary_200',
  },
})
