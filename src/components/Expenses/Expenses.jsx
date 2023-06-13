import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { ExpensesList } from "./ExpensesList";
const Expenses = (props) => {
  const [filteredyear, setFiletredYear] = useState("2022");
  const newYearHandler = (selectedYear) => {
    setFiletredYear(selectedYear);
  };
  const filtedExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredyear;
  });
  // let expenseContent = <p>No Expense Found</p>
  // if(filtedExpense.length > 0){
  //   expenseContent =   filtedExpense.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }
  return (

      <Card className="expenses">
        <ExpensesFilter
          selectedyear={filteredyear}
          onYearChange={newYearHandler}
        />
        <ExpensesList item={filtedExpense} />
      </Card>

  );
};
export default Expenses;
