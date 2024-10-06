import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState({ totalAmount: 0, cartItems: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    if (location.state?.totalAmount && location.state?.cartItems) {
      setOrderDetails({
        totalAmount: location.state.totalAmount,
        cartItems: location.state.cartItems
      });
    } else {
      // If there's no state, redirect to the cart page
      navigate('/cart');
    }
  }, [location, navigate]);

  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: ''
  });

  const [billingDetails, setBillingDetails] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zipCode: ''
  });

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'cardNumber') {
      const cleaned = value.replace(/\D/g, '');
      let formatted = cleaned;
      if (cleaned.length > 0) {
        formatted = cleaned.match(/.{1,4}/g).join(' ');
      }
      setCardDetails(prev => ({ ...prev, [name]: formatted }));
    } else if (name === 'expiryDate') {
      const cleaned = value.replace(/\D/g, '');
      let formatted = cleaned;
      if (cleaned.length > 2) {
        formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
      }
      setCardDetails(prev => ({ ...prev, [name]: formatted }));
    } else if (name === 'cvv') {
      const cleaned = value.replace(/\D/g, '').slice(0, 3);
      setCardDetails(prev => ({ ...prev, [name]: cleaned }));
    } else {
      setCardDetails(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'zipCode') {
      const cleaned = value.replace(/\D/g, '');
      let formatted = cleaned;
      if (cleaned.length > 3) {
        formatted = `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)}`;
      }
      setBillingDetails(prev => ({ ...prev, [name]: formatted }));
    } else {
      setBillingDetails(prev => ({ ...prev, [name]: value }));
    }
  };

  const clearCart = async () => {
    const userID = localStorage.getItem('userID');
    try {
      await axios.delete(`http://localhost:5000/cart/clear`, { data: { userId: userID } });
      // Clear local storage or update your state management solution
      localStorage.removeItem('cart');
      // If you're using a state management library like Redux, dispatch an action to clear the cart
      // dispatch(clearCart());
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Process the payment here
      // const paymentResult = await processPayment(cardDetails, billingDetails, orderDetails);
      
      // If payment is successful, clear the cart
      await clearCart();

      setIsLoading(false);
      setShowSuccessPopup(true);
    } catch (error) {
      setIsLoading(false);
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    }
  };

  const handlePopupClick = (e) => {
    e.stopPropagation(); // Prevent click from bubbling up to the document
  };

  useEffect(() => {
    if (showSuccessPopup) {
      document.addEventListener('click', handlePageClick);
    }
    return () => {
      document.removeEventListener('click', handlePageClick);
    };
  }, [showSuccessPopup]);

  const handlePageClick = () => {
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Payment Details</h1>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-2/3 px-4 mb-8">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-6">Card Information</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
                Card Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cardNumber"
                type="text"
                placeholder="1234 5678 9012 3456"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleCardChange}
                maxLength="19"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardHolder">
                Card Holder
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cardHolder"
                type="text"
                placeholder="ABCD"
                name="cardHolder"
                value={cardDetails.cardHolder}
                onChange={handleCardChange}
                required
              />
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 pr-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryDate">
                  Expiry Date
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="expiryDate"
                  type="text"
                  placeholder="MM/YY"
                  name="expiryDate"
                  value={cardDetails.expiryDate}
                  onChange={handleCardChange}
                  maxLength="5"
                  required
                />
              </div>
              <div className="w-1/2 pl-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
                  CVV
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="cvv"
                  type="text"
                  placeholder="123"
                  name="cvv"
                  value={cardDetails.cvv}
                  onChange={handleCardChange}
                  maxLength="3"
                  required
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 mt-8">Billing Information</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullName"
                type="text"
                placeholder="ABCD"
                name="fullName"
                value={billingDetails.fullName}
                onChange={handleBillingChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="abcd@gmail.com"
                name="email"
                value={billingDetails.email}
                onChange={handleBillingChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
                placeholder="TSEC Bandra"
                name="address"
                value={billingDetails.address}
                onChange={handleBillingChange}
                required
              />
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 pr-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                  City
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="city"
                  type="text"
                  placeholder="Mumbai"
                  name="city"
                  value={billingDetails.city}
                  onChange={handleBillingChange}
                  required
                />
              </div>
              <div className="w-1/2 pl-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zipCode">
                  ZIP Code
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="zipCode"
                  type="text"
                  placeholder="400 001"
                  name="zipCode"
                  value={billingDetails.zipCode}
                  onChange={handleBillingChange}
                  maxLength="7"
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-gradient-to-r from-green-500 to-teal-500 mx-auto mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Pay Now
              </button>
            </div>
          </form>
        </div>
        <div className="w-full lg:w-1/3 px-4">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            {orderDetails.cartItems.length > 0 ? (
              <>
                {orderDetails.cartItems.map((item, index) => (
                  <div key={index} className="mb-4 pb-4 border-b">
                    <h3 className="font-semibold">{item.book.title}</h3>
                    <div className="flex justify-between text-sm">
                      <span>Price:</span>
                      <span>₹{item.book.price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Quantity:</span>
                      <span>{item.quantity}</span>
                    </div>
                    <div className="flex justify-between text-sm font-semibold">
                      <span>Subtotal:</span>
                      <span>₹{(item.book.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                ))}
                <div className="flex justify-between font-bold text-lg mt-4">
                  <span>Total Amount:</span>
                  <span>₹{orderDetails.totalAmount.toFixed(2)}</span>
                </div>
              </>
            ) : (
              <p>No items in cart. Please add items before proceeding to payment.</p>
            )}
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            <p className="mt-4 text-center">Processing payment...</p>
          </div>
        </div>
      )}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50" onClick={handlePageClick}>
          <div className="bg-white p-8 rounded-lg shadow-xl" onClick={handlePopupClick}>
            <h2 className="text-2xl font-bold mb-4 text-green-600">Payment Successful!</h2>
            <p>Your order has been placed successfully.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;