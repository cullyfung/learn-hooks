import { useEffect, useRef } from 'react'

const useUnmountedRef = () => {
  const unmountRef = useRef(false)

  useEffect(() => {
    unmountRef.current = false

    return () => {
      unmountRef.current = true
    }
  }, [])

  return unmountRef
}

export default useUnmountedRef
