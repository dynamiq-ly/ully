import styled from 'styled-components'

export const StyledInputField = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  overflow: hidden;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.palette.accent_900};
  border: 2px solid ${({ theme }) => theme.palette.accent_800};
`

export const StyledInputIconBox = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 0px 10px;
  color: ${({ theme }) => theme.palette.accent_050};

  &::placeholder {
    text-transform: capitalize;
    color: ${({ theme }) => theme.palette.accent_400};
  }
`
