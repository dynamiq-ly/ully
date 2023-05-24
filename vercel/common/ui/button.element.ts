import styled, { css } from 'styled-components'

type ButtonProps = {
  bg?: 'primary' | 'secondary' | undefined
}

export const ButtonWrapper = styled.button<ButtonProps>`
  width: 100%;
  outline: none;
  overflow: hidden;
  cursor: pointer;
  font-weight: 450;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.spacing(7)};

  height: ${({ theme }) => theme.spacing(19)};
  max-height: ${({ theme }) => theme.spacing(19)};
  border-radius: ${({ theme }) => theme.spacing(4)};
  padding: 0px ${({ theme }) => theme.spacing(8)};

  ${({ bg }) => {
    switch (bg) {
      case 'primary':
        return css`
          color: ${({ theme }) => theme.colors.f100};
          background: ${({ theme }) => theme.accents.primary.p700};
          border: 2.5px solid ${({ theme }) => theme.accents.primary.p700};

          &:hover {
            background: ${({ theme }) => theme.accents.primary.p600};
            border: 2.5px solid ${({ theme }) => theme.accents.primary.p600};
          }
        `
      case 'secondary':
        return css`
          color: ${({ theme }) => theme.colors.f900};
          border: 2.5px solid transparent;
          background: transparent;

          &:hover {
            background: ${({ theme }) => theme.colors.f200};
            border: 2.5px solid ${({ theme }) => theme.colors.f200};
          }
        `
      default:
        return css`
          color: ${({ theme }) => theme.colors.f100};
          background: ${({ theme }) => theme.colors.f999};
          border: 2.5px solid ${({ theme }) => theme.colors.f999};

          &:hover {
            background: ${({ theme }) => theme.colors.f975};
            border: 2.5px solid ${({ theme }) => theme.colors.f975};
          }
        `
    }
  }}
`
