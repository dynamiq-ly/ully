import type { FC } from 'react'

import { Loading } from '@/common/ui/loader.element'

const loader: FC = () => {
  return (
    <Loading>
      <span className='loader'></span>
    </Loading>
  )
}

export default loader
