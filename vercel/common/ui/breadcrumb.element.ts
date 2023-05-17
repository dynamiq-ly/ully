import styled from 'styled-components'

export const BreadCrumbContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(12)};
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.f400};
`

export const BreadCrumbText = styled.p`
  display: flex;
  font-weight: 450;
  align-items: center;
  text-transform: capitalize;
  gap: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.f700};
  font-size: ${({ theme }) => theme.spacing(7)};

  &:last-child {
    color: ${({ theme }) => theme.colors.f999};
  }

  & > svg {
    color: ${({ theme }) => theme.accents.primary.p700};
  }
`
