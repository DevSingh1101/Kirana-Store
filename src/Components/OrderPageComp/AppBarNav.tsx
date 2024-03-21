import {
    AppBar,
    Box,
    Button,
    CssBaseline,
    Drawer,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { categoryValueMap } from "../../Constants/Enum";
import logo from "../../Assets/19logo.jpg";
import CartIcon from "../CartIcon";
import { ShopContext } from "../../Context/ShopContext";

interface AppBarProps {
    categories?: string[];
}

const drawerWidth = 240;
const AppBarNav = ({ categories }: AppBarProps) => {
    const [expanded, setExpanded] = useState(true);
    const { cartItems } = useContext(ShopContext);

    const handleDrawerToggle = () => {
        setExpanded(!expanded);
    };

    const handleCategoryClick = (event: any) => {
        const categoryName = event.target.innerText;
        const element = document.getElementById(categoryValueMap[categoryName]);
        element?.scrollIntoView();
    };

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{ backgroundColor: "inherit", textAlign: "center" }}
        >
            <Box
                sx={{
                    display: {
                        xs: "flex",
                        sm: "flex",
                        flexDirection: "column",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: "0.25rem",
                        justifyContent: "space-evenly",
                        margin: "0.25rem",
                    },
                }}
            >
                {categories?.map((category, index) => (
                    <Button
                        key={index}
                        sx={{
                            width: "100%",
                            color: "#fff",
                            fontSize: "0.9rem",
                            fontWeight: "bold",
                            padding: "0.5rem",
                            borderRadius: "0.5rem",
                            ":hover": {
                                backgroundColor: "#0033cc",
                            },
                        }}
                        onClick={(event) => handleCategoryClick(event)}
                    >
                        {category}
                    </Button>
                ))}
                <CartIcon badgeContent={cartItems} />
            </Box>
        </Box>
    );

    return (
        <Box sx={{ display: "block" }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                    }}
                >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            overflow: "hidden",
                            cursor: "pointer",
                        }}
                    >
                        <a href="/">
                            <img
                                src={logo}
                                style={{
                                    height: "60px",
                                    width: "80px",
                                    margin: "0.35rem 0",
                                    borderRadius: "0.35rem",
                                }}
                                alt="Dukaan Logo"
                            />
                        </a>
                    </Typography>
                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                sm: "flex",
                                flexDirection: "row",
                                flexWrap: "wrap",
                                alignItems: "center",
                                gap: "0.5rem",
                                justifyContent: "space-evenly",
                            },
                        }}
                    >
                        {categories?.map((category, index) => (
                            <Button
                                key={index}
                                sx={{
                                    color: "#fff",
                                    fontSize: "0.9rem",
                                    fontWeight: "bold",
                                    padding: "0.5rem",
                                    borderRadius: "0.5rem",
                                    ":hover": {
                                        backgroundColor: "#0033cc",
                                    },
                                }}
                                onClick={(event) => handleCategoryClick(event)}
                            >
                                {category}
                            </Button>
                        ))}
                        <CartIcon badgeContent={cartItems} />
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={!expanded}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            zIndex: 0,
                            boxSizing: "border-box",
                            width: drawerWidth,
                            margin: "4rem auto",
                            backgroundColor: "#0099ff",
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
};

export default AppBarNav;
