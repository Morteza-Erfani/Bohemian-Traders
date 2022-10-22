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

const GET_QUICK_VIEW_PRODUCT = gql`
  query quickViewProduct($id: ID!) {
    product(where: { id: $id }) {
      price
      name
      images {
        url
      }
      sizes {
        ... on Size {
          name
        }
      }
      sizeGuide {
        name
      }
    }
  }
`;

const GET_STORE_PRODUCTS = gql`
  query storeProducts($category: String!, $collection: String!) {
    products(
      where: {
        categories_some: { name: $category }
        collections_some: { name: $collection }
      }
    ) {
      id
      name
      price
      modelImage {
        url
      }
      productImage {
        url
      }
      sideImage {
        url
      }
      sizeGuide {
        name
      }
      sizes {
        ... on Size {
          name
        }
      }
    }
  }
`;

const GET_CATEGORY_PRODUCTS = gql`
  query categoryProduct($category: String!) {
    categories(where: { name: $category }) {
      products {
        name
        id
        price
        modelImage {
          url
        }
        productImage {
          url
        }
        sizes {
          ... on Size {
            name
          }
        }
        sideImage {
          url
        }
        sizeGuide {
          name
        }
      }
    }
  }
`;

const GET_BOTTOM_HERO_PHOTOS = gql`
  query {
    bottomPhotos {
      id
      laptopPhoto {
        url
      }
      mobilePhoto {
        url
      }
    }
  }
`;

const GET_CATALOGS_PHOTOS = gql`
  query {
    catalogs {
      title
      image {
        url
      }
      category {
        name
      }
      collection {
        name
      }
      id
    }
  }
`;

const GET_EXPLORE_DATA = gql`
  query {
    explores {
      image {
        url
      }
      category {
        name
      }
      collection {
        name
      }
      title
      wide
    }
  }
`;

export {
  GET_CATEGORIES_NAME,
  GET_HERO_PHOTOS,
  GET_CATEGORY_PRODUCTS,
  GET_BOTTOM_HERO_PHOTOS,
  GET_CATALOGS_PHOTOS,
  GET_EXPLORE_DATA,
  GET_QUICK_VIEW_PRODUCT,
  GET_STORE_PRODUCTS,
};
