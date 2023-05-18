import { useRouter } from 'next/router'

import { BreadCrumbContainer, BreadCrumbText, BreadCrumbTime, BreadCrumbWrapper } from '@/common/ui/breadcrumb.element'
import { TbCalendarTime, TbTerminal } from 'react-icons/tb'

const BreadCrumb = () => {
  const { pathname } = useRouter()

  return (
    <BreadCrumbWrapper>
      <BreadCrumbContainer>
        {pathname.split('/').map((el: string, key: number) => (
          <BreadCrumbText key={key}>
            {el}
            {key - 1 !== pathname.split.length && <TbTerminal size={18} />}
          </BreadCrumbText>
        ))}
      </BreadCrumbContainer>
      <BreadCrumbTime>
        <TbCalendarTime size={24} />
        <p>{new Date().toDateString()}</p>
      </BreadCrumbTime>
    </BreadCrumbWrapper>
  )
}

export default BreadCrumb
