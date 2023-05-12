import Image from 'next/image'
import type { FC } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const Logo: FC = () => {
  const { push } = useRouter()

  return (
    <LogoStyled whileTap={{ scale: 0.9 }} onClick={() => push('/')}>
      <Image src={'/logo.png'} width={32} height={32} alt={'ully logo'} />
      <LogoStyledText>Ully</LogoStyledText>
    </LogoStyled>
  )
}

export const LogoStyled = styled(motion.button)`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  gap: 5px;
  cursor: pointer;
`

export const LogoStyledText = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.text.accent_100};
`

export default Logo
