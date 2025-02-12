import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ICategory } from "../../types";
import NavItem from "./NavItem";

const NavItems = ({ categories }: { categories: ICategory[] }) => {
    return (
        <NavigationMenu.Root
            className="relative hidden lg:block"
            delayDuration={0}
        >
            <NavigationMenu.List className="group relative z-0 flex">
                {categories.map((category) => {
                    return <NavItem key={category.id} category={category} />;
                })}
            </NavigationMenu.List>
        </NavigationMenu.Root>
    );
};

export default NavItems;
