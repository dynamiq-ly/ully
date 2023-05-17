type Login = {
  email: string
  password: string
  remember: boolean
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
  created_at: string
  updated_at: string
}
