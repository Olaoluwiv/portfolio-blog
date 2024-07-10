import React from 'react';

const OrderDetail = ({ order }) => {
  if (!order) {
    return <div>Please select an order to view details.</div>;
  }

  const deliveryFee = order.selfPickup ? 0 : 5; // Example delivery fee
  const totalCost = order.price + deliveryFee;

  return (
    <div>
      <h2>Order Detail</h2>
      <p>Food: {order.text}</p>
      <p>Price: ${order.price}</p>
      <p>Delivery Fee: ${deliveryFee}</p>
      <p>Total Cost: ${totalCost}</p>
    </div>
  );
};


export default OrderDetail;
