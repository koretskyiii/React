import React from "react";
import { useStore } from "effector-react";
import { $filter, setFilter } from "../store";

const ExpenseFilter = () => {
    const filter = useStore($filter);

    const handleFilterChange = (e) => {
        setFilter(e.target.value)
    }
    return (
        <div>
          <h3>Filter by Category</h3>
          <select value={filter} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>
      );
}

export default ExpenseFilter;