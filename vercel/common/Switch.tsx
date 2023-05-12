import type { ChangeEvent, FC } from 'react'

import { StyledInput, StyledLabel, StyledSwitch } from '@/common/ui/switch.style'

const Switch: FC<SwitchProps> = ({ label, check, setCheck }) => {
  return (
    <StyledLabel>
      <StyledInput checked={check} type={'checkbox'} onChange={setCheck} />
      <StyledSwitch />
      <p>{label}</p>
    </StyledLabel>
  )
}

type SwitchProps = {
  label: string
  check: boolean
  setCheck: (event: ChangeEvent<HTMLInputElement>) => void
}

export default Switch
