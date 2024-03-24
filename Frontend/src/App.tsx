import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderPage from "./Pages/OrderPage";
import ConfirmOrderPage from "./Pages/ConfirmOrderPage";
import ShopProvider from "./Context/ShopContext";
import { CartProvider } from "./Context/CartContext";

function App() {
    return (
        <div className="App">
            <ShopProvider>
                <CartProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<OrderPage />} />
                            <Route
                                path="/confirm"
                                element={<ConfirmOrderPage />}
                            />
                        </Routes>
                    </BrowserRouter>
                </CartProvider>
            </ShopProvider>
        </div>
    );
}

export default App;
