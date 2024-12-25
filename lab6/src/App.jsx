import React, { Suspense, lazy } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseFilter from "./components/ExpenseFilter";
import { Container, Typography } from "@mui/material";
import CustomButton from "./components/ui/CustomButton/CustomButton";
import ExpenseList from "./components/ExpenseList";
import useToggleSummary from "./hooks/useToggleSummary";

const ExpenseSummary = lazy(() => import("./components/ExpenseSummary"));

function App() {
  const { showSummary, toggleSummary } = useToggleSummary()

  return (
    <Container>
      <Typography variant="h2" gutterBottom sx={{ textAlign: "center" }}>
        Expense Tracker
      </Typography>
      <ExpenseForm />
      <ExpenseFilter />
      <ExpenseList />
      <Container
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CustomButton
          submit={false}
          text={showSummary ? "Hide Summary" : "Show Summary"}
          color="primary"
          handler={toggleSummary}
        />
        {showSummary && (
          <Suspense fallback={<div>Loading Summary...</div>}>
            <ExpenseSummary />
          </Suspense>
        )}
      </Container>
    </Container>
  );
}

export default App;
