import type { FC, ReactElement } from 'react'

import { InputElement, Label, LabelWrapper, TextField, TextWrapper, ValidationText } from '@/common/ui/input.element'

type Props = {
  label: string
  placeholder: string
  type: 'text' | 'password' | 'email' | 'number'
  icon: ReactElement | undefined
  validationText: string
  optional: boolean
}

const Input: FC<Partial<Props> & Record<string, any>> = ({ label, placeholder = 'type something', type = 'text', icon = undefined, validationText, optional = false, ...rest }) => {
  return (
    <InputElement>
      {label && (
        <LabelWrapper>
          <Label>{label}</Label>
          {optional && <p>Optional</p>}
        </LabelWrapper>
      )}

      <TextWrapper>
        {icon && <div>{icon}</div>}
        <TextField type={type} placeholder={placeholder} {...rest} />
      </TextWrapper>

      {validationText && <ValidationText>validation text</ValidationText>}
    </InputElement>
  )
}

export default Input
