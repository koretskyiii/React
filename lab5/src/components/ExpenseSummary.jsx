import React from "react";
import { useStore } from "effector-react";
import { $totalAmount } from "../store";

const ExpenseSummary = () => {
    const totalAmount = useStore($totalAmount);
    return (
        <div>
          <h2>Total Amount: {totalAmount}</h2>
        </div>
      );
}

export default ExpenseSummary;