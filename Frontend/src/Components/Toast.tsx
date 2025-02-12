import { cva } from "class-variance-authority";

// eslint-disable-next-line react-refresh/only-export-components
export const toastVariants = cva("transition-all", {
    variants: {
        variant: {
            info: "alert-info",
            success: "alert-success",
            error: "alert-error",
        },
    },
});

const Toast = ({ message, type }: { message: string; type: string }) => {
    return (
        <div className="toast">
            <div className={`alert ${type}`}>
                <span>{message}</span>
            </div>
        </div>
    );
};

export default Toast;
