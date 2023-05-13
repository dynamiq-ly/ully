import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Form = styled(motion.div)`
  width: 300px;
  display: grid;
  gap: ${({ theme }) => theme.spacing(5)};
`

export const FormHeader = styled.div`
  & > p:first-child {
    font-weight: 600;
    font-size: ${({ theme }) => theme.spacing(12)};
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }

  & > p:nth-child(2) {
    font-size: ${({ theme }) => theme.spacing(7)};
    margin-bottom: ${({ theme }) => theme.spacing(6)};
    color: ${({ theme }) => theme.colors.f900};
  }
`

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${({ theme }) => theme.spacing(6)} 0;
`
