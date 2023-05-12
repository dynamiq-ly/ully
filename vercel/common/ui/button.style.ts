import styled from 'styled-components'

export const ButtonFiled = styled.button`
  width: 100%;
  height: 38px;
  display: flex;
  margin: 8px 0;
  outline: none;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background.accent_blue};
  border: 2px solid ${({ theme }) => theme.colors.background.accent_blue};
`

export const ButtonText = styled.p`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.background.accent_100};
`
