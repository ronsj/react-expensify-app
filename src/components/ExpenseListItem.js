import React from 'react';

const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <h3>Description: { description }</h3>
    <p>Amount: { amount }</p>
    <p>Created At: { createdAt }</p>
  </div>
);

export default ExpenseListItem;
