import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../redux/store";
import { ApiOrderPageResp } from "../types";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { loadOrderPageResp } from "../graphql/resolvers";
import { setProducts } from "../features/product/productSlice";
import ProductForm from "../components/ProductForm";
import Loader from "../components/Loader";
import OrderTable from "../components/OrderTable";
import { ColDef } from "ag-grid-community";
import CategoryForm from "../components/CategoryForm";
import PlusIcon from "../components/PlusIcon";
import SearchIcon from "../components/SearchIcon";

const AdminView = () => {
    const [productFormToggle, setProductFormToggle] = useState(false);
    const [categoryFormToggle, setCategoryFormToggle] = useState(false);

    const { data, isLoading, isError, refetch } = useQuery<ApiOrderPageResp>(
        "Orders",
        loadOrderPageResp,
    );

    const products = useSelector(
        (state: IRootState) => state.product.value.products,
    );
    const dispatch = useDispatch();

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

    const handleProductFormSwitch = () => {
        setProductFormToggle(!productFormToggle);
        refetch();
    };

    const handleCategoryFormSwitch = () => {
        setCategoryFormToggle(!categoryFormToggle);
    };

    const columnDefs: ColDef[] = [
        {
            field: "category",
            flex: 2,
        },
        {
            field: "name",
            flex: 4,
        },
        {
            field: "price",
            sortable: true,
            flex: 1,
        },
        {
            field: "unit",
            flex: 1,
        },
        {
            field: "actions",
            flex: 1,
        },
    ];

    if (isError) {
        return (
            <div className="h-[90vh] w-full flex flex-col items-center justify-center">
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

    return (
        <div className="h-[90vh] grid grid-cols-1 align-middle">
            {isLoading ? (
                <Loader />
            ) : (
                <section className="p-3 sm:py-5 antialiased">
                    <div className="mx-auto px-4 lg:px-12">
                        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg">
                            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 border-b">
                                <div className="w-full md:w-1/2">
                                    <form className="flex items-center">
                                        <label
                                            htmlFor="simple-search"
                                            className="sr-only"
                                        >
                                            Search
                                        </label>
                                        <div className="relative w-full">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <SearchIcon />
                                            </div>
                                            <input
                                                type="text"
                                                id="simple-search"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="Search"
                                                required
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                                        <button
                                            type="button"
                                            className="flex items-center justify-center text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                            onClick={handleCategoryFormSwitch}
                                        >
                                            <PlusIcon />
                                            Add Category
                                        </button>
                                    </div>
                                    <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                                        <button
                                            type="button"
                                            className="flex items-center justify-center text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                            onClick={handleProductFormSwitch}
                                        >
                                            <PlusIcon />
                                            Add Product
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {productFormToggle && (
                                <div className="fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-lg z-10">
                                    <ProductForm
                                        closeProductForm={
                                            handleProductFormSwitch
                                        }
                                    />
                                </div>
                            )}
                            {categoryFormToggle && (
                                <div className="fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-lg z-10">
                                    <CategoryForm
                                        closeCategoryForm={
                                            handleCategoryFormSwitch
                                        }
                                    />
                                </div>
                            )}
                            <OrderTable
                                products={products}
                                columns={columnDefs}
                            />
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default AdminView;
