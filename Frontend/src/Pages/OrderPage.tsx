/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "react-query";
import classNames from "classnames";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../redux/store";
import {
    setProducts,
    updateQuantity,
    updateUnit,
} from "../features/product/productSlice";
import { groupBy } from "lodash";
import { units } from "../Constants";
import { ApiHomePageResp, IProduct } from "../types";
import { loadHomePageResp } from "../graphql/resolvers";
import Loader from "../components/Loader";
import { buttonVariants } from "../components/Button";
import { setCartItems } from "../features/cart/cartSlice";

const OrderPage = () => {
    // Dispatch, navigate
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // State
    const products = useSelector(
        (state: IRootState) => state.product.value.products,
    );

    // API call
    const { data, isLoading, isError } = useQuery<ApiHomePageResp>(
        "Homepage",
        loadHomePageResp,
    );

    useEffect(() => {
        if (data?.getAllProducts && products.length === 0) {
            const productResponse = data.getAllProducts.map((product) => ({
                id: product.id,
                category: product.category.name,
                name: product.name,
                price: product.price,
                quantity: 0,
                unit: product.unit,
            }));

            dispatch(setProducts({ products: productResponse }));
        }
    }, [data, dispatch, products.length]);

    const categoriesMap = useMemo(() => {
        return groupBy(products, "category");
    }, [products]);

    const handleConfirmClick = () => {
        const cartItems = products.filter((product) => {
            return product.quantity > 0;
        });

        dispatch(
            setCartItems({
                products: cartItems,
            }),
        );

        navigate("/cart");
    };

    if (isError) {
        return (
            <div className="flex flex-col items-center justify-center h-full">
                <div role="alert">
                    <div className="bg-red-500 text-white font-bold rounded-t-xl px-4 py-2">
                        ERROR
                    </div>
                    <div className="border border-t-0 border-red-700 rounded-b-xl bg-red-100 px-10 py-3 text-red-700">
                        <p>Contact site admin to resolve this</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="h-full grid grid-cols-1 align-middle">
            {isLoading ? (
                <Loader />
            ) : (
                <div className="flex flex-col gap-4 items-center">
                    <div className="h-[75vh] overflow-y-auto">
                        {Object.entries(categoriesMap).map(
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
                                "rounded-full w-fit py-2 px-8 bg-neutral-700 text-white hover:bg-neutral-800 my-auto",
                            )}
                            type="button"
                            onClick={handleConfirmClick}
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            )}
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
        <div className="grid grid-cols-1 gap-2 border border-gray-500">
            <h1
                id={category.toUpperCase()}
                className="h-16 text-xl sm:text-2xl font-bold flex justify-center items-center bg-gradient-to-r text-black"
            >
                {category}
            </h1>
            <div className="grid grid-cols-1 gap-6 w-full sm:w-4/5 p-8 mx-auto">
                <div className="grid grid-cols-2 text-sm sm:text-md text-black font-semibold">
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
        <div className="grid grid-cols-2 align-middle items-center">
            <span className="text-md sm:text-lg font-semibold text-gray-500">
                {product.name}
            </span>
            <div className="grid grid-cols-2 gap-2">
                <input
                    type="text"
                    placeholder="Enter Quantity"
                    value={product.quantity}
                    className="input input-bordered input-info w-full max-w-xs bg-transparent"
                    onWheelCapture={(e) => {
                        e.currentTarget.blur();
                    }}
                    onChange={(e) => {
                        const quantity = Number.parseFloat(e.target.value);
                        dispatch(
                            updateQuantity({
                                id: product.id,
                                quantity: isNaN(quantity) ? "" : quantity,
                            }),
                        );
                    }}
                />
                <select
                    className="select select-bordered w-full max-w-24 bg-transparent"
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
