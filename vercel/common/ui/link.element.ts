import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
  display: flex;
  cursor: pointer;
  align-items: center;
  transition: 150ms ease-in-out;
  gap: ${({ theme }) => theme.spacing(2)};

  &:hover {
    gap: ${({ theme }) => theme.spacing(4)};
  }

  & > p {
    font-weight: 450;
    font-size: ${({ theme }) => theme.spacing(6.5)};
    color: ${({ theme }) => theme.accents.primary.p800};
    &::first-letter {
      text-transform: uppercase;
    }
  }

  & > svg {
    font-size: ${({ theme }) => theme.spacing(9)};
    color: ${({ theme }) => theme.accents.primary.p800};
  }
`
