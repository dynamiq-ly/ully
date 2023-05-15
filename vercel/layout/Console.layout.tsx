import type { FC, ReactElement } from 'react'

import { TbSearch } from 'react-icons/tb'

import Input from '@/common/Input'
import Logo from '@/components/Logo'
import Button from '@/common/Button'
import Consolelogout from '@/components/Consolelogout'

import { ConsoleLayoutContainer, ConsoleLayoutSidebar, ConsoleLayoutWrapper } from '@/styles/layout.style'

type Props = {
  children: ReactElement
}

const ConsoleLayout: FC<Props> = ({ children }) => {
  return (
    <ConsoleLayoutWrapper>
      <ConsoleLayoutSidebar>
        <div>
          <Logo />
        </div>
        <div>
          <Input placeholder={'search'} icon={<TbSearch />} />
        </div>
        <div>
          <Button title={'users'} />
          <Button title={'users'} />
          <Button title={'users'} />
          <Button title={'users'} />
        </div>
        <div>
          <Consolelogout />
        </div>
      </ConsoleLayoutSidebar>
      <ConsoleLayoutContainer>{children}</ConsoleLayoutContainer>
    </ConsoleLayoutWrapper>
  )
}

export default ConsoleLayout
