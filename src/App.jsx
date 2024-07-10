import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/register/Register';
import VerifyEmail from './components/verifyEmail/VerifyEmail';
import Login from './components/login/Login';
import Notification from './components/notification/Notification';
import OrderDetail from './components/orderDetail/OrderDetail';
import OrderForm from './components/orderForm/OrderForm';
import OrderList from './components/orderList/OrderList';
import FoodList from './components/foodList/FoodList';
import './App.scss'; // Import the SCSS file

const App = () => {
  const [orders, setOrders] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [notification, setNotification] = useState({ type: '', text: '' });

  const placeOrder = (order) => {
    try {
      setOrders([...orders, { ...order, status: 'Pending' }]);
      setNotification({ type: 'success', text: 'Order placed successfully!' });
    } catch (error) {
      setNotification({ type: 'error', text: 'Failed to place order.' });
    }
  };

  const markAsDelivered = (index) => {
    const newOrders = orders.map((order, i) =>
      i === index ? { ...order, status: 'Delivered' } : order
    );
    setOrders(newOrders);
  };

  const foods = [
    { name: 'Pizza', price: 10 },
    { name: 'Burger', price: 7 },
    { name: 'Sushi', price: 15 },
  ];

  return (
    <Router>
      <div>
        <h1>Food Delivery App</h1>
        <Notification message={notification} />
        <Routes>
          <Route
            path="/"
            element={
              authenticated ? (
                <Navigate to="/home" />
              ) : (
                <Navigate to="/register" />
              )
            }
          />
          <Route
            path="/home"
            element={
              authenticated ? (
                <>
                  <OrderForm placeOrder={placeOrder} />
                  <FoodList foods={foods} placeOrder={placeOrder} />
                  <OrderList orders={orders} markAsDelivered={markAsDelivered} setSelectedOrder={setSelectedOrder} />
                  {selectedOrder && <OrderDetail order={selectedOrder} />}
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/register"
            element={<Register setAuthenticated={setAuthenticated} />}
          />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route
            path="/login"
            element={<Login setAuthenticated={setAuthenticated} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
