export interface ApiHomePageResp {
    getAllProducts: {
        id: string;
        name: string;
        category: {
            name: string;
        };
        price: number;
        quantity: number;
        unit: Units;
    }[];
}

export interface ApiNavbarResp {
    getAllCategories: {
        name: string;
        id: string;
    };
}

export interface ApiAddProductResp {
    createProduct: {
        id: string;
        name: string;
        category: string;
        price: number;
        quantity: number;
        unit: Units;
    };
}

export interface IProductState {
    isLoading: boolean;
    products: IProduct[];
}

export interface IOrderPageProps {
    products: IProduct[];
    isLoading: boolean;
}

export enum Units {
    KG = "Kg",
    GM = "Gm",
    PC = "Piece",
}

export interface ICategory {
    name: string;
    id: string;
}

export interface IProduct {
    id: string;
    category: string;
    name: string;
    price: number;
    unit: Units;
    quantity: number;
}
