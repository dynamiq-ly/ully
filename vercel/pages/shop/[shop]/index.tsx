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

      <ul>
        {shop?.catalogs.map((catalog: Catalog) => (
          <li key={catalog.id}>{catalog.catalog_name}</li>
        ))}
      </ul>
    </>
  )
}
