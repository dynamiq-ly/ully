import type { FC, ReactElement } from 'react'
import { useRouter } from 'next/router'

import { Wrapper } from '@/common/ui/link.element'

type Props = {
  href: string
  title?: string
  icon?: ReactElement
  direction?: boolean
}

const Link: FC<Props> = ({ href, title, icon, direction = false }) => {
  const { push } = useRouter()

  return (
    <Wrapper onClick={() => push(href)}>
      {direction ? (
        <>
          {title && <p>{title}</p>}
          {icon && icon}
        </>
      ) : (
        <>
          {icon && icon}
          {title && <p>{title}</p>}
        </>
      )}
    </Wrapper>
  )
}

export default Link
