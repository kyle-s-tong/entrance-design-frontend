import gql from 'graphql-tag';

export const getAllPricings = gql`
query getPricings {
  pricings: allPricings {
    id
    title
    description
    image {
      publicUrl
    }
  }
}`;
