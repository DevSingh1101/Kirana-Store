import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../redux/store";
import { units } from "../Constants";
import { useCreateProduct } from "../graphql/resolvers";

const ProductForm = ({ closeModalFn }: { closeModalFn: () => void }) => {
    const categories = useSelector(
        (state: IRootState) => state.category.value.categories,
    );

    const createProduct = useCreateProduct();

    const [formData, setFormData] = useState({
        name: "",
        price: 0,
        category: "",
        quantity: 0,
        unit: "Kg",
        description: "",
    });

    const handleFormChange = (
        e: ChangeEvent<
            HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
        >,
        name: string,
    ) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: e.target.value,
        }));
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createProduct.mutate({
            name: formData.name,
            categoryId: formData.category,
            price: formData.price,
            quantity: formData.quantity,
            unit: formData.unit,
        });
        closeModalFn();
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") closeModalFn();
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <section className="w-full bg-white dark:bg-gray-800 rounded-2xl px-4 lg:w-1/2">
            <div className="py-8 px-4 mx-auto lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                    Add a new product
                </h2>
                <form onSubmit={(e) => handleFormSubmit(e)} action="">
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-neutral-400 dark:text-white"
                            >
                                Product Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Type product name"
                                onChange={(e) => handleFormChange(e, "name")}
                            />
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="price"
                                className="block mb-2 text-sm font-medium text-neutral-400 dark:text-white"
                            >
                                Price
                            </label>
                            <input
                                type="number"
                                name="price"
                                id="price"
                                value={formData.price}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Rs2000"
                                onChange={(e) => handleFormChange(e, "price")}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="category"
                                className="block mb-2 text-sm font-medium text-neutral-400 dark:text-white"
                            >
                                Category
                            </label>
                            <select
                                id="category"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                value={formData.category}
                                onChange={(e) =>
                                    handleFormChange(e, "category")
                                }
                            >
                                <option selected>Select category</option>
                                {categories.map((category) => {
                                    return (
                                        <option
                                            key={category.id}
                                            value={category.id}
                                        >
                                            {category.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>

                        <div className="w-full">
                            <label
                                htmlFor="quantity"
                                className="block mb-2 text-sm font-medium text-neutral-400 dark:text-white"
                            >
                                Minimum Quantity
                            </label>
                            <input
                                type="number"
                                name="quantity"
                                id="quantity"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Minimum Quantity"
                                value={formData.quantity}
                                onChange={(e) =>
                                    handleFormChange(e, "quantity")
                                }
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="unit"
                                className="block mb-2 text-sm font-medium text-neutral-400 dark:text-white"
                            >
                                Unit (Kg)
                            </label>
                            <select
                                id="unit"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                value={formData.unit}
                                onChange={(e) => handleFormChange(e, "unit")}
                            >
                                <option selected>Select Unit</option>
                                {units.map((unit) => {
                                    return (
                                        <option
                                            key={unit.value}
                                            value={unit.value}
                                        >
                                            {unit.label}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>

                        <div className="sm:col-span-2">
                            <label
                                htmlFor="description"
                                className="block mb-2 text-sm font-medium text-neutral-400 dark:text-white"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                rows={8}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Product description here"
                                value={formData.description}
                                onChange={(e) =>
                                    handleFormChange(e, "description")
                                }
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            type="submit"
                            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg focus:ring-4 focus:ring-indigo-500 dark:focus:ring-neutral-400 hover:bg-indigo-600"
                        >
                            Add product
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-600 rounded-lg focus:ring-4 focus:ring-red-400 dark:focus:ring-neutral-400 hover:bg-red-700"
                            onClick={closeModalFn}
                        >
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ProductForm;
