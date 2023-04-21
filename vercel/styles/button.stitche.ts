import { styled } from '@/config/stitches.config'

export const ButtonStyled = styled('button', {
  width: '100%',
  all: 'unset',
  display: 'flex',
  cursor: 'pointer',
  minWidth: '300px',
  alignItems: 'center',
  justifyContent: 'center',

  height: '42px',
  maxHeight: '42px',

  fontSize: '$3',
  fontWeight: '500',
  letterSpacing: '0.5px',

  color: '$primary_100',
  backgroundColor: '$primary_950',
  transition: '300ms ease-in-out',
  borderRadius: 'calc(1rem - 8px)',

  textTransform: 'capitalize',

  '&:hover': {
    backgroundColor: '$primary_900',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    color: '$primary_200',
    backgroundColor: '$primary_600',
  },
})
