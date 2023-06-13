import React from "react";
import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";
export const NewExpense = (props) => {
  const saveHandeler = (previousExpenses) => {
    const expenseDate = {
      ...previousExpenses,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseDate);
  };
  return (
    <div className="new-expense">
      {/* onsaveExpenses pointing to the function */}
      <ExpenseForm onsaveExpenses={saveHandeler} />
    </div>
  );
};
