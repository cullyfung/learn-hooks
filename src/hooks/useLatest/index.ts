import { useRef } from 'react'

const useLatest = <S>(initialValue: S) => {
  const latest = useRef(initialValue)
  return latest
}

export default useLatest
