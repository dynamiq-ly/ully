import { useRouter } from 'next/router'
import type { FC, ReactElement } from 'react'
import { useContext, createContext, useEffect } from 'react'

import { __ } from '@/hooks/query'

import Loader from '@/common/Loader'

import { useQuery } from 'react-query'

type Props = {
  children: ReactElement
}

type ShopContext = {
  shop?: Store | null
}

const initialContext: ShopContext = {
  shop: null,
}

const StoreContext = createContext<ShopContext>(initialContext)
export const __shop = () => useContext(StoreContext)

const ShopProvider: FC<Props> = ({ children }) => {
  const { query } = useRouter()

  const { data: shop, status } = useQuery<Store>(['@shop', query.shop], async () => await __.get(`api/store/${query.shop}`).then((res) => res.data), {
    enabled: !!query.shop,
    retry: true,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: false,
  })

  useEffect(() => {
    if (shop) {
      document.title = shop.store_name
    }
  }, [shop])

  if (!query.shop) {
    return (
      <>
        <p style={{ position: 'absolute', opacity: 0 }}>loading</p>
        <Loader />
      </>
    )
  }

  return <StoreContext.Provider value={{ shop }}>{status === 'loading' ? <Loader /> : children}</StoreContext.Provider>
}

export default ShopProvider
