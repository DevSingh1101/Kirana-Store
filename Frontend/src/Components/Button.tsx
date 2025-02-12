import { cva } from "class-variance-authority";
import classNames from "classnames";
import { Link } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const buttonVariants = cva("transition-all", {
    variants: {
        variant: {
            primary:
                "border-black bg-black text-white hover:bg-gray-800 hover:ring-4 hover:ring-gray-200",
            secondary: classNames(
                "border-gray-200 bg-white text-gray-900 hover:bg-gray-50 focus-visible:border-gray-500 outline-none",
                "data-[state=open]:border-gray-500 data-[state=open]:ring-4 data-[state=open]:ring-gray-200",
            ),
            outline: "border-transparent text-neutral-600 hover:bg-neutral-100",
            success:
                "border-blue-500 bg-blue-500 text-white hover:bg-blue-600 hover:ring-4 hover:ring-blue-100",
            danger: "border-red-500 bg-red-500 text-white hover:bg-red-600 hover:ring-4 hover:ring-red-100",
            "danger-outline":
                "border-transparent bg-white text-red-500 hover:bg-red-600 hover:text-white",
        },
    },
    defaultVariants: {
        variant: "primary",
    },
});

const Button = ({
    className,
    linkTo,
    children,
}: {
    className: string;
    linkTo: string;
    children: React.ReactNode;
}) => {
    return (
        <button className={className} type="button">
            <Link to={`/${linkTo}`}>{children}</Link>
        </button>
    );
};

export default Button;
