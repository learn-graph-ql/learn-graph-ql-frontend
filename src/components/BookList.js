import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getBookQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { loading, error, data } = useQuery(getBookQuery);
  const [selectedBookId, setSelectedBookId] = useState(null);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <div>
      <ul>
        {data.books.map((book, index) => (
          <li key={book.id} onClick={() => setSelectedBookId(book.id)}>
            {book.name} - {book.genre}
          </li>
        ))}
      </ul>
      <BookDetails bookId={selectedBookId} />
    </div>
  );
};

export default BookList;
