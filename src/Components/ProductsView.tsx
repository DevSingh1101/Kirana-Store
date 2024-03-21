import { MenuItem, TextField } from "@mui/material";
import { IProducts, units } from "../Constants/Enum";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

interface ProductsViewProps {
    products: IProducts[];
    visible: boolean;
    categoryIndex: number;
}

const ProductsView = ({
    products,
    visible,
    categoryIndex,
}: ProductsViewProps) => {
    const display = visible ? "block" : "none";

    const { changeQuantity, changeUnit } = useContext(ShopContext);

    const handleQuantityChange = (
        event: any,
        categoryIndex: number,
        productIndex: number
    ) => {
        const newQuantity = parseFloat(event.target.value);
        changeQuantity(categoryIndex, productIndex, newQuantity);
    };

    const handleUnitChange = (
        event: any,
        categoryIndex: number,
        productIndex: number
    ) => {
        const newUnit = event.target.value;
        changeUnit(categoryIndex, productIndex, newUnit);
    };

    const handleClearZeroQuantity = (event: any) => {
        event.target.value =
            parseInt(event.target.value) === 0 ? "" : event.target.value;
    };

    const productDisplay = (index: number, product: IProducts) => {
        return (
            <div
                key={index}
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
                        onChange={(e) =>
                            handleQuantityChange(e, categoryIndex, index)
                        }
                    />
                    <TextField
                        select
                        label="Units"
                        defaultValue={product.unit}
                        onChange={(e) =>
                            handleUnitChange(e, categoryIndex, index)
                        }
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
            {products.map((product, index) => {
                return productDisplay(index, product);
            })}
        </div>
    );
};

export default ProductsView;
