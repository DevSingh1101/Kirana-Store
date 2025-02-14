import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../redux/store";
import { resetCartItems } from "../features/cart/cartSlice";

const CartForm = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: IRootState) => state.cart.items);

    const handleDelete = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        e.preventDefault();
        dispatch(resetCartItems());
    };

    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 items-stretch">
            <div className="flex items-center ">
                <span className="font-semibold text-md sm:text-lg">
                    Total Items
                </span>{" "}
                - {cartItems.length}
            </div>
            <div className="flex justify-between p-4">
                <button
                    className="cursor-pointer hover:text-neutral-500"
                    onClick={(e) => handleDelete(e)}
                >
                    Delete
                </button>
                <div className="divider divider-horizontal divider-neutral"></div>
                <button className="cursor-pointer hover:text-neutral-500">
                    Save
                </button>
            </div>
            <div className="flex items-center col-span-2 justify-center">
                <table className="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                        </tr>
                    </thead>
                    {cartItems.length === 0 ? (
                        <div className="text-md col-span-1 p-4">
                            Add products in the cart to move forward.....
                        </div>
                    ) : (
                        <tbody className="">
                            {cartItems.map((cartItem) => {
                                return (
                                    <tr
                                        key={cartItem.id}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {cartItem.category}
                                        </th>
                                        <td className="px-6 py-4">
                                            {cartItem.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {`${cartItem.quantity} - ${cartItem.unit}`}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
};

export default CartForm;
