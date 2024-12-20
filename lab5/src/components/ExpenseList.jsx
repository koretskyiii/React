import React, { useState } from "react";
import { useStore } from "effector-react";
import { $filteredExpenses, removeExpense } from "../store";
import ExpenseForm from "./ExpenseForm";

const ExpenseList = () => {
  const expenses = useStore($filteredExpenses);
  const [editingExpense, setEditingExpense] = useState(null);

  const handleRemove = (id) => {
    removeExpense(id);
  };

  const handleEdit = (expense) => {
    setEditingExpense(expense);
  };

  const handleEditComplete = () => {
    setEditingExpense(null);
  };

  return (
    <div>
      <h2>Expenses</h2>
      {expenses.map((expense) => (
        <div key={expense.id}>
          <span>{expense.description} - {expense.amount} * {expense.funds} ({expense.category})</span>
          <button onClick={() => handleEdit(expense)}>Edit</button>
          <button onClick={() => handleRemove(expense.id)}>Remove</button>
        </div>
      ))}
      {editingExpense && (
        <ExpenseForm
          expenseToEdit={editingExpense}
          onEditComplete={handleEditComplete}
        />
      )}
    </div>
  );
};

export default ExpenseList;