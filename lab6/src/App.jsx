import React, { Suspense, lazy } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseSummary from "./components/ExpenseSummary";
import { Container, Typography } from "@mui/material";
const ExpenseList = lazy(() => import("./components/ExpenseList"));
function App() {
  
  return (
    <>
    <Container>
        <Typography variant="h2" gutterBottom sx={{textAlign: "center"}}>Expense Tracker</Typography>
        <ExpenseForm />
        <ExpenseFilter />
        <Suspense fallback={<div>Loading...</div>}>
          <ExpenseList />
        </Suspense>
        <ExpenseList />
        <ExpenseSummary />
    </Container>
    </>
  )
}

export default App
