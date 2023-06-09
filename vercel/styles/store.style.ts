import styled from 'styled-components'

export const StoreWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing(12)};
`

export const StoreCreation = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(12)};
`
