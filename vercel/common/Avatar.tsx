import Image from 'next/image'
import type { FC, ReactEventHandler } from 'react'
import { useEffect, useState } from 'react'

type Props = {
  src: string
  alt: string
}

const Avatar: FC<Props & Record<string, any>> = ({ src, alt, ...rest }) => {
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(false)
  }, [src])

  const handleImageError: React.EventHandler<React.SyntheticEvent<HTMLImageElement, Event>> = () => {
    setError(true)
  }
  return <Image alt={alt} onError={handleImageError} src={error ? '/avatar.png' : src} {...rest} />
}

export default Avatar
