import React from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseSummary from "./components/ExpenseSummary";

function App() {
  
  return (
    <>
      <h1>Expense Tracker</h1>
      <ExpenseForm />
      <ExpenseFilter />
      <ExpenseList />
      <ExpenseSummary />
    </>
  )
}

export default App
