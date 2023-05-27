import type { FC } from 'react'

import Input from '@/common/Input'
import Button from '@/common/Button'

import { useRouter } from 'next/router'
import { TbSearch } from 'react-icons/tb'
import { TableHeaderStyle } from '@/shared/table.module'

interface ITableHeaderProps {
  adder: string
  adderPath: string
}

type Props = {
  title: string
  subTitle?: string
  search?: boolean
  button?: ITableHeaderProps | undefined
}

const TableHeader: FC<Props & Record<string, any>> = ({ title, subTitle, search = true, button = undefined, ...rest }) => {
  const { push } = useRouter()
  return (
    <TableHeaderStyle initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'tween' }}>
      <div>
        <p>{title}</p>
        <p>{subTitle}</p>
      </div>
      <div style={{ display: 'flex', gap: 5 }}>
        {search && <Input icon={<TbSearch />} placeholder={'Search'} {...rest} />}
        {button && (
          <span>
            <Button title={button?.adder} onClick={() => push(button?.adderPath)} />
          </span>
        )}
      </div>
    </TableHeaderStyle>
  )
}

export default TableHeader
