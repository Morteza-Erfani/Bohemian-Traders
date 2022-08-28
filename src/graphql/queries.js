import { gql } from "@apollo/client";

const GET_CATEGORIES_NAME = gql`
  query {
    categories {
      id
      name
      collections {
        ... on Collection {
          id
          name
        }
      }
    }
  }
`;

export { GET_CATEGORIES_NAME };
