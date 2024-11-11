import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import  {useStore} from '../store/useStore';
import './BookDetail.css'; // 导入样式

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const addToCart = useStore((state) => state.addToCart);

  useEffect(() => {
    fetch(`http://localhost:5000/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div className="book-detail-container">
      <h2 className="book-title">{book.title}</h2>
      <p className="book-author">Author: {book.author}</p>
      <p className="book-price">Price: ${book.price}</p>
      <p className="book-description">{book.description}</p>
      <button className="add-to-cart-btn" onClick={() => addToCart(book)}>
        Add to Cart
      </button>
    </div>
  );
};

export default BookDetail;
