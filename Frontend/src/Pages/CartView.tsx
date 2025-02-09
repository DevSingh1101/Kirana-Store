/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import OrderTable from "../components/OrderTable";
import { updateAddress, updateName } from "../features/customer/customerSlice";
import classNames from "classnames";
import { buttonVariants } from "../components/Navbar";
import { WhatsApp } from "@mui/icons-material";
import { IRootState } from "../redux/store";
import { IProduct } from "../types";
import { ColDef } from "ag-grid-community";

const CartView = () => {
    const dispatch = useDispatch();

    const cartProducts: IProduct[] = useSelector(
        (state: IRootState) => state.product.value.products,
    ).filter((product: IProduct) => {
        return product.quantity > 0;
    });

    const { name, address } = useSelector((state: IRootState) => {
        return {
            name: state.customer.value.name,
            address: state.customer.value.address,
        };
    });

    function handleNameChange(name: string) {
        dispatch(
            updateName({
                name: name,
            }),
        );
    }

    function handleAddressChange(address: string) {
        dispatch(
            updateAddress({
                address: address,
            }),
        );
    }

    const columnDefs: ColDef[] = [
        {
            field: "category",
        },
        {
            field: "name",
        },
        {
            field: "quantity",
            sortable: true,
        },
        {
            field: "unit",
        },
    ];

    function handleBtnClick() {
        const ordersUrl = cartProducts
            ?.map((product) => {
                return {
                    name: product.name,
                    quantity: `${product.quantity}${product.unit}`,
                };
            })
            .reduce((accumulator, order) => {
                return accumulator + `${order.name}%20${order.quantity}%0A`;
            }, "");

        const redirectUrl = `https://wa.me/919811572962?text=Hello!%0AI%20want%20to%20order%20the%20following%20items%20from%20your%20store%0A%0AName:%20${
            name === "" ? "NoName" : name
        }%0AAddress:%20${
            address === "" ? "NoAddress" : address
        }%0A%0A${ordersUrl}%0A%0AThank%20you!`;

        window.open(redirectUrl);
    }

    return (
        <div className="flex flex-col items-center p-4">
            <OrderTable products={cartProducts} columns={columnDefs} />

            <div className="flex items-center justify-center gap-4 p-2 shadow-lg w-full">
                <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered input-primary w-full max-w-lg"
                    value={name}
                    onChange={(e) => handleNameChange(e.target.value)}
                />
                <textarea
                    placeholder="Address"
                    className="textarea textarea-bordered textarea-lg w-full max-w-2xl"
                    value={address}
                    onChange={(e) => handleAddressChange(e.target.value)}
                ></textarea>
            </div>

            <div className="p-4">
                <button
                    data-ripple-light="true"
                    className={classNames(
                        buttonVariants({
                            variant: "primary",
                        }),
                        "rounded-full w-fit py-2 px-10",
                        "bg-neutral-700 dark:text-white hover:bg-neutral-800 group",
                    )}
                    type="button"
                    onClick={handleBtnClick}
                >
                    Send to Whatsapp{" "}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                        <WhatsApp fontSize="medium" />{" "}
                    </span>
                </button>
            </div>
        </div>
    );
};

export default CartView;
