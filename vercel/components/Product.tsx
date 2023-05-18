import Avatar from '@/common/Avatar'
import { ProductCardImage, ProductCardWrapper } from '@/shared/product.module'
import type { FC } from 'react'

const Product: FC = () => {
  return (
    <ProductCardWrapper>
      <ProductCardImage>
        <Avatar src='' alt='product' width={200} height={200} />
      </ProductCardImage>
      Product
    </ProductCardWrapper>
  )
}

export default Product
