import Head from 'next/head'

import { __shop } from '@/context/ShopProvider'

export default function Shop() {
  const { shop } = __shop()

  return (
    <>
      <Head>
        <title>{shop?.store_name}</title>
        <link rel='icon' href='/logo.png' />
      </Head>

      {/* <StoreWrapper>{shop?.catalogs.map((catalog: Catalog) => catalog.categories.map((category: Category) => category.products.map((product: Product) => <Product key={product.id} />)))}</StoreWrapper> */}
    </>
  )
}
