import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layouts/app";
import { Checkout } from "./pages/app/checkout";
import { Home } from "./pages/app/home";
import { OrderFinished } from "./pages/app/order-finished";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/checkout', element: <Checkout /> },
            { path: '/order-finished', element: <OrderFinished /> }
        ]
    }
])