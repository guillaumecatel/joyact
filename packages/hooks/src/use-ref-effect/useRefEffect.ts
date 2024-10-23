import { DependencyList, MutableRefObject, RefCallback, useDebugValue, useState } from 'react'
import { useIsomorphicLayoutEffect } from '../'

const noop: (...args: unknown[]) => unknown = () => {}

export const useRefEffect = <T>(
  effect: (element: T) => void | (() => void),
  dependencies: DependencyList[] = [],
): RefCallback<T> & MutableRefObject<T | null> => {
  const internalRef = useState(() => {
    let currentValue = null as T | null
    let cleanupPreviousEffect = noop as () => void
    let currentDeps: DependencyList[] | undefined

    const setRefValue = (newElement: T | null) => {
      if (
        internalRef.dependencies !== currentDeps
        || currentValue !== newElement
      ) {
        currentValue = newElement
        currentDeps = internalRef.dependencies
        internalRef.cleanup()
        if (newElement) {
          cleanupPreviousEffect = internalRef.effect(newElement) || noop
        }
      }
    }
    return {
      cleanup: () => {
        cleanupPreviousEffect()
        cleanupPreviousEffect = noop
      },
      ref: Object.defineProperty(setRefValue, 'current', {
        get: () => currentValue,
        set: setRefValue,
      }),
    } as {
      cleanup: () => void
      ref: React.RefCallback<T> & MutableRefObject<T | null>
      effect: typeof effect
      dependencies: typeof dependencies
    }
  })[0]

  if (process.env.NODE_ENV !== 'production') {
    useDebugValue(internalRef.ref.current)
  }

  internalRef.effect = effect

  useIsomorphicLayoutEffect(
    () => {
      internalRef.ref(internalRef.ref.current)
      return () => {
        if (internalRef.dependencies === dependencies) {
          internalRef.cleanup()
          internalRef.dependencies = []
        }
      }
    },
    (internalRef.dependencies = dependencies),
  )

  return internalRef.ref
}
