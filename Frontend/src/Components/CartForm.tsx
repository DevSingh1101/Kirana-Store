import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../redux/store";
import { resetCartItems } from "../features/cart/cartSlice";
import { resetProducts } from "../features/product/productSlice";
import EmptyCartButton from "./EmptyCartButton";
import SaveBtn from "./SaveBtn";

const CartForm = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: IRootState) => state.cart.items);

    const handleDelete = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        e.preventDefault();
        dispatch(resetCartItems());
        dispatch(resetProducts());
    };

    return (
        <div className="w-full max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 items-stretch">
            <div className="col-span-2 flex items-center justify-between">
                <div className="flex items-center text-black">
                    <span className="font-semibold text-md sm:text-lg">
                        Total Items
                    </span>{" "}
                    - {cartItems.length}
                </div>
                <div className="flex justify-center p-4">
                    <EmptyCartButton text="Empty Cart" onClick={handleDelete} />
                    <div className="divider divider-horizontal divider-neutral"></div>
                    <SaveBtn text="Save" />
                </div>
            </div>

            <div className="flex col-span-2 justify-center rounded-lg border border-black">
                <div className="w-full h-[60vh] overflow-y-auto">
                    <table className="w-full text-md text-left rtl:text-right text-gray-500 rounded-lg">
                        <thead className="text-xs uppercase text-black border-b border-gray-700 rounded-lg bg-white sticky top-0 z-10">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 bg-gray-300 rounded-tl-lg"
                                >
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 bg-gray-300 rounded-tr-lg"
                                >
                                    Quantity
                                </th>
                            </tr>
                        </thead>
                        {cartItems.length === 0 ? (
                            <tbody>
                                <tr>
                                    <td
                                        colSpan={3}
                                        className="text-md text-center p-4"
                                    >
                                        Add products in the cart to move
                                        forward.....
                                    </td>
                                </tr>
                            </tbody>
                        ) : (
                            <tbody>
                                {cartItems.map((cartItem) => {
                                    return (
                                        <tr
                                            key={cartItem.id}
                                            className="border-b border-gray-700"
                                        >
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-200"
                                            >
                                                {cartItem.category}
                                            </th>
                                            <td className="px-6 py-4">
                                                {cartItem.name}
                                            </td>
                                            <td className="px-6 py-4 text-black bg-gray-200">
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
        </div>
    );
};

export default CartForm;
