import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Howls from "./pages/Howls";
import Spirted from "./pages/Spirted";

const router = createBrowserRouter([
  {
   path: "/",
   element: <Howls />
  },
  {
    path: "/chihiro",
    element: <Spirted />
   },

])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
