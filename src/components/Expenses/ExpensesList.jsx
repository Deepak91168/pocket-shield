import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
export const ExpensesList = (props) => {
  let expenseContent = <h3 className="expenses-list__fallback">No Expense Found</h3>;
  if (props.item.length > 0) {
    expenseContent = props.item.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return <ul className="expenses-list">{expenseContent}</ul>;
};
