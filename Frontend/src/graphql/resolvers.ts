import { request } from "graphql-request";
import { ApiNavbarResp, ApiOrderPageResp } from "../types";
import {
    CREATE_CATEGORY_QUERY,
    CREATE_PRODUCT_QUERY,
    NAVBAR_QUERY,
    ORDER_PAGE_QUERY,
} from "./queries";
import { API_ENDPOINT } from "../Constants";
import { useMutation } from "react-query";

export const loadOrderPageResp = (): Promise<ApiOrderPageResp> =>
    request(API_ENDPOINT, ORDER_PAGE_QUERY);

export const loadNavbarResp = (): Promise<ApiNavbarResp> =>
    request(API_ENDPOINT, NAVBAR_QUERY);

export const useCreateProduct = () => {
    return useMutation(
        async (input: {
            categoryId: string;
            name: string;
            price: number;
            quantity: number;
            unit: string;
        }) => {
            return request(API_ENDPOINT, CREATE_PRODUCT_QUERY, {
                input: {
                    ...input,
                    price: Number(input.price),
                    quantity: Number(input.quantity),
                },
            });
        },
    );
};

export const useCreateCategory = () => {
    return useMutation(async (name: string) => {
        return request(API_ENDPOINT, CREATE_CATEGORY_QUERY, { name });
    });
};
