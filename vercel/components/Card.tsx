import type { FC, ReactElement } from 'react'
import { CardContainer, IconBox } from '@/shared/card.module'
import { useRouter } from 'next/router'

type Props = {
  title: string
  path: string
  icon: ReactElement
}

const Card: FC<Props> = ({ title, path, icon }) => {
  const { push } = useRouter()
  const random = Math.floor(Math.random() * randomColors.length)

  return (
    <CardContainer onClick={() => push(path)} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <IconBox bg={randomColors[random].contrast} clx={randomColors[random].color}>
        {icon}
      </IconBox>
      <div>
        <p>{title}</p>
        <p>Click to open {title}.</p>
      </div>
    </CardContainer>
  )
}

export default Card

const randomColors: { color: string; contrast: string }[] = [
  { color: '#0A8FEF', contrast: '#DEF1FF' },
  { color: '#087443', contrast: '#AAF0C4' },
  { color: '#ee0000', contrast: '#FFEBE2' },
  { color: '#8136DC', contrast: '#EADEF9' },
  { color: '#424242', contrast: '#E5E5E5' },
  { color: '#C11574', contrast: '#FCCEEE' },
  { color: '#BC1B06', contrast: '#FFD6AE' },
]
