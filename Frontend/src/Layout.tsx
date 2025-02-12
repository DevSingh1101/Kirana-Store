import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { IRootState } from "./redux/store";
import classNames from "classnames";

const Layout = () => {
    const loading = useSelector((state: IRootState) => state.main.loading);

    return (
        <div className={classNames("flex flex-col justify-between")}>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Layout;
