import React from 'react';

const FoodList = ({ foods, placeOrder }) => {
  return (
    <div>
      <h2>Food List</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>
            {food.name} - ${food.price}
            <button onClick={() => placeOrder(food.name, food.price)}>Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
