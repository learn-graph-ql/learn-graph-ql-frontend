// components/BookDetails.js

import React from "react";
import { useQuery } from "@apollo/client";
import { getBookDetailsQuery } from "../queries/queries";

const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(getBookDetailsQuery, {
    variables: { id: bookId },
    skip: !bookId
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;
  if (!data || !data.book) return <p>No book selected</p>;

  const { book } = data;
  return (
    <div>
      <h1>{book.name}</h1>
      <p>{book.genre}</p>
      <p>{book.author.name}</p>
      <p>All books by this author:</p>
      <ul>
        {book.author.books.map((b, index) => (
          <li key={index}>{b.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;
