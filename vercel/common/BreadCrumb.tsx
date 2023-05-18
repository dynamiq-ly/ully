import { useRouter } from 'next/router'

import { BreadCrumbContainer, BreadCrumbText } from '@/common/ui/breadcrumb.element'
import { TbTerminal } from 'react-icons/tb'

const BreadCrumb = () => {
  const { pathname } = useRouter()

  return (
    <BreadCrumbContainer>
      {pathname.split('/').map((el: string, key: number) => (
        <BreadCrumbText key={key}>
          {el}
          {key - 1 !== pathname.split.length && <TbTerminal size={18} />}
        </BreadCrumbText>
      ))}
    </BreadCrumbContainer>
  )
}

export default BreadCrumb
