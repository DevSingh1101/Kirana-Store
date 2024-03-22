export enum TypeKeys {
    UPDATE_QUANTITY = "UPDATE_QUANTITY",
    UPDATE_UNIT = "UPDATE_UNIT",
}

interface UpdateQuantity {
    type: TypeKeys.UPDATE_QUANTITY;
    payload: {
        categoryIndex: number;
        productIndex: number;
        newQuantity: number;
    };
}

const updateQuantity = (
    categoryIndex: number,
    productIndex: number,
    newQuantity: number
): UpdateQuantity => {
    return {
        type: TypeKeys.UPDATE_QUANTITY,
        payload: {
            categoryIndex: categoryIndex,
            productIndex: productIndex,
            newQuantity: newQuantity,
        },
    };
};

interface UpdateUnit {
    type: TypeKeys.UPDATE_UNIT;
    payload: {
        categoryIndex: number;
        productIndex: number;
        newUnit: string;
    };
}

const updateUnit = (
    categoryIndex: number,
    productIndex: number,
    newUnit: string
): UpdateUnit => {
    return {
        type: TypeKeys.UPDATE_UNIT,
        payload: {
            categoryIndex: categoryIndex,
            productIndex: productIndex,
            newUnit: newUnit,
        },
    };
};

export { updateQuantity, updateUnit };

export type ActionTypes = UpdateQuantity | UpdateUnit;
