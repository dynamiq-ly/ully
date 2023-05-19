import { FC } from 'react'

import { __shop } from '@/context/ShopProvider'
import { ProductCatalog } from '@/components/Product'

const LinksHeader: FC = () => {
  const { shop } = __shop()
  return <div></div>
}

export default LinksHeader
