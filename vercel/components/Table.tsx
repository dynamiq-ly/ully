import { FC } from 'react'
import { useTable, usePagination } from 'react-table'
import { Table, TableData, TableHead, TableWrapper } from '@/shared/table.module'
import { Pagination, PaginationNumber, PaginationButton } from '@/shared/pagination.module'

import { BiTrashAlt, BiEditAlt } from 'react-icons/bi'
import { TbChevronLeft, TbChevronRight, TbChevronsLeft, TbChevronsRight } from 'react-icons/tb'

type Props = {
  data: any
  columns: any
}

const DataTable: FC<Props> = function ({ data, columns }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    /* pagination */
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable({ columns, data, initialState: { pageIndex: 0 } }, usePagination, (hooks) => {
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
          {page.map((row) => {
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

      {/* pagination */}

      {data.length > 10 && (
        <Pagination>
          <PaginationNumber>
            <PaginationButton onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              <TbChevronsLeft size={18} />
            </PaginationButton>
            <PaginationButton onClick={() => previousPage()} disabled={!canPreviousPage}>
              <TbChevronLeft size={18} />
            </PaginationButton>
          </PaginationNumber>
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
          <PaginationNumber>
            <PaginationButton onClick={() => nextPage()} disabled={!canNextPage}>
              <TbChevronRight size={18} />
            </PaginationButton>
            <PaginationButton onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
              <TbChevronsRight size={18} />
            </PaginationButton>
          </PaginationNumber>
          {/* <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value))
            }}>
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select> */}
        </Pagination>
      )}

      {/* pagination */}
    </TableWrapper>
  )
}

export default DataTable
