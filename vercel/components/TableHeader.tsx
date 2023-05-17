import type { FC } from 'react'

import { TableHeaderStyle } from '@/shared/table.module'
import Input from '@/common/Input'
import { TbSearch } from 'react-icons/tb'

type Props = {
  title: string
  subTitle: string
}

const TableHeader: FC<Props & Record<string, any>> = ({ title, subTitle, ...rest }) => {
  return (
    <TableHeaderStyle initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'tween' }}>
      <div>
        <p>{title}</p>
        <p>{subTitle}</p>
      </div>
      <Input icon={<TbSearch />} placeholder={'Search'} {...rest} />
    </TableHeaderStyle>
  )
}

export default TableHeader
