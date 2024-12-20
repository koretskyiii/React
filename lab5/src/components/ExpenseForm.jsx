import React, { useState } from "react";
import { addExpense, editExpense } from "../store";

const ExpenseForm = ({ expenseToEdit, onEditComplete }) => {
    const [description, setDescription] = useState(expenseToEdit?.description || "");
    const [category, setCategory] = useState(expenseToEdit?.category || "");
    const [amount, setAmount] = useState(expenseToEdit?.amount || "");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!description.trim() || !category || !amount) {
            console.error("All fields are required.");
            return;
          }

        const expense = {
            id: expenseToEdit?.id || Date.now(),
            description: description,
            amount: parseFloat(amount),
            category
          };
      
          if (expenseToEdit) {
            console.log(expense)
            editExpense(expense);
            onEditComplete();
          } else {
            addExpense(expense);
          }
      
          setDescription("");
          setAmount("");
          setCategory("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => {
                setDescription(e.target.value)
            }}
            required
        />
        <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Entertainment">Entertainment</option>
        </select>
        <button type="submit">{expenseToEdit ? "Edit Expense" : "Add Expense"}</button>
        </form>
    )
}
export default ExpenseForm