import { FC } from 'react'
import { useTable } from 'react-table'
import { Table, TableData, TableHead, TableWrapper } from '@/shared/table.module'

import { BiTrashAlt, BiEditAlt } from 'react-icons/bi'

const DataTable: FC<ComponentProp> = function ({ data, columns }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: 'action',
        Cell: ({ row }) => (
          <>
            <BiEditAlt size={18} style={{ marginLeft: 5, cursor: 'pointer' }} />
            <BiTrashAlt size={18} style={{ marginLeft: 5, cursor: 'pointer' }} />
          </>
        ),
      },
    ])
  })

  return (
    <TableWrapper>
      <Table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            const { key, ...restHeaderGroupProps } = headerGroup.getHeaderGroupProps()
            return (
              <tr key={key} {...restHeaderGroupProps}>
                {headerGroup.headers.map((column) => {
                  const { key, ...restColumn } = column.getHeaderProps()
                  return (
                    <TableHead key={key} {...restColumn}>
                      {column.render('Header')}
                    </TableHead>
                  )
                })}
              </tr>
            )
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            const { key, ...restRowProps } = row.getRowProps()
            return (
              <tr key={key} {...restRowProps}>
                {row.cells.map((cell) => {
                  const { key, ...restCellProps } = cell.getCellProps()
                  return (
                    <TableData key={key} {...restCellProps}>
                      {cell.render('Cell')}
                    </TableData>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </Table>
    </TableWrapper>
  )
}

type ComponentProp = {
  data: any
  columns: any
}

export default DataTable
