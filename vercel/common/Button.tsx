import type { FC } from 'react'

import { ButtonFiled, ButtonText } from '@/common/ui/button.style'

const Button: FC<ButtonProps & Record<string, any>> = ({ title, ...rest }) => {
  return (
    <ButtonFiled>
      <ButtonText>{title}</ButtonText>
    </ButtonFiled>
  )
}

type ButtonProps = {
  title: string
}

export default Button
