import { IProducts } from "../../Constants/Enum";
import ProductsView from "../ConfirmationComp/ProductsView";

interface CategoryViewerProps {
    categoryName: string;
    products: IProducts[];
    index: number;
}
const CategoryViewer = ({
    categoryName,
    products,
    index,
}: CategoryViewerProps) => {
    return (
        <div key={index} id={categoryName}>
            {products.map((product) => {
                return (
                    <ProductsView
                        product={product}
                        categoryName={categoryName}
                        categoryIndex={index}
                    />
                );
            })}
        </div>
    );
};

export default CategoryViewer;
