import styled from 'styled-components'

export const ButtonWrapper = styled.button`
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

  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.accents.primary.p700};
  border: 2.5px solid ${({ theme }) => theme.accents.primary.p700};

  &:hover {
    background: ${({ theme }) => theme.accents.primary.p600};
    border: 2.5px solid ${({ theme }) => theme.accents.primary.p600};
  }
`
