import { IconButton, Typography } from "@mui/material";
import ProductsView from "./ProductsView";
import { IProducts } from "../Constants/Enum";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";

interface CategoryViewerProps {
    categoryName: string;
    products: IProducts[];
}

const CategoryViewer = ({ categoryName, products }: CategoryViewerProps) => {
    const [expanded, setExpanded] = useState(true);

    const handleExpansion = async () => {
        setTimeout(() => {
            setExpanded(!expanded);
        }, 250);
    };

    return (
        <div
            style={{ color: "#fff", padding: "1rem", width: "100%" }}
            id={categoryName}
        >
            <Typography
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "1.5rem",
                    fontWeight: "bolder",
                    borderRadius: "1rem",
                    padding: "1rem",
                    backgroundColor: "#0033cc",
                }}
            >
                <div>{categoryName}</div>
                <IconButton
                    sx={{
                        backgroundColor: "#fff",
                        height: "2.5rem",
                        width: "2.5rem",
                        color: "black",
                        borderRadius: "2.5rem",
                    }}
                    onClick={handleExpansion}
                >
                    {expanded ? (
                        <KeyboardControlKeyIcon />
                    ) : (
                        <KeyboardArrowDownIcon />
                    )}
                </IconButton>
            </Typography>
            <ProductsView products={products} visible={expanded} />
        </div>
    );
};

export default CategoryViewer;
