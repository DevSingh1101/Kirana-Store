export enum TypeKeys {
    UPDATE_QUANTITY = "UPDATE_QUANTITY",
    UPDATE_UNIT = "UPDATE_UNIT",
}

interface UpdateQuantity {
    type: TypeKeys.UPDATE_QUANTITY;
    payload: {
        productIndex: number;
        newQuantity: number;
    };
}

const updateQuantity = (
    productIndex: number,
    newQuantity: number
): UpdateQuantity => {
    return {
        type: TypeKeys.UPDATE_QUANTITY,
        payload: {
            productIndex: productIndex,
            newQuantity: newQuantity,
        },
    };
};

interface UpdateUnit {
    type: TypeKeys.UPDATE_UNIT;
    payload: {
        productIndex: number;
        newUnit: string;
    };
}

const updateUnit = (productIndex: number, newUnit: string): UpdateUnit => {
    return {
        type: TypeKeys.UPDATE_UNIT,
        payload: {
            productIndex: productIndex,
            newUnit: newUnit,
        },
    };
};

export { updateQuantity, updateUnit };

export type ActionTypes = UpdateQuantity | UpdateUnit;
