import styled from 'styled-components'

export const StyledLabel = styled.label`
  gap: 1rem;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: flex-start;

  & > p {
    display: flex;
    font-size: 14px;
    letter-spacing: -0.25px;
  }
`

export const StyledSwitch = styled.div`
  width: 32px;
  height: 18px;
  position: relative;
  background: #dadada;
  border-radius: 0.75rem;
  transition: 500ms ease-in-out;

  &:before {
    top: 50%;
    left: 3px;
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 100%;
    transition: 300ms all;
    transform: translate(0, -50%);
  }
`

export const StyledInput = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${StyledSwitch} {
    background: ${({ theme }) => theme.colors.background.accent_blue};

    &:before {
      transform: translate(16px, -50%);
    }
  }
`
