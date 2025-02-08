/* eslint-disable react-refresh/only-export-components */
import classNames from "classnames";
import { LayoutGroup } from "framer-motion";
import { ReactNode, useEffect, useId } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { useQuery } from "react-query";
import { ApiNavbarResp } from "../types";
import { loadNavbarResp } from "../graphql/resolvers";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../features/category/categorySlice";
import { IRootState } from "../redux/store";

const MaxWidthWrapper = ({
    className,
    children,
}: {
    className?: string;
    children: ReactNode;
}) => {
    return (
        <div
            className={classNames(
                "mx-auto w-full max-w-screen-xl px-3 lg:px-10",
                className,
            )}
        >
            {children}
        </div>
    );
};

const navItemClassName = classNames(
    "relative group/item flex items-center rounded-md px-4 py-2 text-sm rounded-lg font-medium text-neutral-700 hover:text-neutral-900 transition-colors",
    "dark:text-white/90 dark:hover:text-white hover:bg-neutral-900/5 dark:hover:bg-white/10 data-[active=true]:bg-neutral-900/5 dark:data-[active=true]:bg-white/10",
    "group-has-[:hover]:data-[active=true]:[&:not(:hover)]:bg-transparent",
);

const Navbar = ({
    maxWidthWrapperClassName,
}: {
    maxWidthWrapperClassName?: string;
}) => {
    const layoutGroupId = useId();
    const pathname = useLocation().pathname;

    const dispatch = useDispatch();

    const categories = useSelector(
        (state: IRootState) => state.category.value.categories,
    );

    const { data, isLoading, error } = useQuery<ApiNavbarResp>(
        "Categories",
        loadNavbarResp,
    );

    useEffect(() => {
        if (data?.getAllCategories) {
            const categories = data.getAllCategories;
            dispatch(
                setCategories({
                    categories: categories,
                }),
            );
        }
    }, [data, dispatch]);

    return (
        <div className="h-20 bg-neutral-800 sticky top-0">
            <LayoutGroup id={layoutGroupId}>
                <div className={classNames("top-0 z-30 transition-all")}>
                    <div
                        className={classNames(
                            "absolute inset-0 block border-b border-transparent transition-all",
                        )}
                    />

                    <MaxWidthWrapper
                        className={classNames(
                            "relative",
                            maxWidthWrapperClassName,
                        )}
                    >
                        <div className="flex h-20 items-center justify-between gap-2">
                            <a href="/" className="grow basis-0 cursor-pointer">
                                <img
                                    className="w-24 h-20"
                                    src={logo}
                                    alt="logo"
                                />
                            </a>

                            {pathname === "/" && (
                                <NavigationMenu.Root
                                    className="relative hidden lg:block"
                                    delayDuration={0}
                                >
                                    <NavigationMenu.List className="group relative z-0 flex">
                                        {categories.map((category) => {
                                            return (
                                                <NavigationMenu.Item
                                                    key={category.id}
                                                >
                                                    <a
                                                        href={`#${category.name.toUpperCase()}`}
                                                        id={`nav-${category.name}`}
                                                        className={
                                                            navItemClassName
                                                        }
                                                    >
                                                        {category.name}
                                                    </a>
                                                </NavigationMenu.Item>
                                            );
                                        })}
                                    </NavigationMenu.List>
                                </NavigationMenu.Root>
                            )}

                            {pathname === "/" && (
                                <div className="hidden grow basis-0 justify-end items-center gap-2 lg:flex">
                                    <button
                                        data-ripple-light="true"
                                        className={classNames(
                                            buttonVariants({
                                                variant: "secondary",
                                            }),
                                            "rounded-full p-3 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700",
                                        )}
                                        type="button"
                                    >
                                        <Link to={"/admin"}>
                                            <AdminPanelSettingsOutlinedIcon />
                                        </Link>
                                    </button>

                                    <button
                                        data-ripple-light="true"
                                        className={classNames(
                                            buttonVariants({
                                                variant: "secondary",
                                            }),
                                            "rounded-full p-3 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700",
                                        )}
                                        type="button"
                                    >
                                        <Link to={"/cart"}>
                                            <ShoppingBagOutlinedIcon
                                                fontSize={"medium"}
                                            />
                                        </Link>
                                    </button>
                                </div>
                            )}
                        </div>
                    </MaxWidthWrapper>
                </div>
            </LayoutGroup>
        </div>
    );
};

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

export default Navbar;
