export interface ApiOrderPageResp {
    getAllProducts: {
        id: number;
        name: string;
        category: {
            name: string;
        };
        price: number;
        quantity: number;
        unit: string;
    }[];
}

export interface IOrderPageProps {
    products: IProduct[];
    isLoading: boolean;
}

export enum Units {
    KG = "kg",
    GM = "gm",
    PC = "pc",
}

export interface IProduct {
    id: string;
    category: string;
    name: string;
    price: string;
    unit: Units;
    quantity: number;
}
