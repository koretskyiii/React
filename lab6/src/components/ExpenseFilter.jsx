import React from "react";
import { Container, FormControl, Typography } from "@mui/material";
import Selection from "./ui/Selection/Selection";
import useFilter from "../hooks/useFilter";

const ExpenseFilter = () => {
    const {filter, updateFilter} = useFilter();
    return (
      <Container sx={{ display: "flex", flexDirection: "row", alignItems: "center", mb: 2, mt: 2, justifyContent: "center" }}>
        <Typography variant="h5" gutterBottom mr={2}>Filter by Category</Typography>
        <FormControl>
          <Selection filter={filter} onChangeHandler={(e) => updateFilter(e.target.value)}></Selection>
        </FormControl>
      </Container>
    );
}

export default ExpenseFilter;