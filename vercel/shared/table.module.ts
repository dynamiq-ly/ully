import styled from 'styled-components'

export const TableWrapper = styled.div`
  overflow: hidden;
  margin: ${({ theme }) => theme.spacing(24)} auto;
  max-width: ${({ theme }) => theme.spacing(750)};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing(4)};
  border: 1.5px solid ${({ theme }) => theme.colors.f300};
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
`
