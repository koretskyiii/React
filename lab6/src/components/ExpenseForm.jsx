import React, { useState } from "react";
import { addExpense, editExpense } from "../store";
import { TextField, InputLabel, FormControl, FormHelperText } from '@mui/material';
import Selection from "./ui/Selection/Selection";
import CustomButton from "./ui/CustomButton/CustomButton";
import TextInput from "./ui/TextInput/TextInput";

const ExpenseForm = ({ expenseToEdit, onEditComplete }) => {
  const [description, setDescription] = useState(expenseToEdit?.description || "");
  const [category, setCategory] = useState(expenseToEdit?.category || "");
  const [amount, setAmount] = useState(expenseToEdit?.amount || "");
  const [funds, setFunds] = useState(expenseToEdit?.funds || "");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description.trim() || !category || !amount || !funds) {
      setError("All fields are required.");
      return;
    }

    const expense = {
      id: expenseToEdit?.id || Date.now(),
      description,
      amount: parseFloat(amount),
      funds: parseFloat(funds),
      category,
    };

    if (expenseToEdit) {
      editExpense(expense);
      onEditComplete();
    } else {
      addExpense(expense);
    }

    setDescription("");
    setAmount("");
    setCategory("");
    setFunds("");
    setError(""); // Reset error after submission
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
      
      <TextInput width="25%" type="text" label="Description" value={description} onChangeHandler={(e) => setDescription(e.target.value)}></TextInput>
      <TextInput width="20%" type="number" label="Amount" value={amount} onChangeHandler={(e) => setAmount(e.target.value)}></TextInput>
      <TextInput width="20%" type="number" label="Funds (₴)" value={funds} onChangeHandler={(e) => setFunds(e.target.value)}></TextInput>

      <FormControl fullWidth required margin="normal" sx={{ width: "25%" }}>
        <InputLabel>Category</InputLabel>
        <Selection filter={category} onChangeHandler={(e) => setCategory(e.target.value)} label="Category"></Selection>
        {error && <FormHelperText error>{error}</FormHelperText>}
      </FormControl>
      <CustomButton submit={true} handler={handleSubmit} text = {expenseToEdit ? "Edit Expense" : "Add Expense"} color="primary"></CustomButton>
    </form>
  );
};

export default ExpenseForm;
