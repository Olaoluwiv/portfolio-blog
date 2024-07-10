import React from 'react';

const OrderList = ({ orders, markAsDelivered, setSelectedOrder }) => {
  return (
    <div>
      <h2>Order List</h2>
      {orders.length === 0 ? (
        <p>No orders available.</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              <div>
                <p>Order #{index + 1}</p>
                <p>Food: {order.name}</p>
                <p>Price: ${order.price}</p>
                <p>Status: {order.status}</p>
                <button onClick={() => markAsDelivered(index)}>
                  Mark as Delivered
                </button>
                <button onClick={() => setSelectedOrder(order)}>
                  View Details
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>)
  );
};


export default OrderList;
