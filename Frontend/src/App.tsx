import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OrderPage from "./pages/OrderPage";
import CartView from "./pages/CartView";
import Layout from "./Layout";

function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "",
                    element: <OrderPage />,
                },
                {
                    path: "cart",
                    element: <CartView />,
                },
            ],
        },
    ]);

    useEffect(() => {
        document.querySelector("html")?.setAttribute("data-theme", "light");
    }, []);

    return <RouterProvider router={routes} />;
}

export default App;
