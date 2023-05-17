import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import type { FC, ReactElement } from 'react'
import { HiChevronRight, HiOutlineFolder } from 'react-icons/hi'

import { CollapsibleContainer, CollapsibleContent, CollapsibleItem, CollapsibleWrapper } from '@/shared/collapsible.module'

interface CollapsibleItemType {
  title: string
  path: string
}

type Props = {
  title: string
  icon?: ReactElement
  defaultOpen?: boolean
  array: CollapsibleItemType[]
}

const Collapsible: FC<Props> = ({ title, icon, defaultOpen, array = [] }) => {
  const { push } = useRouter()

  const [isOpen, setOpen] = useState<boolean>(defaultOpen || false)
  const [isArray, _] = useState<CollapsibleItemType[]>(array)

  const dropDownVariants = {
    open: {
      height: `${40 * isArray.length}px`,
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      height: `0px`,
      transition: {
        type: 'tween',
        staggerChildren: 0.1,
        when: 'afterChildren',
        staggerDirection: -1,
      },
    },
  }

  return (
    <CollapsibleWrapper>
      <CollapsibleContainer onClick={() => setOpen(!isOpen)}>
        {icon ? icon : <HiOutlineFolder size={21} />}
        <p>{title}</p>
        <motion.div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} animate={{ rotate: isOpen ? 90 : 0 }}>
          <HiChevronRight size={18} />
        </motion.div>
      </CollapsibleContainer>

      {isOpen && (
        <CollapsibleContent initial={'closed'} animate={isOpen ? 'open' : 'closed'} variants={{ ...dropDownVariants }}>
          {isArray.map((el: CollapsibleItemType, index) => (
            <CollapsibleItem key={index} variants={{ ...childVariants }} onClick={() => push(el.path)}>
              {el.title}
            </CollapsibleItem>
          ))}
        </CollapsibleContent>
      )}
    </CollapsibleWrapper>
  )
}

const childVariants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}

export default Collapsible
