import React from 'react'
import type { RootState } from '../../store/store'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useAppSelector((state: RootState) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}