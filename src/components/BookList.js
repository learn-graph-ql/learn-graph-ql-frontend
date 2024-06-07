import React from "react";
import { gql, useQuery } from "@apollo/client";

const getBookQuery = gql`
  {
    books {
      name
      genre
    }
  }
`;

const BookList = () => {
  const { loading, error, data } = useQuery(getBookQuery);
  console.log(data, loading, error);
  if (loading) return <p>Loading....</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <div>
      <ul>
        {data.books.map((book, index) => (
          <li key={index}>{book.name} - {book.genre}</li>
        ))}
        
      </ul>
    </div>
  );
};

export default BookList;
