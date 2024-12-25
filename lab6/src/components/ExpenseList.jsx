import React, { useMemo } from "react";
import { useStore } from "effector-react";
import { $filteredExpenses, removeExpense } from "../store";
import ExpenseForm from "./ExpenseForm";
import { Typography, Box, List } from "@mui/material";
import CustomListItem from "./ui/CustomListItem/CustomListItem";
import useEditExpense from "../hooks/useEditExpense";

const ExpenseList = () => {
  const expenses = useStore($filteredExpenses);
  const { editingExpense, handleEdit, handleEditComplete } = useEditExpense();

  const handleRemove = (id) => {
    removeExpense(id);
  };

  // Використовуємо useMemo для оптимізації списку
  const renderedExpenses = useMemo(() => {
    console.log("renderedExpenses");
    
    return expenses.map((expense) => (
      <CustomListItem
        key={expense.id}
        expense={expense}
        onEdit={() => handleEdit(expense)}
        onRemove={() => handleRemove(expense.id)}
      />
    ));
  }, [expenses]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        Expenses
      </Typography>
      <List sx={{ width: "75%" }}>
        {renderedExpenses}
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
