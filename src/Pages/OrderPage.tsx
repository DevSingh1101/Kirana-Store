import { Button } from "@mui/material";
import AppBarNav from "../Components/OrderPageComp/AppBarNav";
import { IProducts, categories } from "../Constants/Enum";
import CategoryViewer from "../Components/OrderPageComp/CategoryViewer";
import { useContext } from "react";
import "./OrderPage.css";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const OrderPage = () => {
    const { state } = useContext(ShopContext);

    const navigate = useNavigate();

    const handleOrderConfirmation = () => {
        navigate("/confirm");
    };

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "0.75rem",
                paddingBottom: "0.5rem",
            }}
        >
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    overflow: "hidden",
                    height: "10%",
                }}
            >
                <AppBarNav key={1} categories={categories} />
            </div>
            <div
                className="MediaContainer"
                style={{
                    backgroundColor: "#0099ff",
                    padding: "0rem 0.5rem",
                    width: "800px",
                    height: "800px",
                    overflow: "auto",
                    maxWidth: "100%",
                    scrollbarColor: "#fff #2E67F8",
                    borderTopLeftRadius: "1.5rem",
                    borderBottomLeftRadius: "1.5rem",
                }}
            >
                {state.map(
                    (
                        category: { name: string; products: IProducts[] },
                        index: number
                    ) => {
                        return (
                            <CategoryViewer
                                categoryName={category.name}
                                products={category.products}
                                index={index}
                            />
                        );
                    }
                )}
            </div>
            <Button
                title="Confirm Order"
                sx={{
                    padding: "0.75rem",
                    width: "max-content",
                    borderRadius: "0.75rem",
                    backgroundColor: "#0099ff",
                    color: "#fff",
                    fontWeight: "bolder",
                    ":hover": { backgroundColor: "#0033cc", scale: "1.1" },
                }}
                onClick={() => {
                    handleOrderConfirmation();
                }}
            >
                Confirm Order
            </Button>
        </div>
    );
};

export default OrderPage;
