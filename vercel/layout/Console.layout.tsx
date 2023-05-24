import type { FC, ReactElement } from 'react'
import { useRouter } from 'next/router'

import { CgCreditCard } from 'react-icons/cg'
import { MdOutlineStorefront } from 'react-icons/md'
import { TbListDetails, TbSettings, TbSmartHome, TbUsers } from 'react-icons/tb'

import Logo from '@/components/Logo'
import Collapsible from '@/components/Collapsible'
import Consolelogout from '@/components/Consolelogout'
import BreadCrumb from '@/common/BreadCrumb'

import { CollapsibleContainer } from '@/shared/collapsible.module'
import { ConsoleLaoyoutContent, ConsoleLayoutContainer, ConsoleLayoutSidebar, ConsoleLayoutWrapper } from '@/styles/layout.style'
import { __auth } from '@/context/AuthProvider'

type Props = {
  children: ReactElement
}

interface CollapsibleItemType {
  title: string
  path: string
}

const ConsoleLayout: FC<Props> = ({ children }) => {
  const { push, pathname } = useRouter()
  const { currentUser } = __auth()

  return (
    <ConsoleLayoutWrapper>
      <ConsoleLayoutSidebar>
        <div>
          <Logo />
        </div>

        <div>
          <CollapsibleContainer isOpen={pathname === '/console'} onClick={() => push('/console')}>
            <TbSmartHome size={21} /> <p>Dashboard</p>
          </CollapsibleContainer>

          {currentUser?.role === 'p_u_admin' ? (
            <CollapsibleContainer isOpen={pathname.includes('/stores')} onClick={() => push('/console/stores')}>
              <MdOutlineStorefront size={21} /> <p>stores</p>
            </CollapsibleContainer>
          ) : (
            <CollapsibleContainer isOpen={pathname.includes('/store')} onClick={() => push('/console/store')}>
              <MdOutlineStorefront size={21} /> <p>your store</p>
            </CollapsibleContainer>
          )}

          <Collapsible title={'catalogs'} array={catalog} defaultOpen={false} />

          <CollapsibleContainer isOpen={pathname.includes('/orders')}>
            <TbListDetails size={21} /> <p>orders</p>
          </CollapsibleContainer>

          <CollapsibleContainer isOpen={pathname.includes('/transactions')}>
            <CgCreditCard size={19} /> <p>transactions</p>
          </CollapsibleContainer>

          {currentUser?.role === 'p_u_admin' && (
            <CollapsibleContainer isOpen={pathname.includes('/users')}>
              <TbUsers size={21} /> <p>users</p>
            </CollapsibleContainer>
          )}

          <CollapsibleContainer>
            <TbSettings size={21} /> <p>Setting</p>
          </CollapsibleContainer>
        </div>
        <div>
          <Consolelogout />
        </div>
      </ConsoleLayoutSidebar>
      <ConsoleLayoutContainer>
        <BreadCrumb />
        <ConsoleLaoyoutContent>{children}</ConsoleLaoyoutContent>
      </ConsoleLayoutContainer>
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
