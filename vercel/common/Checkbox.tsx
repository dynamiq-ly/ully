import type { FC } from 'react'

import { CheckboxWrapper } from '@/common/ui/checkbox.element'

type Props = {
  label: string
  check?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox: FC<Props> = ({ label, check, onChange }) => {
  return (
    <CheckboxWrapper>
      <label className='form-control'>
        <input type='checkbox' name='checkbox' checked={check} onChange={onChange} />
        {label}
      </label>
    </CheckboxWrapper>
  )
}

export default Checkbox
