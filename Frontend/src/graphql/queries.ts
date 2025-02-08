import { gql } from "graphql-request";

export const ORDER_PAGE_QUERY = gql`
    query OrderPageQuery {
        getAllProducts {
            id
            name
            category {
                name
            }
            price
            quantity
            unit
        }
    }
`;

export const NAVBAR_QUERY = gql`
    query NavbarQuery {
        getAllCategories {
            name
            id
        }
    }
`;

export interface ProductInput {
    name: string;
    categoryId: string;
    price: number;
    quantity: number;
    unit: string;
}

export const CREATE_PRODUCT_QUERY = gql`
    mutation CreateProduct($input: ProductInput!) {
        createProduct(input: $input) {
            id
            name
            price
            quantity
            unit
            category {
                id
                name
            }
        }
    }
`;

export const CREATE_CATEGORY_QUERY = gql`
    mutation CreateCategory($name: String!) {
        createCategory(name: $name) {
            id
            name
        }
    }
`;
