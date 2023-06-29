import { BasicTarget } from '../../utils/domTarget'
import useBoolean from '../useBoolean'
import useEventListener from '../useEventListener'

export interface Options {
  onEnter?: () => void
  onLeave?: () => void
  onChange?: (isHovering: boolean) => void
}

function useHover(target: BasicTarget, options?: Options): boolean {
  const { onEnter, onLeave, onChange } = options || {}

  const [state, { setTrue, setFalse }] = useBoolean(false)

  useEventListener(
    'mouseenter',
    () => {
      onEnter?.()
      setTrue()
      onChange?.(true)
    },
    {
      target
    }
  )

  useEventListener(
    'mouseleave',
    () => {
      onLeave?.()
      setFalse()
      onChange?.(false)
    },
    {
      target
    }
  )

  return state
}

export default useHover
