import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { IRootState } from "./redux/store";
import classNames from "classnames";

const Layout = () => {
    const loading = useSelector((state: IRootState) => state.main.loading);

    if (loading) {
        return <div>Will do</div>;
    }

    return (
        <div
            className={classNames(
                "h-[100vh] bg-gradient-to-br from-cyan-200 via-white to-cyan-200",
                "flex flex-col",
            )}
        >
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Layout;
