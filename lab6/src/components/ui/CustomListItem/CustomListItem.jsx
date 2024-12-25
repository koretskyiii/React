import React, { useMemo } from "react";
import { ListItem, ListItemText } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import { useId } from "react";

const CustomListItem = ({ expense, onEdit, onRemove }) => {    
    return (
        <ListItem key={expense.id} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <ListItemText
              primary={`${expense.description} - ${expense.amount} * ${expense.funds} (${expense.category})`}
            />
            <CustomButton submit={false} text="Edit" color="primary" handler={onEdit}></CustomButton>
            <CustomButton submit={false} text="Remove" color="error" handler={onRemove}></CustomButton>
        </ListItem>
    )
};

export default CustomListItem