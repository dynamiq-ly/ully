import { ButtonStyled } from '@/styles/button.stitche'
import type { FC } from 'react'

type ButtonProps = {
  loading: boolean
  title: string | undefined
  onPress: () => void
}

const Button: FC<Partial<ButtonProps> & Record<string, any>> = ({ title = undefined, loading = false, onPress }) => {
  return <ButtonStyled onClick={onPress}>{loading ? <div className='loader' /> : <div>{title && <p>{title}</p>}</div>}</ButtonStyled>
}

export default Button
