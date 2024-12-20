import React from "react";
import { useStore } from "effector-react";
import { $filter, setFilter } from "../store";
import { Container, FormControl, MenuItem, Select, Typography } from "@mui/material";

const ExpenseFilter = () => {
    const filter = useStore($filter);

    const handleFilterChange = (e) => {
        setFilter(e.target.value)
    }
    return (
        <Container sx={{ display: "flex", flexDirection: "row", alignItems: "center", mb: 2, mt: 2, justifyContent: "center" }}>
          <Typography variant="h5" gutterBottom mr={2}>Filter by Category</Typography>
          <FormControl>
            <Select value={filter} onChange={handleFilterChange}>
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="Food">Food</MenuItem>
              <MenuItem value="Transport">Transport</MenuItem>
              <MenuItem value="Entertainment">Entertainment</MenuItem>
            </Select>
          </FormControl>
        </Container>
      );
}

export default ExpenseFilter;