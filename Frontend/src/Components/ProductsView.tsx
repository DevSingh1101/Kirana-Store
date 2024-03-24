import { MenuItem, TextField } from "@mui/material";
import { IProducts, units } from "../Constants/Enum";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { CartContext } from "../Context/CartContext";

interface ProductsViewProps {
    products: IProducts[];
    visible: boolean;
}

const ProductsView = ({ products, visible }: ProductsViewProps) => {
    const display = visible ? "block" : "none";

    const { changeQuantity, changeUnit } = useContext(ShopContext);
    const { cart, enterProduct, exitProduct } = useContext(CartContext);

    const handleQuantityChange = (event: any, product: IProducts) => {
        const newQuantity = parseFloat(event.target.value);
        changeQuantity(product.id, newQuantity);
        exitProduct(product.id);
        product.quantity = newQuantity;
        enterProduct(product);
    };

    const handleUnitChange = (event: any, product: IProducts) => {
        const newUnit = event.target.value;
        changeUnit(product.id, newUnit);
        // exitProduct(product.id);
        product.unit = newUnit;
        enterProduct(product);
    };

    const handleClearZeroQuantity = (event: any) => {
        event.target.value =
            parseInt(event.target.value) === 0 ? "" : event.target.value;
    };

    const productDisplay = (product: IProducts) => {
        return (
            <div
                key={product.id}
                style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1rem",
                    justifyContent: "end",
                    flexWrap: "wrap",
                }}
            >
                <div
                    style={{
                        width: "30%",
                        wordWrap: "break-word",
                        textAlign: "left",
                    }}
                >
                    {product.name}
                </div>
                <div
                    style={{
                        display: "flex",
                        width: "60%",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "1rem 0",
                    }}
                >
                    <TextField
                        sx={{
                            backgroundColor: "#fff",
                            borderRadius: "5px",
                            width: "60%",
                        }}
                        defaultValue={0}
                        variant="filled"
                        onClick={(e) => handleClearZeroQuantity(e)}
                        onChange={(e) => handleQuantityChange(e, product)}
                    />
                    <TextField
                        select
                        label="Units"
                        defaultValue={product.unit}
                        onChange={(e) => handleUnitChange(e, product)}
                    >
                        {units.map((unit) => {
                            return (
                                <MenuItem key={unit.value} value={unit.value}>
                                    {unit.label}
                                </MenuItem>
                            );
                        })}
                    </TextField>
                </div>
            </div>
        );
    };

    return (
        <div
            style={{
                display: display,
                margin: "0 auto",
            }}
        >
            {products.map((product) => {
                return productDisplay(product);
            })}
        </div>
    );
};

export default ProductsView;
