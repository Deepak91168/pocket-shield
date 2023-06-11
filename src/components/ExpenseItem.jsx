import React from "react";
import './ExpenseItem.css'
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      {/* <div>{props.date.toDateString()}</div> */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₹{props.amount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;