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
  return (
    <Image
      alt={alt}
      onError={handleImageError}
      src={error ? 'https://cdn.dribbble.com/userupload/3123398/file/original-e48669b0f3daa95a09d02b7aa83060ce.png?compress=1&resize=1024x768' : src}
      {...rest}
    />
  )
}

export default Avatar
