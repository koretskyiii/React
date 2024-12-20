import React from "react";
import { useStore } from "effector-react";
import { $totalAmount, $totalFunds } from "../store";
import { Container, Typography } from "@mui/material";

const ExpenseSummary = () => {
    const totalAmount = useStore($totalAmount);
    const totalFunds = useStore($totalFunds);
    return (
        <Container border={1} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", mt: 4 }}  >
          <Typography variant="h5">Total Amount: <span style={{ color: "purple" }}>{totalAmount}&#8372;</span></Typography >
          <Typography variant="h5">Total Funds: <span style={{ color: "green" }}>{totalFunds}&#8372;</span></Typography >
        </Container>
      );
}

export default ExpenseSummary;