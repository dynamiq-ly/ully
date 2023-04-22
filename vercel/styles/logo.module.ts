import styled from 'styled-components'
import { motion } from 'framer-motion'

export const LogoStyled = styled(motion.button)`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  gap: 5px;
  cursor: pointer;
`

export const LogoStyledText = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.palette.accent_000};
`
