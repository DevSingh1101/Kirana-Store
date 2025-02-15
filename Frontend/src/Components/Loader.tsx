import MainLoader from "./MainLoader";

const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-violet-500 opacity-75 blur"></div>
                <div className="relative flex flex-col gap-5 h-60 w-60 items-center justify-center rounded-full bg-gray-200 text-gray-300">
                    <MainLoader />
                    <p className="text-center text-violet-600 font-medium">
                        Loading...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Loader;
