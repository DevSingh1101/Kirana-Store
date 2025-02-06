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
