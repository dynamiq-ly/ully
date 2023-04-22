import type { FC, ReactElement } from 'react'

import { StyledInput, StyledInputField, StyledInputIconBox } from '@/styles/input.module'

type InputProps = {
  placeholder?: string
  icon?: ReactElement | undefined
  type?: 'email' | 'password' | 'text'
}

const Input: FC<InputProps & Record<string, any>> = ({ type = 'text', icon = undefined, placeholder = 'placeholder...' }) => {
  return (
    <StyledInputField>
      {icon && <StyledInputIconBox>{icon}</StyledInputIconBox>}
      <StyledInput type={type} placeholder={placeholder} autoComplete={'no'} />
    </StyledInputField>
  )
}

export default Input
