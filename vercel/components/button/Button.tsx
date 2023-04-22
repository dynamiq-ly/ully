import type { FC } from 'react'

import { motion } from 'framer-motion'
import { TbLoader } from 'react-icons/tb'
import { StyledButton } from '@/styles/button.module'

type ButtonProps = {
  title: string
  disabled?: boolean
  loading?: boolean
  variant?: 'primary' | 'secondary' | 'tertiary'
}

const Button: FC<ButtonProps & Record<string, any>> = ({ title, disabled = false, loading = false, variant = 'primary' }) => {
  return (
    <StyledButton disabled={disabled} variant={variant}>
      {loading ? (
        <motion.span animate={{ ...animation }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <TbLoader size={20} />
        </motion.span>
      ) : (
        title
      )}
    </StyledButton>
  )
}

const animation = {
  rotate: 360,
  transition: {
    duration: 2,
    ease: 'linear',
    repeat: Infinity,
  },
}

export default Button
