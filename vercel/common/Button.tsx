import type { FC } from 'react'
import { ButtonWrapper } from './ui/button.element'

type Props = {
  title: string
  bg?: 'primary' | 'secondary' | undefined
}

const Button: FC<Props & Record<string, any>> = ({ title = 'button', bg = undefined, ...rest }) => {
  return (
    <ButtonWrapper bg={bg} {...rest}>
      {title}
    </ButtonWrapper>
  )
}

export default Button
