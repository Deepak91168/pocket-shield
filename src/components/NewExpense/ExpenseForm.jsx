import React, { useState } from "react";
import "./ExpenseForm.css";
export const ExpenseForm = (props) => {
  //State Handeling
  const [inputtitle, setTitle] = useState("");
  const [inputamount, setAmount] = useState("");
  const [inputdate, setDate] = useState("");
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  //Handeling Submit
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseDate = {
      title: inputtitle,
      amount: inputamount,
      date: new Date(inputdate),
    };
    props.onsaveExpenses(expenseDate);
    //Reseting the Values
    setTitle("");
    setAmount("");
    setDate("");
  };
  const [form, setFrom] = useState(false);
  const showformhandler = () => {
    setFrom(true);
  };
  const cancleHandeler = () =>{
    setFrom(false);
  }
  let showForm = <button onClick={showformhandler}>Add Expense</button>;
  if (form) {
    showForm = (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__controls">
            <label>Title</label>
            <input
              type="text"
              value={inputtitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__controls">
            <label>Amount</label>
            <input
              type="number"
              value={inputamount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__controls">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              value={inputdate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={cancleHandeler}>Cancle</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
  return (
    <>
      {showForm}
    </>
  );
};
