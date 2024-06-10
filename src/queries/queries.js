import { gql } from "@apollo/client";

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
      id
    }
  }
`;

const addBookMutation = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;


const getBookDetailsQuery = gql`
  query GetBook($id: ID!) {
    book(id: $id) {
      name
      genre
      author {
        name
        books {
          name
        }
      }
    }
  }
`;

export { getAuthorsQuery, getBookQuery, addBookMutation, getBookDetailsQuery };