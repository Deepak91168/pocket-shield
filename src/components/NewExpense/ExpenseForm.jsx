import React, { useState } from "react";
import "./ExpenseForm.css";
export const ExpenseForm = () => {
    const [title,setTitle] = useState('');
    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="number" />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
