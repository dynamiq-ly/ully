type Login = {
  email: string
  password: string
  remember: boolean
}

type Register = {
  name: string
  email: string
  password: string
  profile_picture?: string
  role: 'p_u_client' | 'p_u_vendor'
  account_status: boolean
}

type Reset = {
  email: string
}

type Password = {
  email: string
  password: string
  password_confirmation: string
  token: string
}

type User = {
  id: number
  name: string
  email: string
  email_verified_at: string
  role: 'p_u_client' | 'p_u_vendor' | 'p_u_admin'
  created_at: string
  updated_at: string
}
