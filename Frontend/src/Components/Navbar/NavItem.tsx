import classNames from "classnames";
import { ICategory } from "../../types";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { useMemo } from "react";

const NavItem = ({ category }: { category: ICategory }) => {
    const navItemClassName = useMemo(
        () =>
            classNames(
                "relative group/item flex items-center rounded-md px-4 py-2 text-sm rounded-lg font-medium text-neutral-700 hover:text-neutral-900 transition-colors",
                "dark:text-white/90 dark:hover:text-white hover:bg-neutral-900/5 dark:hover:bg-white/10 data-[active=true]:bg-neutral-900/5 dark:data-[active=true]:bg-white/10",
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
