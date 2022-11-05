import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from 'react-redux';

import Root from "pages/Root"
import Error from "pages/Error"
import State from "components/State"
import Effect from "components/Effect"
import { store } from "redux/store"
import Redux from "components/Redux/Redux"

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
        path: "/redux",
        element: <Redux />
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
