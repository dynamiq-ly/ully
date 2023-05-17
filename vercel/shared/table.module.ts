import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const TableWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing(4)};
  border: 1.5px solid ${({ theme }) => theme.colors.f300};
`

export const TableHeaderStyle = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(24)};

  & > div {
    & > p:first-child {
      font-weight: 700;
      text-transform: capitalize;
      font-size: ${({ theme }) => theme.spacing(16)};
      margin-bottom: ${({ theme }) => theme.spacing(2)};
    }

    & > p:last-child {
      font-weight: 400;
      font-size: ${({ theme }) => theme.spacing(7)};
      color: ${({ theme }) => theme.colors.f800};
    }
  }
`

export const Table = styled.table`
  width: 100%;
  border: none;
  padding: 0rem 0.5rem;
  border-collapse: collapse;

  & > tbody > tr {
    height: ${({ theme }) => theme.spacing(20)};
    border-top: 1px solid ${({ theme }) => theme.colors.f300};

    &:hover {
      cursor: pointer;
      background: ${({ theme }) => theme.colors.f200};
    }
  }

  & > thead > tr {
    height: ${({ theme }) => theme.spacing(24)};
  }
`

export const TableHead = styled.th`
  font-size: 14px;
  font-weight: 450;
  text-align: start;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.f700};
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(4)};
`

export const TableData = styled.td`
  padding: ${({ theme }) => theme.spacing(4)};
  font-size: ${({ theme }) => theme.spacing(7)};
`

type TableTextProps = {
  color?: string
  size?: number
  badge?: string
}
export const TableText = styled.div<TableTextProps>`
  display: flex;
  font-weight: 450;
  width: fit-content;
  color: ${({ color }) => color};
  font-size: ${({ theme, size = 6 }) => theme.spacing(size)};
  background: ${({ badge }) => badge};

  ${({ badge }) =>
    badge &&
    css`
      border-radius: ${({ theme }) => theme.spacing(5)};
      padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(5)};
    `}
`
