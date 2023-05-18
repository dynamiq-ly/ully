import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Grid = styled(motion.div)<{ column?: number }>`
  display: grid;
  gap: ${({ theme }) => theme.spacing(12)};
  grid-template-columns: repeat(${({ column }) => column || 1}, 1fr);
`

export const CardContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(12)};
  height: ${({ theme }) => theme.spacing(50)};
  padding: ${({ theme }) => theme.spacing(8)};
  border-radius: ${({ theme }) => theme.spacing(4)};
  background: ${({ theme }) => theme.colors.white};
  filter: drop-shadow(0px 1px 1px ${({ theme }) => theme.colors.f500});

  &:hover {
    filter: drop-shadow(0px 1px 2px ${({ theme }) => theme.colors.f500});
  }

  & > div:last-child {
    flex: 1;

    & > p:first-child {
      font-weight: 450;
      font-size: ${({ theme }) => theme.spacing(9)};
      margin-bottom: ${({ theme }) => theme.spacing(2)};
    }

    & > p:last-child {
      font-size: ${({ theme }) => theme.spacing(6)};
      color: ${({ theme }) => theme.colors.f900};
    }
  }
`

export const IconBox = styled.div<{ bg: string; clx: string }>`
  display: flex;
  border-radius: 100%;
  align-items: center;
  justify-content: center;

  > svg {
    color: ${({ clx }) => clx};
  }

  background: ${({ bg }) => bg};
  width: ${({ theme }) => theme.spacing(31)};
  height: ${({ theme }) => theme.spacing(31)};
`
