import type { FC } from 'react'
import { ButtonWrapper } from './ui/button.element'

type Props = {
  title: string
}

const Button: FC<Props & Record<string, any>> = ({ title = 'button', ...rest }) => {
  return <ButtonWrapper {...rest}>{title}</ButtonWrapper>
}

export default Button
