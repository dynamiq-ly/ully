import axios, { AxiosInstance } from 'axios'

export const __: AxiosInstance = axios.create({
  baseURL: process.env.APP_SERVER,
  withCredentials: true,
})
