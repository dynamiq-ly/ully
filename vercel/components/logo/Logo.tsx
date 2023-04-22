import Image from 'next/image'
import type { FC } from 'react'

import { LogoStyled, LogoStyledText } from '@/styles/logo.module'

const Logo: FC = () => {
  return (
    <LogoStyled initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileTap={{ scale: 0.9 }}>
      <Image src={'/logo.png'} width={32} height={32} alt={'ully logo'} />
      <LogoStyledText>Ully</LogoStyledText>
    </LogoStyled>
  )
}

export default Logo
