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
  role: 'P_U_Client' | 'P_U_Vendor'
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
  role: 'P_U_Client' | 'P_U_Vendor' | 'P_U_Admin'
  created_at: string
  updated_at: string
}
