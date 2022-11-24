import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"

interface ContextCounters {
  counter1: number
  counter2: number
  setCounter1: Dispatch<SetStateAction<number>>
  setCounter2: Dispatch<SetStateAction<number>>
}

const defaultContextValues: ContextCounters = {
  counter1: 0,
  counter2: 0,
  setCounter1: () => {},
  setCounter2: () => {},
}

export const MultipleCountersContext =
  createContext<ContextCounters>(defaultContextValues)

const MultipleCountersProvider = ({ children }: { children: ReactNode }) => {
  const [counter1, setCounter1] = useState<number>(
    defaultContextValues.counter1
  )
  const [counter2, setCounter2] = useState<number>(
    defaultContextValues.counter1
  )

  return (
    <MultipleCountersContext.Provider
      value={{ counter1, counter2, setCounter1, setCounter2 }}
    >
      {children}
    </MultipleCountersContext.Provider>
  )
}

export default MultipleCountersProvider
