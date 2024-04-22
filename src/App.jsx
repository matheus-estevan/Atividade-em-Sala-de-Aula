import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Howls from "./pages/Howls";

const router = createBrowserRouter([
  {
   path: "/",
   element: <Howls />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
