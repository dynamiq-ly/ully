import styled from 'styled-components'

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing(8)};
  height: ${({ theme }) => theme.spacing(32)};
  padding: 0px ${({ theme }) => theme.spacing(16)};
  border-top: 1px solid ${({ theme }) => theme.colors.f300};
`

export const PaginationNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
`

export const PaginationButton = styled.button`
  border: none;
  outline: none;
  display: flex;
  cursor: pointer;
  align-items: center;
  border-radius: 100%;
  justify-content: center;
  width: ${({ theme }) => theme.spacing(14)};
  height: ${({ theme }) => theme.spacing(14)};
  background: ${({ theme }) => theme.accents.primary.p800};

  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.f500};
  }

  & > svg {
    display: flex;
    color: ${({ theme }) => theme.colors.white};
  }
`
