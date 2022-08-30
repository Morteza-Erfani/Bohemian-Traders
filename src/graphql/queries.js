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

const GET_HERO_PHOTOS = gql`
  query {
    heroPhotos {
      laptopPhoto {
        url
      }
      mobilePhoto {
        url
      }
      id
    }
  }
`;

export { GET_CATEGORIES_NAME, GET_HERO_PHOTOS };
