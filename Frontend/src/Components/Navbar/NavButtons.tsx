import classNames from "classnames";
import Button, { buttonVariants } from "../Button";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";

const NavButtons = () => {
    return (
        <div className="hidden grow basis-0 justify-end items-center gap-2 lg:flex">
            <Button
                className={classNames(
                    buttonVariants({
                        variant: "secondary",
                    }),
                    "rounded-full p-3 text-black bg-transparent hover:bg-neutral-700/50",
                )}
                linkTo="admin"
            >
                <AdminPanelSettingsOutlinedIcon />
            </Button>

            {/* <Button
                className={classNames(
                    buttonVariants({
                        variant: "secondary",
                    }),
                    "rounded-full p-3 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700",
                )}
                linkTo="cart"
            >
                <ShoppingBagOutlinedIcon fontSize={"medium"} />
            </Button> */}
        </div>
    );
};

export default NavButtons;
