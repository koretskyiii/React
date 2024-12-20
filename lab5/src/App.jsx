import React from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseSummary from "./components/ExpenseSummary";
import { Container, Typography } from "@mui/material";
function App() {
  
  return (
    <>
    <Container>
        <Typography variant="h2" gutterBottom sx={{textAlign: "center"}}>Expense Tracker</Typography>
        <ExpenseForm />
        <ExpenseFilter />
        <ExpenseList />
        <ExpenseSummary />
    </Container>

    </>
  )
}

export default App
