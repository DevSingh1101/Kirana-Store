import classNames from "classnames";
import { ICategory } from "../../types";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { useMemo } from "react";

const NavItem = ({ category }: { category: ICategory }) => {
    const navItemClassName = useMemo(
        () =>
            classNames(
                "relative group/item flex items-center rounded-md px-4 py-2 text-sm rounded-lg font-medium text-gray-500 hover:text-gray-700 transition-colors",
                "data-[active=true]:bg-gray-200/50 hover:hover:bg-neutral-700/50",
                "group-has-[:hover]:data-[active=true]:[&:not(:hover)]:bg-transparent",
            ),
        [],
    );

    return (
        <NavigationMenu.Item key={category.id}>
            <a
                href={`#${category.name.toUpperCase()}`}
                id={`nav-${category.name}`}
                className={navItemClassName}
            >
                {category.name}
            </a>
        </NavigationMenu.Item>
    );
};

export default NavItem;
