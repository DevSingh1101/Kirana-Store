import classNames from "classnames";
import { buttonVariants } from "./Button";

const BackButton = ({
    text,
    onClick,
}: {
    text: string;
    onClick: () => void;
}) => {
    return (
        /* From Uiverse.io by AKAspidey01 */
        <button
            className={classNames(
                buttonVariants({ variant: "primary" }),
                "text-center w-48 rounded-full h-14 relative text-md group",
                "bg-neutral-700 text-white hover:bg-neutral-800",
            )}
            type="button"
            onClick={onClick}
        >
            <div className="bg-red-600 rounded-full h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                    height="25px"
                    width="25px"
                >
                    <path
                        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                        fill="white"
                    ></path>
                    <path
                        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                        fill="white"
                    ></path>
                </svg>
            </div>
            <p className="translate-x-2 text-white">{text}</p>
        </button>
    );
};

export default BackButton;
