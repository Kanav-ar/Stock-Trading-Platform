import { RouterProvider } from "react-router"
import Playground from "./pages/playground"
import { router } from "./router/Router"

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
