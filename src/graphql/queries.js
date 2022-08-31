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

const GET_PRODUCT_CARD_INFO = gql`
  query product($slug: String!) {
    products(where: { slug: $slug }) {
      modelImage {
        url
      }
      productImage {
        url
      }
      name
      prices
      id
      sizes {
        ... on ProductSizeVariant {
          name
        }
      }
    }
  }
`;

export { GET_CATEGORIES_NAME, GET_HERO_PHOTOS, GET_PRODUCT_CARD_INFO };
