import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ProductCardWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
  flex-direction: column;
  height: ${({ theme }) => theme.spacing(200)};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing(4)};
  border: 2px solid ${({ theme }) => theme.colors.f300};
`

export const ProductCardImage = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => theme.spacing(175)};
  background: ${({ theme }) => theme.accents.primary.p100}30;
`
