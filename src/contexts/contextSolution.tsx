import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react"

interface ContextCounter {
  counter: number
  setCounter: Dispatch<SetStateAction<number>>
}

const defaultContextValues: ContextCounter = {
  counter: 0,
  setCounter: () => {},
}

export const CounterContext =
  createContext<ContextCounter>(defaultContextValues)

const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [counter, setCounter] = useState<number>(defaultContextValues.counter)

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  )
}

export default CounterProvider
