/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo } from "react";
import { units } from "../Constants";
import { useDispatch, useSelector } from "react-redux";
import {
    setProducts,
    updateQuantity,
    updateUnit,
} from "../features/product/productSlice";
import classNames from "classnames";
import { buttonVariants } from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { ApiOrderPageResp, IProduct } from "../types";
import { loadOrderPageResp } from "../graphql/resolvers";

const OrderPage = () => {
    const { data, isLoading, error } = useQuery<ApiOrderPageResp>(
        "Orders",
        loadOrderPageResp,
    );
    const products = useSelector((state: any) => state.product.value.products);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (data?.getAllProducts) {
            const productResponse = data.getAllProducts.map((product) => ({
                id: product.id,
                category: product.category.name,
                name: product.name,
                price: product.price,
                quantity: product.quantity,
                unit: product.unit,
            }));

            dispatch(setProducts({ products: productResponse }));
        }
    }, [data, dispatch]);

    const categoriesMap = useMemo(() => {
        const map = new Map<string, IProduct[]>();
        products?.forEach((product: IProduct) => {
            if (!map.get(product.category)) {
                map.set(product.category, []);
            }
            map.get(product.category)?.push(product);
        });
        return map;
    }, [products]);

    if (error) {
        return <div>Error</div>;
    }

    return (
        <div className="grid grid-cols-1 rounded-xl gap-4">
            {isLoading ? (
                <div className="flex flex-items justify-center">
                    <button
                        disabled
                        type="button"
                        className="text-white w-fit bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:ring-neutral-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 inline-flex items-center"
                    >
                        <Spinner />
                        Loading...
                    </button>
                </div>
            ) : (
                <>
                    <div className="h-[80vh] overflow-y-auto">
                        {Array.from(categoriesMap.entries()).map(
                            ([category, products]) => (
                                <CategorySection
                                    key={category}
                                    category={category}
                                    products={products}
                                />
                            ),
                        )}
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            data-ripple-light="true"
                            className={classNames(
                                buttonVariants({ variant: "primary" }),
                                "rounded-full w-fit py-2 px-10 bg-neutral-700 dark:text-white hover:bg-neutral-800",
                            )}
                            type="button"
                            onClick={() => navigate("/cart")}
                        >
                            Confirm
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

interface SpinnerProps {
    className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
    className = "w-4 h-4 text-white",
}) => {
    return (
        <svg
            aria-hidden="true"
            className={`inline me-3 animate-spin ${className}`}
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
            />
            <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
            />
        </svg>
    );
};

const CategorySection = ({
    category,
    products,
}: {
    category: string;
    products: IProduct[];
}) => {
    return (
        <div className="grid grid-cols-1 gap-2">
            <h1
                id={category.toUpperCase()}
                className="h-16 text-2xl font-bold flex justify-center items-center"
            >
                {category}
            </h1>
            <div className="grid grid-cols-1 gap-6 w-full sm:w-4/5 p-8 mx-auto">
                <div className="grid grid-cols-2 text-md text-gray-400 font-semibold">
                    <h1>Name</h1>
                    <div className="grid grid-cols-2">
                        <h1>Quantity</h1>
                        <h1>Unit</h1>
                    </div>
                </div>
                {products.map((product) => (
                    <ProductRow key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

const ProductRow = ({ product }: { product: IProduct }) => {
    const dispatch = useDispatch();

    return (
        <div className="grid grid-cols-2">
            <span className="text-lg font-semibold">{product.name}</span>
            <div className="grid grid-cols-2">
                <input
                    type="text"
                    placeholder="Enter Quantity"
                    value={product.quantity}
                    className="input input-bordered input-info w-full max-w-xs"
                    onChange={(e) => {
                        const quantity = Number.parseFloat(e.target.value);
                        if (!isNaN(quantity)) {
                            dispatch(
                                updateQuantity({ id: product.id, quantity }),
                            );
                        }
                    }}
                />
                <select
                    className="select select-bordered w-full max-w-xs"
                    defaultValue={product.unit}
                    onChange={(e) =>
                        dispatch(
                            updateUnit({
                                id: product.id,
                                unit: e.target.value,
                            }),
                        )
                    }
                >
                    {units.map((unit) => (
                        <option key={unit.label} value={unit.value}>
                            {unit.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default OrderPage;
