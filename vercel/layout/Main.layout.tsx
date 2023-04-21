import type { FC, ReactElement } from 'react'

import { StyledMainLayout } from '@/styles/layout.module'

type MainLayoutProps = {
  children: ReactElement
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return <StyledMainLayout>{children}</StyledMainLayout>
}

export default MainLayout
