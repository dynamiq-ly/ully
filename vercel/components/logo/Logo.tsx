import Image from 'next/image'
import type { FC } from 'react'
import { useRouter } from 'next/router'
import { LogoStyled, LogoStyledText } from '@/styles/logo.module'

const Logo: FC = () => {
  const { push } = useRouter()

  return (
    <LogoStyled whileTap={{ scale: 0.9 }} onClick={() => push('/')}>
      <Image src={'/logo.png'} width={32} height={32} alt={'ully logo'} />
      <LogoStyledText>Ully</LogoStyledText>
    </LogoStyled>
  )
}

export default Logo
