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
import { IRootState } from "../redux/store";
import Loader from "../components/Loader";

const OrderPage = () => {
    const { data, isLoading, isError } = useQuery<ApiOrderPageResp>(
        "Orders",
        loadOrderPageResp,
    );
    const products = useSelector(
        (state: IRootState) => state.product.value.products,
    );
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

    if (isError) {
        return (
            <div className="h-[90vh] w-[100vw] flex flex-col items-center justify-center">
                <div role="alert">
                    <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                        ERROR
                    </div>
                    <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                        <p>Contact site admin to resolve this</p>
                    </div>
                </div>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="h-[90vh] w-[100vw] flex flex-col items-center justify-center">
                <Loader />
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 rounded-xl gap-4">
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
        </div>
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
