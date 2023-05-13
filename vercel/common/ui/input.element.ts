import styled from 'styled-components'

export const InputElement = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  flex-direction: column;

  & > * {
    font-weight: 425;
    letter-spacing: -0.05px;
  }
`

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > p {
    color: ${({ theme }) => theme.colors.f900};
    font-size: ${({ theme }) => theme.spacing(7)};
    &::first-letter {
      text-transform: uppercase;
    }
  }
`

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.f950};
  font-size: ${({ theme }) => theme.spacing(7)};
  text-transform: capitalize;
`

export const TextWrapper = styled.div`
  width: 100%;
  outline: none;
  overflow: hidden;
  font-size: ${({ theme }) => theme.spacing(7)};

  height: ${({ theme }) => theme.spacing(19)};
  max-height: ${({ theme }) => theme.spacing(19)};
  border-radius: ${({ theme }) => theme.spacing(4)};

  background: ${({ theme }) => theme.colors.white};
  border: 2.5px solid ${({ theme }) => theme.colors.f600};

  display: flex;
  align-items: center;

  &:focus-within {
    outline: none;
    border: 2.5px solid ${({ theme }) => theme.colors.f900};
  }

  & > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ theme }) => theme.spacing(19)};
    & > svg {
      font-size: ${({ theme }) => theme.spacing(9)};
      color: ${({ theme }) => theme.colors.f900};
    }
  }
`

export const TextField = styled.input`
  width: 100%;
  border: none;
  height: 100%;
  outline: none;
  padding: ${({ theme }) => theme.spacing(0)} ${({ theme }) => theme.spacing(5)};
`

export const ValidationText = styled.span`
  color: ${({ theme }) => theme.colors.f900};
  font-size: ${({ theme }) => theme.spacing(6)};

  &::first-letter {
    text-transform: uppercase;
  }
`
