import type { FC, ReactElement } from 'react'

import { CgCreditCard } from 'react-icons/cg'
import { MdOutlineStorefront } from 'react-icons/md'
import { TbListDetails, TbSettings, TbSmartHome, TbUsers } from 'react-icons/tb'

import Logo from '@/components/Logo'
import Collapsible from '@/components/Collapsible'
import Consolelogout from '@/components/Consolelogout'

import { CollapsibleContainer } from '@/shared/collapsible.module'
import { ConsoleLayoutContainer, ConsoleLayoutSidebar, ConsoleLayoutWrapper } from '@/styles/layout.style'

type Props = {
  children: ReactElement
}

interface CollapsibleItemType {
  title: string
  path: string
}

const ConsoleLayout: FC<Props> = ({ children }) => {
  return (
    <ConsoleLayoutWrapper>
      <ConsoleLayoutSidebar>
        <div>
          <Logo />
        </div>

        <div>
          <CollapsibleContainer>
            <TbSmartHome size={21} /> <p>Dashboard</p>
          </CollapsibleContainer>

          <Collapsible title={'catalogs'} array={catalog} defaultOpen={true} />

          <CollapsibleContainer>
            <TbListDetails size={21} /> <p>orders</p>
          </CollapsibleContainer>

          <CollapsibleContainer>
            <CgCreditCard size={19} /> <p>transactions</p>
          </CollapsibleContainer>

          <CollapsibleContainer>
            <TbUsers size={21} /> <p>users</p>
          </CollapsibleContainer>

          <CollapsibleContainer>
            <MdOutlineStorefront size={21} /> <p>stores</p>
          </CollapsibleContainer>

          <CollapsibleContainer>
            <TbSettings size={21} /> <p>Setting</p>
          </CollapsibleContainer>
        </div>
        <div>
          <Consolelogout />
        </div>
      </ConsoleLayoutSidebar>
      <ConsoleLayoutContainer>{children}</ConsoleLayoutContainer>
    </ConsoleLayoutWrapper>
  )
}

const catalog: CollapsibleItemType[] = [
  {
    title: 'catalogs',
    path: '/console/catalog/catalogs',
  },
  {
    title: 'categories',
    path: '/console/catalog/categories',
  },
  {
    title: 'products',
    path: '/console/catalog/products',
  },
]

export default ConsoleLayout
