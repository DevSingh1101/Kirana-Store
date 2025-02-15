import Logo from "./Logo";
import NavItems from "./NavItems";
import classNames from "classnames";
import NavButtons from "./NavButtons";
import { useQuery } from "react-query";
import { ApiNavbarResp } from "../../types";
import { LayoutGroup } from "framer-motion";
import { IRootState } from "../../redux/store";
import { useLocation } from "react-router-dom";
import { ReactNode, useEffect, useId } from "react";
import { loadNavbarResp } from "../../graphql/resolvers";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../features/category/categorySlice";
import Toast, { toastVariants } from "../Toast";

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

const Navbar = ({
    maxWidthWrapperClassName,
}: {
    maxWidthWrapperClassName?: string;
}) => {
    const pathname = useLocation().pathname;

    const dispatch = useDispatch();

    const categories = useSelector(
        (state: IRootState) => state.category.value.categories,
    );

    const { data, isError, error, isSuccess } = useQuery<ApiNavbarResp>(
        "Categories",
        loadNavbarResp,
    );

    useEffect(() => {
        if (data?.getAllCategories && categories.length == 0) {
            const categories = data.getAllCategories;
            dispatch(
                setCategories({
                    categories: categories,
                }),
            );
        }
    }, [categories.length, data, dispatch]);

    return (
        <div className="sticky top-0 border-b border-black">
            <LayoutGroup id={useId()}>
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
                            <Logo />

                            {isError && (
                                <Toast
                                    type={toastVariants({ variant: "error" })}
                                    message={`Error fetching categories due to ${
                                        (error as Error).name
                                    }`}
                                />
                            )}
                            {isSuccess && (
                                <>
                                    {pathname === "/" && (
                                        <NavItems categories={categories} />
                                    )}

                                    {pathname === "/" && <NavButtons />}
                                </>
                            )}
                        </div>
                    </MaxWidthWrapper>
                </div>
            </LayoutGroup>
        </div>
    );
};

export default Navbar;
