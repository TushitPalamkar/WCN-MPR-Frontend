import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const [savedBooks, setSavedBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSavedBooks = async () => {
            const userID = localStorage.getItem('userID');
            if (!userID) {
                setError('User not logged in');
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(`http://localhost:5000/cart/get/${userID}`);
                setSavedBooks(response.data.savedBooks);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch saved books');
                setLoading(false);
                console.error('Error fetching saved books:', err);
            }
        };

        fetchSavedBooks();
    }, []);

    const handleRemoveBook = async (bookId) => {
        console.log('Attempting to remove book with ID:', bookId);
        const userID = localStorage.getItem('userID');
        if (!userID) {
            console.error('No userID found in localStorage');
            alert('You must be logged in to remove books.');
            return;
        }

        try {
            console.log(`Sending DELETE request to: http://localhost:5000/cart/${userID}/${bookId}`);
            const response = await axios.delete(`http://localhost:5000/cart/${userID}/${bookId}`);
            console.log('Server response:', response.data);

            setSavedBooks(prevSavedBooks => {
                console.log('Previous saved books:', prevSavedBooks);
                const updatedBooks = prevSavedBooks.filter(savedBook => savedBook.book._id !== bookId);
                console.log('Updated saved books:', updatedBooks);
                return updatedBooks;
            });

            alert('Book removed successfully');
        } catch (err) {
            console.error('Error removing book:', err);
            if (err.response) {
                console.error('Response data:', err.response.data);
                console.error('Response status:', err.response.status);
            } else if (err.request) {
                console.error('No response received:', err.request);
            } else {
                console.error('Error setting up request:', err.message);
            }
            alert('Failed to remove book. Please try again.');
        }
    };

    const calculateTotal = () => {
        return savedBooks.reduce((total, savedBook) => {
            return total + (savedBook.book.price * savedBook.quantity);
        }, 0);
    };

    const handleProceedToPayment = () => {
        // You can pass the total amount or any other necessary data to the payment page
        navigate('/payment', { state: { totalAmount: calculateTotal() } });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Your Saved Books</h1>
            {savedBooks.length === 0 ? (
                <p>You haven't saved any books yet.</p>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {savedBooks.map((savedBook, index) => (
                            <div key={`${savedBook.book._id}-${index}`} className="bg-white p-4 rounded-lg shadow-md">
                                <img
                                    src={savedBook.book.image}
                                    alt={savedBook.book.title}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">{savedBook.book.title}</h2>
                                <p className="text-sm text-gray-600 mb-2">Author: {savedBook.book.author}</p>
                                <p className="text-sm text-gray-600 mb-2">Genre: {savedBook.book.genre}</p>
                                <p className="text-lg font-bold text-emerald-600 mb-2">₹{savedBook.book.price.toFixed(2)}</p>
                                <p className="text-md text-gray-700 mb-4">Quantity: {savedBook.quantity}</p>
                                <button
                                    onClick={() => handleRemoveBook(savedBook.book._id)}
                                    className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="bg-white shadow-md p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <p className="text-xl font-bold">Total Amount:</p>
                            <p className="text-2xl font-bold text-emerald-600">₹{calculateTotal().toFixed(2)}</p>
                        </div>
                        <button
                            onClick={handleProceedToPayment}
                            className="w-full px-4 py-2 bg-emerald-500 text-white text-lg font-medium rounded-md shadow-sm hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition duration-150 ease-in-out"
                        >
                            Proceed to Payment
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;