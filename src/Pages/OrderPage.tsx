import AppBarNav from "../Components/AppBarNav";
import { IProducts, categories } from "../Constants/Enum";
import CategoryViewer from "../Components/CategoryViewer";
import { useContext } from "react";
import "./OrderPage.css";
import { ShopContext } from "../Context/ShopContext";

const OrderPage = () => {
    const { state } = useContext(ShopContext);

    return (
        <div
            style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
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
                <AppBarNav
                    key={1}
                    categories={categories}
                    cartVisibility={true}
                />
            </div>
            <div
                className="MediaContainer"
                style={{
                    backgroundColor: "#0099ff",
                    padding: "0rem 0.5rem",
                    width: "100%",
                    height: "90%",
                    overflow: "auto",
                    maxWidth: "800px",
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
        </div>
    );
};

export default OrderPage;
