import styled from 'styled-components'
import { motion } from 'framer-motion'

export const CollapsibleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
`
export const CollapsibleContainer = styled.button<{ isOpen?: boolean }>`
  border: none;
  outline: none;
  background: ${({ theme, isOpen = false }) => (isOpen ? theme.accents.primary.p100 : theme.colors.white)};

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(4)};
  height: ${({ theme }) => theme.spacing(20)};

  cursor: pointer;
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: ${({ theme }) => theme.spacing(4)};

  & > svg {
    color: ${({ theme }) => theme.accents.primary.p800};
  }

  & > p {
    flex: 1;
    font-weight: 450;
    text-align: start;
    text-transform: capitalize;
    color: ${({ theme, isOpen = false }) => (isOpen ? theme.colors.black : theme.colors.f900)};
  }

  & > div > svg {
    color: ${({ theme }) => theme.colors.f900};
  }

  &:hover {
    background: ${({ theme }) => theme.accents.primary.p100};
  }
`

export const CollapsibleContent = styled(motion.div)`
  width: 100%;
`

export const CollapsibleItem = styled(motion.div)`
  width: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.f900};
  padding: ${({ theme }) => theme.spacing(4)};
  height: ${({ theme }) => theme.spacing(18)};
  font-size: ${({ theme }) => theme.spacing(7)};
  padding-left: ${({ theme }) => theme.spacing(15)};
  border-radius: ${({ theme }) => theme.spacing(4)};

  &:hover {
    background: ${({ theme }) => theme.accents.primary.p100};
  }
`
