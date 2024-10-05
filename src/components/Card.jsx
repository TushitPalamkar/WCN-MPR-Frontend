import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Card({ book, onClose, isLoggedIn }) {
    const cardRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        function handleClickOutside(event) {
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                onClose();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    const handleSaveBook = async () => {
        console.log('isLoggedIn:', isLoggedIn);
        if (isLoggedIn) {
            const userID = localStorage.getItem('userID');
            console.log('UserID from localStorage:', userID);
            try {
                console.log('Sending request with:', { bookId: book._id, quantity: 1, userID: userID });
                const response = await axios.post('http://localhost:5000/cart/add', 
                    { bookId: book._id, quantity: 1, userID: userID }
                );
                console.log('Book saved:', response.data);
                alert('Book saved successfully!');
            } catch (error) {
                console.log(error);
                alert('Failed to save book. Please try again.');
            }
        } else {
            alert("Please log in to save books.");
            navigate('/login');
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
            <div ref={cardRef} className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="mt-3 text-center">
                    <img src={book.image} alt={book.title} className="w-full h-full object-cover rounded-md mb-4" />
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{book.title}</h3>
                    <p className="text-sm text-gray-500 mt-2">{book.author}</p>
                    <p className="text-lg font-bold text-emerald-600 mt-2">₹{book.price.toFixed(2)}</p>
                    <div className="mt-4">
                        <button
                            onClick={handleSaveBook}
                            className="px-4 py-2 bg-emerald-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                        >
                            Save Book
                        </button>
                        <button
                            onClick={onClose}
                            className="mt-3 px-4 py-2 bg-white text-emerald-500 text-base font-medium rounded-md border border-emerald-500 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;