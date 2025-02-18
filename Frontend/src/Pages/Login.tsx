import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { buttonVariants } from "../components/Button";
import { IUser, setCredentials } from "../features/mainSlice";

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const { accessToken } = useSelector((state: IRootState) => state.main);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (accessToken) {
            navigate("/dashboard");
        }
    }, [accessToken, navigate]);

    function handleLogin() {
        //will add login feature
        const dummyUser: IUser = {
            name: "Devang",
            phoneNumber: phoneNumber,
            role: "ADMIN",
        };

        dispatch(
            setCredentials({
                user: dummyUser,
                accessToken: "123",
            }),
        );
    }

    return (
        <div className="h-full flex flex-col justify-center items-center px-6">
            <div className="bg-gray-300 py-12 px-6 rounded-xl flex flex-col items-center">
                <div className="p-4 rounded-lg max-w-96">
                    <label className="text-white text-md font-bold">
                        Phone Number
                    </label>
                    <div className="relative mt-2">
                        <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r-2 pr-2">
                            <select className="text-sm rounded-lg h-full bg-transparent">
                                <option>IN +91</option>
                            </select>
                        </div>
                        <input
                            type="tel"
                            placeholder="Phone number here"
                            className="w-full pl-[6rem] pr-3 py-2 appearance-none bg-white outline-none border focus:border-slate-600 shadow-sm rounded-lg"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                </div>
                <button
                    className={classNames(
                        buttonVariants({
                            variant: "primary",
                        }),
                        "rounded-full w-fit py-2 px-10",
                        "bg-neutral-700 dark:text-white hover:bg-neutral-800 group",
                    )}
                    type="button"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;
