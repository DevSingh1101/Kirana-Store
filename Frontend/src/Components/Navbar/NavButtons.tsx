import classNames from "classnames";
import Button, { buttonVariants } from "../Button";
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
                linkTo="dashboard"
            >
                <AdminPanelSettingsOutlinedIcon />
            </Button>
        </div>
    );
};

export default NavButtons;
