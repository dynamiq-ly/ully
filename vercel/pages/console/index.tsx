import Head from 'next/head'
import type { ReactElement } from 'react'

import Card from '@/components/Card'
import TableHeader from '@/components/TableHeader'
import { Grid } from '@/shared/card.module'

import { CgCreditCard } from 'react-icons/cg'
import { MdOutlineStorefront } from 'react-icons/md'
import { TbListDetails, TbSettings, TbFolder, TbUsers } from 'react-icons/tb'

type CardProps = {
  title: string
  path: string
  icon: ReactElement
}

export default function Index() {
  return (
    <>
      <Head>
        <title>{process.env.APP_NAME} | Console</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      <TableHeader title={'Dashboard'} subTitle={'Dashboard Section.'} search={false} />

      <Grid column={4} initial={'closed'} animate={'open'} variants={{ ...animation }}>
        {cardArray.map((el, index) => (
          <Card key={index} title={el.title} path={el.path} icon={el.icon} />
        ))}
      </Grid>
    </>
  )
}

const cardArray: CardProps[] = [
  { title: 'Catalogs', path: '/console/catalog', icon: <TbFolder size={28} /> },
  { title: 'Orders', path: '/console/orders', icon: <TbListDetails size={28} /> },
  { title: 'Transactions', path: '/console/transactions', icon: <CgCreditCard size={28} /> },
  { title: 'Users', path: '/console/users', icon: <TbUsers size={28} /> },
  { title: 'Stores', path: '/console/stores', icon: <MdOutlineStorefront size={28} /> },
  { title: 'Settings', path: '/console/settings', icon: <TbSettings size={28} /> },
]

const animation = {
  open: {
    transition: { staggerChildren: 0.1 },
  },
  closed: {
    transition: { type: 'tween', staggerChildren: 0.1, when: 'afterChildren', staggerDirection: -1 },
  },
}
