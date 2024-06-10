import { gql, useQuery } from "@apollo/client";

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
      age
    }
  }
`;

const getBookQuery = gql`
  {
    books {
      name
      genre
    }
  }
`;


export { getAuthorsQuery, getBookQuery};