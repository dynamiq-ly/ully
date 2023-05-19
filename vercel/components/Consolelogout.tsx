import type { FC } from 'react'
import { HiOutlineLogout } from 'react-icons/hi'

import Avatar from '@/common/Avatar'

import { LogoutButton } from '@/shared/console-logout.module'
import { __auth } from '@/context/AuthProvider'

const Consolelogout: FC = () => {
  const { logout, currentUser } = __auth()

  return (
    <LogoutButton onClick={() => logout()}>
      <Avatar src='' alt='image' width={36} height={36} style={{ borderRadius: '100%' }} />
      <div>
        <p>{currentUser?.name}</p>
        <p>{currentUser?.email}</p>
      </div>
      <HiOutlineLogout size={24} />
    </LogoutButton>
  )
}

export default Consolelogout
