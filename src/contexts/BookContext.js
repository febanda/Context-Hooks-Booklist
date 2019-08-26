import React, { createContext, useState, useReducer, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  // const addBook = (title, author) => {
  //   setBooks([
  //     ...books,
  //     { id: Math.random() * 5, title: title, author: author }
  //   ]);
  // };

  // const removeBook = id => {
  //   setBooks(
  //     books.filter(book => {
  //       return book.id !== id;
  //     })
  //   );
  // };

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
