import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "pages/Root";
import Error from "pages/Error";
import State from "components/State";
import Effect from "components/Effect";
import CodeSplitting from "components/CodeSplitting";
import Home from "components/CodeSplitting/Home";
import Threejs from "components/CodeSplitting/Threejs";
import Lodash from "components/CodeSplitting/Lodash";

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
        path: "/codeSplitting",
        element: <CodeSplitting />,
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "threejs",
            element: <Threejs />,
          },
          {
            path: "lodash",
            element: <Lodash />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
  <Suspense fallback={<p>Loading</p>}>
    <RouterProvider router={router} />
  </Suspense>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
