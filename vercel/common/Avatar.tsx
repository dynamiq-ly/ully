import Image from 'next/image'
import type { FC } from 'react'
import { useState } from 'react'

type Props = {
  src?: string | undefined
  alt: string
}

const Avatar: FC<Props & Record<string, any>> = ({ src = undefined, alt, ...rest }) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img alt={alt} src={src ? src : '/avatar.png'} {...rest} />
}

export default Avatar
