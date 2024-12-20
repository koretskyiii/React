import React from "react";
import { useStore } from "effector-react";
import { $totalAmount, $totalFunds } from "../store";

const ExpenseSummary = () => {
    const totalAmount = useStore($totalAmount);
    const totalFunds = useStore($totalFunds);
    return (
        <div>
          <h2>Total Amount: {totalAmount}</h2>
          <h2>Total Funds: {totalFunds}&#8372;</h2>
        </div>
      );
}

export default ExpenseSummary;