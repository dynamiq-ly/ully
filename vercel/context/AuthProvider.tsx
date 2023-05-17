import { useRouter } from 'next/router'
import type { FC, ReactElement } from 'react'
import { useState, useEffect, useContext, createContext } from 'react'

import { __ } from '@/hooks/query'

type Props = {
  children: ReactElement
}

type AuthContext = {
  currentUser: User | null
  isSubscribed: boolean
  isLoading: boolean
  login: (F: Login) => void
  resetEmail: (F: Reset) => void
  resetPsswd: (F: Password) => void
  logout: () => void
}

const initialContext: AuthContext = {
  currentUser: null,

  isSubscribed: false,
  isLoading: false,

  login: () => {},
  resetEmail: () => {},
  resetPsswd: () => {},
  logout: () => {},
}

const UserContext = createContext<AuthContext>(initialContext)
export const __auth = () => useContext(UserContext)

const AuthProvider: FC<Props> = ({ children }) => {
  const { push } = useRouter()

  const keyLoad: string = 'isSubscribed'
  const [currentUser, setCurrentUser] = useState<User | null>(initialContext.currentUser)
  const [isLoading, setIsLoading] = useState<boolean>(initialContext.isLoading)
  const [isSubscribed, setIsSubscribed] = useState<boolean>((typeof window !== 'undefined' && localStorage.getItem(keyLoad) === 'true') || initialContext.isSubscribed)

  const csrf = () => __.get('/sanctum/csrf-cookie')

  /* login function */
  const login = async (F: Login) => {
    setIsLoading(true)
    await csrf()

    const { data, status } = await __.post('/login', F)

    if (status === 204) {
      setIsSubscribed(false)
      localStorage.setItem('auth', JSON.stringify(data))
      user()
      localStorage.setItem(keyLoad, 'true')
      push('/console')
    }
    setIsLoading(false)
  }

  /* reset mail function */
  const resetEmail = async (F: Reset) => {
    await csrf()

    const { status } = await __.post('/forgot-password', F)

    if (status === 200) {
      push('/auth/reset')
    }
  }

  /* reset password function */
  const resetPsswd = async (F: Password) => {
    await csrf()

    const { status } = await __.post('/reset-password', F)

    if (status === 200) {
      push('/auth/login')
    }
  }

  /* logout function */
  const logout = async () => {
    await csrf()

    const { status } = await __.post('/logout')

    if (status === 204) {
      setIsSubscribed(false)
      localStorage.setItem(keyLoad, `${false}`)
      setCurrentUser(null)
      push('/auth/login')
    }
  }

  /* cuurent user */
  const [AuthStateChange, setAuthStateChange] = useState<boolean>(false)
  const user = async () => {
    await csrf()

    return await __.get('/api/user')
      .then((res) => {
        if (res.status === 200) {
          setCurrentUser(res.data)
          localStorage.setItem(keyLoad, `${true}`)
          localStorage.setItem('auth', JSON.stringify(res.data))
          setIsSubscribed(true)
          setAuthStateChange(true)
        } else {
          localStorage.setItem(keyLoad, `${false}`)
          setAuthStateChange(true)
          setIsSubscribed(false)
          // console.clear()
        }
      })
      .catch(() => {
        setIsSubscribed(false)
        setAuthStateChange(true)
        localStorage.setItem(keyLoad, `${false}`)
        // console.clear()
      })
  }

  useEffect(() => {
    user()
  }, []) // eslint-disable-line

  return <UserContext.Provider value={{ isLoading, currentUser, isSubscribed, ...{ login, resetEmail, resetPsswd, logout } }}>{AuthStateChange ? children : 'loading...'}</UserContext.Provider>
}

export default AuthProvider