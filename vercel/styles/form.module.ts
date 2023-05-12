import styled from 'styled-components'
import { motion } from 'framer-motion'

export const FormField = styled(motion.div)`
  gap: 24px;
  display: flex;
  width: 400px;
  align-items: center;
  flex-direction: column;
`

export const FormContainer = styled.div`
  gap: 24px;
  width: 100%;
  display: flex;
  padding: 28px 24px;
  border-radius: 12px;
  justify-content: center;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background.accent_100};
`

export const FormGroup = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
  flex-direction: column;
`

export const FormHeading = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
`

export const FormSubHeading = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.accent_300};
`

export const FormOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const FormLinks = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.background.accent_blue};

  & > a {
    text-decoration: none;
  }
`
