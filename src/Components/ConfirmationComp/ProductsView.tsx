import { IProducts } from "../../Constants/Enum";

interface ProductsViewProps {
    product: IProducts;
    categoryName: string;
    categoryIndex: number;
}

const ProductsView = ({
    product,
    categoryName,
    categoryIndex,
}: ProductsViewProps) => {
    if (product.quantity > 0) {
        return (
            <div
                key={product.id}
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                    border: "2px solid red",
                }}
            >
                <p>{product.name}</p>
                <p>{categoryName}</p>
                <p>{product.quantity}</p>
                <p>{product.unit}</p>
            </div>
        );
    } else {
        return <></>;
    }
};

export default ProductsView;
