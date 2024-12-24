import React from "react";
import { useStore } from "effector-react";
import { $filter, setFilter } from "../store";
import { Container, FormControl, Typography } from "@mui/material";
import Selection from "./ui/Selection/Selection";
const ExpenseFilter = () => {
    const filter = useStore($filter);

    const handleFilterChange = (e) => {
        setFilter(e.target.value)
    }
    return (
      <Container sx={{ display: "flex", flexDirection: "row", alignItems: "center", mb: 2, mt: 2, justifyContent: "center" }}>
        <Typography variant="h5" gutterBottom mr={2}>Filter by Category</Typography>
        <FormControl>
          <Selection filter={filter} onChangeHandler={handleFilterChange}></Selection>
        </FormControl>
      </Container>
    );
}

export default ExpenseFilter;