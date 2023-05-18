import type { FC, ReactElement } from 'react'

import Avatar from '@/common/Avatar'
import { __shop } from '@/context/ShopProvider'

import { StoreLayoutWrapper, StoreLayoutHeader, StoreLayoutContent, StoreLayoutLogo, StoreLayoutActions } from '@/styles/layout.style'
import Input from '@/common/Input'
import { TbSearch, TbShoppingBag, TbUser } from 'react-icons/tb'
import Button from '@/common/Button'
import { useRouter } from 'next/router'

type Props = {
  children: ReactElement
}

const ShopLayout: FC<Props> = ({ children }) => {
  const { shop } = __shop()
  const { push } = useRouter()

  return (
    <StoreLayoutWrapper>
      <StoreLayoutHeader>
        <StoreLayoutLogo>
          <Avatar src={`${process.env.APP_SERVER}storage/store/logo/${shop?.store_logo}`} alt={'store logo'} width={38} height={38} />
          <p>{shop?.store_name}</p>
        </StoreLayoutLogo>
        <Input placeholder={'Search'} icon={<TbSearch size={21} />} />
        <StoreLayoutActions>
          <div>
            <TbShoppingBag size={21} />
          </div>
          <div>
            <Button title={'login'} bg={'secondary'} onClick={() => push('/auth/login')} />
          </div>
        </StoreLayoutActions>
      </StoreLayoutHeader>
      <StoreLayoutContent>{children}</StoreLayoutContent>
    </StoreLayoutWrapper>
  )
}

export default ShopLayout
