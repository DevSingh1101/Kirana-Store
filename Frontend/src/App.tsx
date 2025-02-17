import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OrderPage from "./pages/OrderPage";
import CartView from "./pages/CartView";
import Layout from "./Layout";
import AdminView from "./pages/Dashboard";
import Login from "./pages/Login";

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
        {
            path: "/login",
            element: <Layout />,
            children: [
                {
                    path: "",
                    element: <Login />,
                },
            ],
        },
        {
            path: "/dashboard",
            element: <Layout />,
            children: [
                {
                    path: "",
                    element: <AdminView />,
                },
            ],
        },
    ]);

    return <RouterProvider router={routes} />;
}

export default App;
