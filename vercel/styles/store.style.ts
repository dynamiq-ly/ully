import styled from 'styled-components'

export const StoreWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing(12)};
  width: ${({ theme }) => theme.spacing(750)};
  margin: ${({ theme }) => theme.spacing(24)} auto;
`
