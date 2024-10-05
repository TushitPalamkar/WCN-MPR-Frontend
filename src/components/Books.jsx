import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Card from './Card';

function Books() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const genre = searchParams.get('genre');
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const userID = localStorage.getItem('userID');
    console.log('userID:', userID);
    if (userID) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    // Fetch books based on genre
    if (genre) {
      axios.get(`http://localhost:5000/books?genre=${genre}`)
        .then(response => setBooks(response.data))
        .catch(error => console.error('Error fetching books:', error));
    }
  }, [genre]);

  const handleImageClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseCard = () => {
    setSelectedBook(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{genre ? genre.charAt(0).toUpperCase() + genre.slice(1) : 'All'} Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map(book => (
          <div key={book._id} className="bg-white p-4 rounded-lg shadow-md flex flex-col">
            <img 
              src={book.image} 
              alt={book.title} 
              className="w-full h-full object-cover rounded-md mb-4 cursor-pointer" 
              onClick={() => handleImageClick(book)}
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{book.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{book.author}</p>
            <p className="text-lg font-bold text-emerald-600 mb-4">₹{book.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      {selectedBook && (
        <Card 
          book={selectedBook} 
          onClose={handleCloseCard} 
          isLoggedIn={isLoggedIn}
        />
      )}
    </div>
  );
}

export default Books;
