import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BookList.css';  // 引入外部样式文件

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/books')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="book-list">
      <h2>Book List</h2>
      <div className="books-container">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Price: ${book.price}</p>
            <Link to={`/book/${book.id}`} className="view-details">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
