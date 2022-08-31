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

const GET_CATEGORY_PRODUCTS = gql`
  query categoryProduct($category: String!) {
    categories(where: { name: $category }) {
      products {
        prices
        name
        id
        modelImage {
          url
        }
        productImage {
          url
        }
        sizes {
          ... on ProductSizeVariant {
            name
          }
        }
      }
    }
  }
`;

export { GET_CATEGORIES_NAME, GET_HERO_PHOTOS, GET_CATEGORY_PRODUCTS };
