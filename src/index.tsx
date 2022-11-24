import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "pages/Root"
import Error from "pages/Error"
import State from "components/State"
import Effect from "components/Effect"
import ContextCounter from "components/Context"
import ContextMultipleCounter from "components/Context/MultipleCounters/ContextMultipleCounter"
import MultipleCountersProvider from "contexts/contextMultipleCounters"
import CounterProvider from "contexts/contextSolution"
// import ContextCounterSolution from "components/Context/ContextSolution"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/useState",
        element: <State />,
      },
      {
        path: "/useEffect",
        element: <Effect />,
      },
      {
        path: "/context",
        element: <ContextCounter />,
      },
      {
        path: "/contextCounters",
        element: <ContextMultipleCounter />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  // <React.StrictMode>
  <MultipleCountersProvider>
    <CounterProvider>
      <RouterProvider router={router} />
    </CounterProvider>
  </MultipleCountersProvider>
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
