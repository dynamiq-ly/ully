import type { FC } from 'react'
import { HiOutlineLogout } from 'react-icons/hi'

import Avatar from '@/common/Avatar'

import { LogoutButton } from '@/shared/console-logout.module'

const Consolelogout: FC = () => {
  return (
    <LogoutButton>
      <Avatar src='' alt='image' width={36} height={36} style={{ borderRadius: '100%' }} />
      <div>
        <p>walaa sebii</p>
        <p>walaa@ully.com</p>
      </div>
      <HiOutlineLogout size={24} />
    </LogoutButton>
  )
}

export default Consolelogout
