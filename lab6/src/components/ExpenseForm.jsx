import React, { useState } from "react";
import { addExpense, editExpense } from "../store";
import { Button, TextField, Select, MenuItem, InputLabel, FormControl, FormHelperText } from '@mui/material';

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
      category
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
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        required
        margin="normal"
        sx={ {width: "25%"} }
      />
      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        fullWidth
        required
        margin="normal"
        sx={ {width: "20%"} }
      />
      <TextField
        label="Funds (₴)"
        type="number"
        value={funds}
        onChange={(e) => setFunds(e.target.value)}
        fullWidth
        required
        margin="normal"
        sx={ {width: "20%"} }
      />
      <FormControl fullWidth required margin="normal" sx={ {width: "25%"} }>
        <InputLabel>Category</InputLabel>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          label="Category"
        >
          <MenuItem value="Food">Food</MenuItem>
          <MenuItem value="Transport">Transport</MenuItem>
          <MenuItem value="Entertainment">Entertainment</MenuItem>
          <MenuItem value="Housing">Housing</MenuItem>
          <MenuItem value="Health">Health</MenuItem>
          <MenuItem value="Education">Education</MenuItem>
        </Select>
        {error && <FormHelperText error>{error}</FormHelperText>}
      </FormControl>
      <Button variant="contained" type="submit" fullWidth sx={ {width: "75%"} }>
        {expenseToEdit ? "Edit Expense" : "Add Expense"}
      </Button>
    </form>
  );
};

export default ExpenseForm;
