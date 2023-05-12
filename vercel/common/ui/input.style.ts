import styled from 'styled-components'

export const InputField = styled.div`
  gap: 2px;
  display: flex;
  flex-direction: column;
`

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > p {
    font-size: 12px;
    line-height: 18px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text.accent_400};
  }
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.05px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text.accent_200};
`

export const TextEdit = styled.input`
  width: 100%;
  height: 38px;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 0px 8px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.border.accent_100};

  &::placeholder {
    text-transform: capitalize;
  }
`

export const ValidationText = styled.p<{ isError?: boolean }>`
  font-size: 12px;
  line-height: 18px;
  text-transform: capitalize;
  color: ${({ theme, isError = false }) => (isError ? theme.colors.text.accent_error : theme.colors.text.accent_400)};
`
