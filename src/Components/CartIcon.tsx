import { Badge, BadgeProps, IconButton, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
    },
}));

interface CartIconProps {
    badgeContent: number;
    onClickHandler: () => void;
}

const CartIcon = ({ badgeContent, onClickHandler }: CartIconProps) => {
    return (
        <IconButton aria-label="cart" onClick={onClickHandler}>
            <StyledBadge badgeContent={badgeContent} color="info" max={9}>
                <ShoppingCartIcon sx={{ color: "white" }} />
            </StyledBadge>
        </IconButton>
    );
};

export default CartIcon;
