import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Books() {
  const { genre } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books based on genre
    axios.get(`http://localhost:5000/books/${genre}`)
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, [genre]);

  return (
    <div>
      <h1>{genre.charAt(0).toUpperCase() + genre.slice(1)} Books</h1>
      {/* Render your books here */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map(book => (
          <div key={book._id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={book.image} alt={book.title} className="w-full h-40 object-cover rounded-md mb-2" />
            <h2 className="text-lg font-semibold text-gray-800">{book.title}</h2>
            <p className="text-sm text-gray-600">{book.author}</p>
            <p className="text-lg font-bold text-emerald-600">${book.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
