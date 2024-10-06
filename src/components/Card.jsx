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
        if (isLoggedIn) {
            const userID = localStorage.getItem('userID');
            try {
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
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center" id="my-modal">
            <div ref={cardRef} className="relative p-5 border w-3/4 max-w-2xl shadow-lg rounded-md bg-white">
                <div className="flex">
                    <div className="w-1/3 pr-4">
                        <img src={book.image} alt={book.title} className="w-full h-auto object-cover rounded-md" />
                    </div>
                    <div className="w-2/3 pl-4 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl leading-6 font-medium text-gray-900 mb-2">{book.title}</h3>
                            <p className="text-lg text-gray-500 mb-2">by {book.author}</p>
                            <p className="text-xl font-bold text-emerald-600 mb-4">₹{book.price.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={handleSaveBook}
                                className="px-6 py-2 bg-emerald-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                            >
                                Add to Cart
                            </button>
                            <button
                                onClick={onClose}
                                className="px-6 py-2 bg-white text-emerald-500 text-base font-medium rounded-md border border-emerald-500 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;