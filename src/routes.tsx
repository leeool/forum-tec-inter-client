import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Home from "./pages/Home"
import Sub from "./pages/Sub/Sub"
import Congrats from "./pages/Congrats/Congrats"

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
      }
    ]
  }
])

export default router
