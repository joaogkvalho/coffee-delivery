import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";

import './global.css'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Coffee Delivery" />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
