import AppBarNav from "../Components/AppBarNav";
import { IProducts, categories, categoryValueMap } from "../Constants/Enum";
import { useContext, useEffect } from "react";
import "./OrderPage.css";
import { ShopContext } from "../Context/ShopContext";
import { Category } from "@mui/icons-material";
import CategoryViewer from "../Components/CategoryViewer";

const OrderPage = () => {
    const { products } = useContext(ShopContext);

    const categoriesMap = new Map<string, IProducts[]>();

    products.forEach((product) => {
        const category = product.category;
        var catProducts = categoriesMap.get(category);

        if (catProducts === undefined) {
            catProducts = [];
        }

        catProducts.push(product);
        categoriesMap.set(category, catProducts);
    });

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
                {Array.from(categoriesMap.entries()).map(
                    ([category, products]) => {
                        return (
                            <CategoryViewer
                                categoryName={category}
                                products={products}
                            />
                        );
                    }
                )}
            </div>
        </div>
    );
};

export default OrderPage;
