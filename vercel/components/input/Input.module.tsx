import type { FC, ReactNode } from 'react'

import { InputBoxIcon, InputContainer, InputField, InputStyled } from '@/styles/input.stitche'

type InputProps = {
  size: 'small' | 'large' | undefined
  placeholder: string
  label: string | undefined
  value: string | undefined
  onChangeText: () => void
  icon: ReactNode | undefined
  type: 'text' | 'password' | 'email'
}

const Input: FC<Partial<InputProps> & Record<string, any>> = ({
  onChangeText,
  type = 'text',
  size = undefined,
  icon = undefined,
  label = undefined,
  value = undefined,
  placeholder = 'placeholder',
}) => {
  return (
    <InputContainer>
      {label && <label>{label}</label>}
      <InputField size={size}>
        {icon && <InputBoxIcon size={size}>{icon}</InputBoxIcon>}
        <InputStyled type={type} placeholder={placeholder} value={value} onChange={onChangeText} />
      </InputField>
    </InputContainer>
  )
}

export default Input
