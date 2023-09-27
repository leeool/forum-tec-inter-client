import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Home from "./pages/Home"
import Sub from "./pages/Sub/Sub"
import Congrats from "./pages/Congrats/Congrats"
import React from "react"
const Gallery = React.lazy(() => import("./pages/Gallery/Gallery"))

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/inscricao",
        Component: Sub,
      },
      {
        path: "/voucher",
        Component: Congrats
      },
      {
        path: "/galeria",
        element: <React.Suspense><Gallery /></React.Suspense>,
      }
    ]
  }
])

export default router
