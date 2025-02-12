import logo from "../../assets/logo.png";

const Logo = () => {
    return (
        <a href="/" className="grow basis-0 cursor-pointer">
            <img className="w-24 h-20" src={logo} alt="logo" />
        </a>
    );
};

export default Logo;
