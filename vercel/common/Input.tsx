import type { FC } from 'react'

import { InputField, Label, LabelContainer, TextEdit, ValidationText } from '@/common/ui/input.style'

const Input: FC<Partial<InputProps> & Record<string, any>> = ({ label, placeholder = 'placeholder', validationText, optional = false, type = 'text', isError = false, ...rest }) => {
  return (
    <InputField>
      {label && (
        <LabelContainer>
          <Label>{label}</Label>
          {optional && <p>optional</p>}
        </LabelContainer>
      )}
      <TextEdit type={type} placeholder={`${placeholder}${!label && !optional ? '*' : ''}`} {...rest} />
      {validationText && <ValidationText isError={isError}>{validationText}</ValidationText>}
    </InputField>
  )
}

type InputProps = {
  label: string
  optional: boolean
  placeholder: string
  validationText: string
  isError: boolean
  type: 'text' | 'email' | 'password' | 'number'
}

export default Input
