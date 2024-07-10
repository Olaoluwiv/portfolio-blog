import React, { useState } from 'react';

const OrderForm = ({ placeOrder }) => {
  const [food, setFood] = useState('');
  const [price, setPrice] = useState(0);
  const [selfPickup, setSelfPickup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    placeOrder({ text: food, price, selfPickup });
    setFood('');
    setPrice(0);
    setSelfPickup(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Place an Order</h2>
      <input
        type="text"
        placeholder="Food"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        />
      <label>
        <input
          type="checkbox"
          checked={selfPickup}
          onChange={(e) => setSelfPickup(e.target.checked)}
        />
        Self Pickup
      </label>
      <button type="submit">Place Order</button>
    </form>
  );
};
export default OrderForm;
