import { Badge, BadgeProps, IconButton, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: -2,
        top: 10,
    },
}));

interface CartIconProps {
    onClickHandler: () => void;
}

const CartIcon = ({ onClickHandler }: CartIconProps) => {
    return (
        <IconButton
            sx={{
                ":hover": {
                    backgroundColor: "#0033cc",
                },
            }}
            aria-label="cart"
            onClick={onClickHandler}
        >
            <StyledBadge color="error" variant="dot" max={9}>
                <ShoppingCartIcon
                    sx={{
                        padding: "0 auto",
                        color: "white",
                    }}
                />
            </StyledBadge>
        </IconButton>
    );
};

export default CartIcon;
