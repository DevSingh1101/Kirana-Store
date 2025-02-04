/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { IProducts, productsArr, units } from "../Constants";
import { useDispatch, useSelector } from "react-redux";
import {
    setProducts,
    updateQuantity,
    updateUnit,
} from "../features/product/productSlice";
import classNames from "classnames";
import { buttonVariants } from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
    const products = useSelector((state: any) => state.product.value.products);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const categoriesMap = new Map<string, IProducts[]>();
    products?.forEach((product: IProducts) => {
        const category = product.category;
        let catProducts = categoriesMap.get(category);
        if (catProducts === undefined) {
            catProducts = [];
        }
        catProducts.push(product);
        categoriesMap.set(category, catProducts);
    });

    useEffect(() => {
        const dummyProducts = productsArr;
        dispatch(
            setProducts({
                products: dummyProducts,
            }),
        );
    }, []);

    function handleInputChange(id: number, quant: string) {
        const quantity = Number.parseFloat(quant);
        if (!isNaN(quantity)) {
            dispatch(
                updateQuantity({
                    id: id,
                    quantity: quantity,
                }),
            );
        }
    }

    function handleUnitChange(id: number, unit: string) {
        dispatch(
            updateUnit({
                id: id,
                unit: unit,
            }),
        );
    }

    function handleBtnClick() {
        navigate("/cart");
    }

    return (
        <div className="grid grid-cols-1 rounded-xl gap-4">
            <div className="h-[80vh] overflow-y-auto">
                {Array.from(categoriesMap.entries()).map(([key, value]) => (
                    <div className="grid grid-cols-1 gap-2" key={key}>
                        <h1
                            id={key.toUpperCase()}
                            className="h-16 text-2xl font-bold flex justify-center items-center"
                        >
                            {key}
                        </h1>
                        <div className="grid grid-cols-1 gap-6 w-full sm:w-4/5 p-8 mx-auto">
                            <div className="grid grid-cols-2 text-md text-gray-400 font-semibold">
                                <h1>{"Name"}</h1>
                                <div className="grid grid-cols-2">
                                    <h1>{"Quantity"}</h1>
                                    <h1>{"Unit"}</h1>
                                </div>
                            </div>
                            {value.map((product) => {
                                return (
                                    <div
                                        key={product.id}
                                        className="grid grid-cols-2"
                                    >
                                        <span className="text-lg font-semibold">
                                            {product.name}
                                        </span>
                                        <div className="grid grid-cols-2">
                                            <input
                                                type="text"
                                                placeholder="Enter Quantity"
                                                value={product.quantity}
                                                className="input input-bordered input-info w-full max-w-xs"
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        product.id,
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                            <select
                                                className="select select-bordered w-full max-w-xs"
                                                onChange={(e) =>
                                                    handleUnitChange(
                                                        product.id,
                                                        e.target.value,
                                                    )
                                                }
                                                defaultValue={product.unit}
                                            >
                                                {units.map((unit) => (
                                                    <option
                                                        value={unit.value}
                                                        key={unit.label}
                                                        selected={
                                                            unit.value ===
                                                            product.unit
                                                                ? true
                                                                : false
                                                        }
                                                    >
                                                        {unit.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center">
                <button
                    data-ripple-light="true"
                    className={classNames(
                        buttonVariants({
                            variant: "secondary",
                        }),
                        "rounded-full w-fit py-2 px-10",
                        "dark:bg-blue-500 dark:text-white dark:hover:bg-blue-600 group",
                    )}
                    type="button"
                    onClick={handleBtnClick}
                >
                    Confirm
                </button>
            </div>
        </div>
    );
};

export default OrderPage;
