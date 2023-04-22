import styled, { css } from 'styled-components'

type StyledButtonProps = {
  variant: 'primary' | 'secondary' | 'tertiary'
}

export const StyledButton = styled.button<StyledButtonProps>`
  height: 40px;
  display: flex;
  padding: 0 16px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 6px;
  letter-spacing: 1px;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  transition: 300ms ease-in-out;

  background: ${({ theme }) => theme.primary.accent_500};
  border: 2px solid ${({ theme }) => theme.primary.accent_500};
  &:hover {
    background: ${({ theme }) => theme.primary.accent_600};
    border: 2px solid ${({ theme }) => theme.primary.accent_600};
  }
  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.primary.accent_950};
    background: ${({ theme }) => theme.primary.accent_700};
    border: 2px solid ${({ theme }) => theme.primary.accent_700};
  }

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          background: ${({ theme }) => theme.primary.accent_500};
          border: 2px solid ${({ theme }) => theme.primary.accent_500};
          &:hover {
            background: ${({ theme }) => theme.primary.accent_600};
            border: 2px solid ${({ theme }) => theme.primary.accent_600};
          }
          &:disabled {
            cursor: not-allowed;
            color: ${({ theme }) => theme.primary.accent_950};
            background: ${({ theme }) => theme.primary.accent_700};
            border: 2px solid ${({ theme }) => theme.primary.accent_700};
          }
        `
      case 'secondary':
        return css`
          color: ${({ theme }) => theme.palette.accent_050};
          background: ${({ theme }) => theme.palette.accent_900};
          border: 2px solid ${({ theme }) => theme.palette.accent_900};

          &:hover {
            background: ${({ theme }) => theme.palette.accent_800};
            border: 2px solid ${({ theme }) => theme.palette.accent_800};
          }
          &:disabled {
            cursor: not-allowed;
            color: ${({ theme }) => theme.palette.accent_200};
            background: ${({ theme }) => theme.palette.accent_500};
            border: 2px solid ${({ theme }) => theme.palette.accent_500};
          }
        `
      case 'tertiary':
        return css`
          color: ${({ theme }) => theme.palette.accent_050};
          background: ${({ theme }) => theme.palette.accent_950};
          border: 2px solid ${({ theme }) => theme.palette.accent_950};

          &:hover {
            background: ${({ theme }) => theme.palette.accent_900};
            border: 2px solid ${({ theme }) => theme.palette.accent_900};
          }
          &:disabled {
            cursor: not-allowed;
            color: ${({ theme }) => theme.palette.accent_200};
            background: ${({ theme }) => theme.palette.accent_900};
            border: 2px solid ${({ theme }) => theme.palette.accent_900};
          }
        `
    }
  }}
`
