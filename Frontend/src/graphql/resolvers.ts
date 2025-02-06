import { request } from "graphql-request";
import { ApiOrderPageResp } from "../types";
import { ORDER_PAGE_QUERY } from "./queries";
import { API_ENDPOINT } from "../Constants";

export const loadOrderPageResp = (): Promise<ApiOrderPageResp> =>
    request(API_ENDPOINT, ORDER_PAGE_QUERY);
