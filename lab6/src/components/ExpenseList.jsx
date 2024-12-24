import React, { useState } from "react";
import { useStore } from "effector-react";
import { $filteredExpenses, removeExpense } from "../store";
import ExpenseForm from "./ExpenseForm";
import { Typography, Box, List, ListItem, ListItemText } from "@mui/material";
import CustomButton from "./ui/CustomButton/CustomButton";

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
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 4 }}>
      <Typography variant="h4" gutterBottom sx={{textAlign: "center"}}>
        Expenses
      </Typography>
      <List sx={{ width: "75%" }}>
        {expenses.map((expense) => (
          <ListItem key={expense.id} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <ListItemText
              primary={`${expense.description} - ${expense.amount} * ${expense.funds} (${expense.category})`}
            />
            <CustomButton submit={false} text="Edit" color="primary" handler={() => handleEdit(expense)}></CustomButton>
            <CustomButton submit={false} text="Remove" color="error" handler={() => handleRemove(expense.id)}></CustomButton>
          </ListItem>
        ))}
      </List>
      {editingExpense && (
        <ExpenseForm
          expenseToEdit={editingExpense}
          onEditComplete={handleEditComplete}
        />
      )}
    </Box>
  );
};

export default ExpenseList;