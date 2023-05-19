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

type CatalogProps = {
  catalog: Catalog
}

export const ProductCatalog: FC<CatalogProps> = ({ catalog }) => {
  return <ProductCardImage>{/* <img src={`${process.env.APP_SERVER}storage/product/catalog/${catalog.catalog_image}`} /> */}</ProductCardImage>
}
